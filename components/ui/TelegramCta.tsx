import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/lib/dictionary";
import { site } from "@/lib/site";

export function TelegramCta({
  dict,
  variant = "primary",
  className,
}: {
  dict: Dictionary;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <Button href={site.telegram} variant={variant} className={className}>
      {dict.cta.telegram}
    </Button>
  );
}
