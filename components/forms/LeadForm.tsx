"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadSchema, type LeadInput } from "@/lib/schemas";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Checkbox, Input } from "@/components/ui/Input";

type FormValues = {
  name: string;
  contact: string;
  product?: string;
  childAge?: string;
  consent: boolean;
  website?: string;
};

export function LeadForm({
  locale,
  dict,
  product,
  compact = false,
}: {
  locale: Locale;
  dict: Dictionary;
  product?: string;
  compact?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const schema = useMemo(() => leadSchema, []);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      contact: "",
      product: product ?? "",
      childAge: "",
      consent: false,
      website: "",
    },
  });

  const consent = form.watch("consent");

  async function onSubmit(values: FormValues) {
    setStatus("loading");
    try {
      const payload: LeadInput = {
        name: values.name,
        contact: values.contact,
        product: values.product,
        childAge: values.childAge,
        consent: true,
        website: values.website ?? "",
      };
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("fail");
      setStatus("success");
      form.reset({ ...values, name: "", contact: "", childAge: "", consent: false });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-[17px] md:text-[18px]" role="status">
        {dict.forms.leadSuccess}
      </p>
    );
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className={compact ? "flex flex-col gap-5" : "grid gap-5 md:grid-cols-2"}>
        <Input
          label={dict.forms.name}
          {...form.register("name")}
          error={form.formState.errors.name ? dict.forms.required : undefined}
        />
        <Input
          label={dict.forms.contact}
          {...form.register("contact")}
          error={
            form.formState.errors.contact ? dict.forms.invalidContact : undefined
          }
        />
        <Input label={dict.forms.childAge} {...form.register("childAge")} />
        {product ? (
          <input type="hidden" {...form.register("product")} />
        ) : (
          <Input label={dict.forms.product} {...form.register("product")} />
        )}
      </div>
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
            <Link
              href={localePath(locale, "/politika")}
              className="underline underline-offset-2"
            >
              {dict.lead.consentLink}
            </Link>
          </>
        }
        {...form.register("consent")}
        error={form.formState.errors.consent ? dict.forms.required : undefined}
      />
      <Button type="submit" disabled={!consent || status === "loading"}>
        {status === "loading" ? dict.forms.sending : dict.forms.submitLead}
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
