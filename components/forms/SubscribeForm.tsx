import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/site";

export function SubscribeForm({ dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <div className="space-y-4">
      <Button href={site.telegram}>{dict.catalog.downloadSample}</Button>
      <p className="material-summary text-text-muted">
        {dict.redesign.calendarSampleNote}
      </p>
    </div>
  );
}
