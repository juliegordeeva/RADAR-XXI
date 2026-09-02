import Link from "next/link";
import {
  BookOpen,
  Heart,
  HeartHandshake,
  Layers,
  Lightbulb,
  ListChecks,
  MessageCircle,
  Search,
  Shield,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  competencyByKey,
  groupColorClass,
  type CompetencyKey,
} from "@/content/competencies";
import type { Locale } from "@/lib/i18n";
import { loc } from "@/lib/age";
import { localePath } from "@/lib/locale-path";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/cn";

const icons: Record<string, LucideIcon> = {
  Search,
  Lightbulb,
  Layers,
  MessageCircle,
  HeartHandshake,
  Users,
  Heart,
  ListChecks,
  BookOpen,
  Shield,
};

export function CompetencyCard({
  competencyKey,
  locale,
  linked = true,
}: {
  competencyKey: CompetencyKey;
  locale: Locale;
  linked?: boolean;
}) {
  const item = competencyByKey[competencyKey];
  const Icon = icons[item.icon] ?? Search;

  const card = (
    <Card
      className={cn(
        "h-full space-y-3",
        linked && "hover:border-text transition-colors duration-150",
      )}
    >
      <Icon
        className={cn("size-6", groupColorClass[item.group])}
        strokeWidth={1.75}
      />
      <h3 className="font-heading text-[20px] md:text-[24px]">
        {loc(item.title, locale)}
      </h3>
      <p>{loc(item.forParent, locale)}</p>
      <p className="text-[15px] text-text-muted">
        {loc(item.signOfProgress, locale)}
      </p>
    </Card>
  );

  if (!linked) return card;

  return (
    <Link
      href={localePath(locale, `/produkty?competency=${item.key}`)}
      className="block h-full"
    >
      {card}
    </Link>
  );
}
