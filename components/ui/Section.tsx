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
        "py-12 md:py-16",
        id && "scroll-mt-[88px]",
        alt && "bg-bg-alt",
        deep && "bg-deep text-deep-text",
        className,
      )}
    >
      <div className="section-inner mx-auto max-w-[1200px] min-w-0 px-5 sm:px-6 md:px-8">
        {children}
      </div>
    </section>
  );
}
