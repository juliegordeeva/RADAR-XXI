import type { ProductKind } from "@/content/types";
import { cn } from "@/lib/cn";

const tones: Record<ProductKind, string> = {
  calendar: "from-[#f4eee3] to-[#e8dcc8]",
  cards: "from-[#f3e4d6] to-[#e8c9b4]",
  advent: "from-[#e4eee6] to-[#c9ddd2]",
  kit: "from-[#e6ecf3] to-[#c9d6e6]",
  quest: "from-[#ece6f3] to-[#d4cbe4]",
  course: "from-[#e8ece8] to-[#c5d4ce]",
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
        "relative overflow-hidden rounded-[16px] border border-border bg-gradient-to-br aspect-[4/3]",
        tones[kind],
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-[70%] max-w-xs rounded-[12px] bg-surface/90 border border-border p-4 shadow-[0_1px_3px_rgba(31,36,33,0.06)]">
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
