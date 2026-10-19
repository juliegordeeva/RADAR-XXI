"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/lib/dictionary";
import { site } from "@/lib/site";

export function PreparedRequest({
  body,
  dict,
  onEdit,
}: {
  body: string;
  dict: Dictionary;
  onEdit: () => void;
}) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">(
    "idle",
  );
  const t = dict.redesign;
  async function copy() {
    try {
      await navigator.clipboard.writeText(body);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
  }
  return (
    <div className="space-y-5">
      <h3>{t.preparedTitle}</h3>
      <p role="status">{t.preparedNote}</p>
      <label className="flex flex-col gap-2 text-[16px] font-bold">
        {t.message}
        <textarea
          readOnly
          value={body}
          rows={9}
          className="w-full rounded-[12px] border border-border bg-surface p-4 text-[16px] font-normal leading-6"
        />
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button onClick={copy} variant="secondary">
          {copyStatus === "copied" ? t.copied : t.copy}
        </Button>
        <Button href={site.telegram}>{dict.cta.telegram}</Button>
      </div>
      {copyStatus === "error" && <p role="alert">{t.copyError}</p>}
      <button type="button" onClick={onEdit} className="text-link">
        {t.edit}
      </button>
    </div>
  );
}
