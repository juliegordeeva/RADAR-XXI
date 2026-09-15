"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { businessFormSchema, type BusinessFormInput } from "@/lib/schemas";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";
import { sendFormFromBrowser, withTracking } from "@/lib/submit-form";
import { collectTracking } from "@/lib/utm";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Checkbox, Input, Textarea } from "@/components/ui/Input";

export type BusinessFormVariant = "general" | "office" | "hikes";

type FormValues = BusinessFormInput;

const productByVariant: Record<BusinessFormVariant, string> = {
  general: "b2b-program",
  office: "office-day",
  hikes: "family-hikes",
};

export function BusinessForm({
  locale,
  dict,
  variant,
}: {
  locale: Locale;
  dict: Dictionary;
  variant: BusinessFormVariant;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const schema = useMemo(() => {
    if (variant === "office") {
      return businessFormSchema.superRefine((data, ctx) => {
        if (!data.childrenCount?.trim()) {
          ctx.addIssue({ code: "custom", path: ["childrenCount"], message: "required" });
        }
        if (!data.ages?.trim()) {
          ctx.addIssue({ code: "custom", path: ["ages"], message: "required" });
        }
      });
    }
    if (variant === "hikes") {
      return businessFormSchema.superRefine((data, ctx) => {
        if (!data.familiesCount?.trim()) {
          ctx.addIssue({ code: "custom", path: ["familiesCount"], message: "required" });
        }
        if (!data.ages?.trim()) {
          ctx.addIssue({ code: "custom", path: ["ages"], message: "required" });
        }
      });
    }
    return businessFormSchema;
  }, [variant]);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      companyRole: "",
      contact: "",
      city: "",
      date: "",
      childrenCount: "",
      familiesCount: "",
      ages: "",
      comment: "",
      product: productByVariant[variant],
      consent: false,
      website: "",
    },
  });

  const consent = form.watch("consent");
  const labels = dict.b2bForm;
  const submitLabel =
    variant === "office"
      ? labels.submitOffice
      : variant === "hikes"
        ? labels.submitHikes
        : labels.submitGeneral;

  async function onSubmit(values: FormValues) {
    if (values.website) {
      setStatus("success");
      return;
    }
    setStatus("loading");
    try {
      const tracking = collectTracking(`dlya-biznesa/${variant}`);
      await sendFormFromBrowser(
        `Заявка RADAR KIDS: ${values.product}`,
        withTracking(
          {
            Имя: values.name,
            "Компания и должность": values.companyRole,
            Контакт: values.contact,
            Город: values.city,
            Дата: values.date,
            "Количество детей": values.childrenCount,
            "Количество семей": values.familiesCount,
            "Возраст детей": values.ages,
            Комментарий: values.comment,
            Продукт: values.product,
          },
          tracking,
        ),
      );
      setStatus("success");
      form.reset({
        ...values,
        name: "",
        companyRole: "",
        contact: "",
        city: "",
        date: "",
        childrenCount: "",
        familiesCount: "",
        ages: "",
        comment: "",
        consent: false,
        website: "",
      });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="text-[17px] md:text-[18px]" role="status">
        {labels.success}
      </p>
    );
  }

  const fieldError = (name: keyof FormValues) =>
    form.formState.errors[name] ? dict.forms.required : undefined;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Input
          label={labels.name}
          autoComplete="name"
          {...form.register("name")}
          error={fieldError("name")}
        />
        <Input
          label={labels.companyRole}
          autoComplete="organization"
          {...form.register("companyRole")}
          error={fieldError("companyRole")}
        />
        <Input
          label={labels.contact}
          autoComplete="email"
          {...form.register("contact")}
          error={
            form.formState.errors.contact
              ? dict.forms.invalidContact
              : undefined
          }
        />
        <Input
          label={variant === "hikes" ? labels.cityRegion : labels.city}
          autoComplete="address-level2"
          {...form.register("city")}
          error={fieldError("city")}
        />
        <Input
          label={labels.date}
          {...form.register("date")}
          error={fieldError("date")}
        />
        {variant === "hikes" ? (
          <Input
            label={labels.familiesCount}
            {...form.register("familiesCount")}
            error={fieldError("familiesCount")}
          />
        ) : (
          <Input
            label={labels.childrenCount}
            {...form.register("childrenCount")}
            error={fieldError("childrenCount")}
          />
        )}
        <Input
          label={labels.ages}
          {...form.register("ages")}
          error={fieldError("ages")}
        />
      </div>
      <Textarea
        label={labels.comment}
        {...form.register("comment")}
        error={fieldError("comment")}
      />
      <input type="hidden" {...form.register("product")} />
      <div className="hidden" aria-hidden="true">
        <label>
          {dict.forms.honeypot}
          <input tabIndex={-1} autoComplete="off" {...form.register("website")} />
        </label>
      </div>
      <Checkbox
        label={
          <>
            {labels.consent}{" "}
            <Link
              href={localePath(locale, "/politika")}
              className="underline underline-offset-2"
            >
              {labels.consentLink}
            </Link>
          </>
        }
        {...form.register("consent")}
        error={form.formState.errors.consent ? dict.forms.required : undefined}
      />
      <Button type="submit" disabled={!consent || status === "loading"}>
        {status === "loading" ? dict.forms.sending : submitLabel}
      </Button>
      {status === "error" && (
        <p className="text-[15px] text-accent" role="alert">
          {labels.error}{" "}
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
