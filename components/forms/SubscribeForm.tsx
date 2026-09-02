"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { subscribeSchema } from "@/lib/schemas";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";
import { sendSubscribeFromBrowser } from "@/lib/submit-form";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Checkbox, Input } from "@/components/ui/Input";

type FormValues = {
  email: string;
  consent: boolean;
  website?: string;
};

export function SubscribeForm({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const form = useForm<FormValues>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: { email: "", consent: false, website: "" },
  });
  const consent = form.watch("consent");

  async function onSubmit(values: FormValues) {
    setStatus("loading");
    try {
      sendSubscribeFromBrowser(values.email);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="space-y-3">
        <p>{dict.lead.success}</p>
        <Link
          href={localePath(locale, "/produkty")}
          className="underline underline-offset-2"
        >
          {dict.lead.successCatalog}
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <Input
        type="email"
        autoComplete="email"
        label={dict.lead.email}
        {...form.register("email")}
        error={form.formState.errors.email ? dict.forms.invalidEmail : undefined}
      />
      <div className="hidden" aria-hidden="true">
        <label>
          {dict.forms.honeypot}
          <input tabIndex={-1} autoComplete="off" {...form.register("website")} />
        </label>
      </div>
      <Checkbox
        label={
          <>
            {dict.lead.consent}{" "}
            <Link href={localePath(locale, "/politika")} className="underline underline-offset-2">
              {dict.lead.consentLink}
            </Link>
          </>
        }
        {...form.register("consent")}
        error={form.formState.errors.consent ? dict.forms.required : undefined}
      />
      <Button type="submit" disabled={!consent || status === "loading"}>
        {status === "loading" ? dict.forms.sending : dict.lead.submit}
      </Button>
      {status === "error" && (
        <p className="text-[15px] text-accent" role="alert">
          {dict.lead.error}{" "}
          <a
            href={site.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            {dict.cta.telegram}
          </a>
        </p>
      )}
    </form>
  );
}
