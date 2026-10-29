import { useId } from "react";
import {
  skills,
  sectors,
  sectorColor,
  type SkillKey,
} from "@/content/competencies";
import { getDictionary } from "@/lib/dictionary";
import { loc } from "@/lib/age";
import type { Locale } from "@/lib/i18n";

export function SkillRadar({
  values,
  locale,
  size = 360,
  showLegend = true,
}: {
  values: Record<SkillKey, 1 | 2 | 3 | 4>;
  locale: Locale;
  size?: number;
  showLegend?: boolean;
}) {
  const t = getDictionary(locale).journey;
  const id = useId();
  const point = (angle: number, radius: number) => [
    160 + Math.sin(angle) * radius,
    160 - Math.cos(angle) * radius,
  ];
  const points = skills
    .map((skill, i) =>
      point((i * Math.PI) / 6, values[skill.key] * 30).join(","),
    )
    .join(" ");
  const description = skills
    .map(
      (skill) =>
        `${skill.code} ${loc(skill.title, locale)} — ${t.skillLevel} ${values[skill.key]}`,
    )
    .join("; ");
  return (
    <figure className="skill-radar" style={{ maxWidth: size }}>
      <svg
        viewBox="0 0 320 320"
        role="img"
        aria-label={`${t.radarTitle}. ${description}`}
        aria-describedby={id}
      >
        {sectors.map((sector, i) => {
          const start = point((i * Math.PI) / 2, 120);
          const end = point(((i + 1) * Math.PI) / 2, 120);
          return (
            <path
              key={sector.key}
              d={`M160 160 L${start.join(" ")} A120 120 0 0 1 ${end.join(" ")} Z`}
              fill={sectorColor[sector.key]}
              opacity="0.12"
            />
          );
        })}
        {[1, 2, 3, 4].map((level) => (
          <circle
            key={level}
            cx="160"
            cy="160"
            r={level * 30}
            fill="none"
            stroke="currentColor"
            opacity="0.25"
          />
        ))}
        {skills.map((skill, i) => {
          const [x, y] = point((i * Math.PI) / 6, 120);
          const label = point((i * Math.PI) / 6, 141);
          return (
            <g key={skill.key}>
              <line
                x1="160"
                y1="160"
                x2={x}
                y2={y}
                stroke="currentColor"
                opacity="0.2"
              />
              <text
                x={label[0]}
                y={label[1]}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="currentColor"
                fontSize="12"
                fontWeight="700"
              >
                {skill.code}
              </text>
            </g>
          );
        })}
        <polygon
          points={points}
          fill="currentColor"
          fillOpacity="0.25"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      <figcaption id={id}>{t.sampleRadar}</figcaption>
      {showLegend && (
        <div className="radar-legend" aria-label={t.legendTitle}>
          {sectors.map((sector) => (
            <div key={sector.key}>
              <p
                className="font-bold"
                style={{ color: sectorColor[sector.key] }}
              >
                {loc(sector.title, locale)}
              </p>
              <ul>
                {skills
                  .filter((skill) => skill.sector === sector.key)
                  .map((skill) => (
                    <li key={skill.key}>
                      {skill.code} {loc(skill.title, locale)}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </figure>
  );
}
