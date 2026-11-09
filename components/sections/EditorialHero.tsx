import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { BrandArt } from "@/components/ui/BrandArt";

export function EditorialHero({
  variant = "scene",
  className = "",
  artwork,
  visual,
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
  children,
}: {
  variant?:
    | "scene"
    | "catalog"
    | "catalog-parents"
    | "approach"
    | "team"
    | "business"
    | "office"
    | "hikes"
    | "business-diary"
    | "contacts"
    | "safety"
    | "calendar"
    | "diary";
  className?: string;
  artwork?: ReactNode;
  visual?: ReactNode;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  image: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <Section className={`editorial-hero hero-${variant} ${className}`}>
      <div className="editorial-hero-grid">
        <div className="editorial-hero-copy">
          <p className="editorial-label">{eyebrow}</p>
          <h1>{title}</h1>
          {intro && <p className="editorial-intro">{intro}</p>}
          {children}
        </div>
        <div className="editorial-hero-visual">
          {visual ?? (
            <BrandArt
              name={image}
              alt={imageAlt}
              priority
              className="editorial-hero-art"
            />
          )}
          {artwork}
        </div>
      </div>
    </Section>
  );
}
