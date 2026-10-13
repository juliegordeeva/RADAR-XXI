import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={cn(
        "h-full bg-surface border border-border rounded-[24px] p-6 md:p-8",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
