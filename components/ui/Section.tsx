import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Section({
  id,
  alt = false,
  deep = false,
  children,
  className,
}: {
  id?: string;
  alt?: boolean;
  deep?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-14 md:py-24 fade-in",
        id && "scroll-mt-[88px]",
        alt && "bg-bg-alt",
        deep && "bg-deep text-deep-text",
        className,
      )}
    >
      <div className="mx-auto max-w-[1200px] px-5 md:px-10">{children}</div>
    </section>
  );
}
