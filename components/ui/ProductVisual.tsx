import type { ProductKind } from "@/content/types";
import { cn } from "@/lib/cn";

const tones: Record<ProductKind, string> = {
  calendar: "bg-bg",
  cards: "bg-sky",
  advent: "bg-bg-alt",
  kit: "bg-sky",
  diary: "bg-rose",
  quest: "bg-bg-alt",
  course: "bg-sky",
};

export function ProductVisual({
  kind,
  title,
  className,
}: {
  kind: ProductKind;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[24px] border border-border aspect-[4/3]",
        tones[kind],
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-[70%] max-w-xs rounded-[12px] bg-surface/90 border border-border p-4">
          <div className="h-2 w-16 rounded-full bg-deep/30 mb-3" />
          <div className="h-2 w-full rounded-full bg-border mb-2" />
          <div className="h-2 w-5/6 rounded-full bg-border mb-2" />
          <div className="h-2 w-2/3 rounded-full bg-border" />
        </div>
      </div>
      <span className="sr-only">{title}</span>
    </div>
  );
}
