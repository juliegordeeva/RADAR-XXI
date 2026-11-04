"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  universitySchema,
  type UniversityInput,
  type UniversityFields,
} from "@/lib/schemas";
import {
  availableInternships,
  enrollmentAges,
  pilotInternship,
  corporateSources,
  referralSources,
} from "@/content/internships";
import { sectors } from "@/content/competencies";
import { readUniversityQuery } from "@/lib/university-query";
import { collectTracking } from "@/lib/utm";
import { sendFormFromBrowser, withTracking } from "@/lib/submit-form";
import { ageLabels, loc } from "@/lib/age";
import { localePath } from "@/lib/locale-path";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { Button } from "@/components/ui/Button";
import { Input, Checkbox } from "@/components/ui/Input";
import { PreparedRequest } from "@/components/forms/PreparedRequest";

type Values = UniversityFields;
export function UniversityForm({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const t = dict.university.form;
  const params = useSearchParams();
  const query = params.toString();
  const previous = useRef<ReturnType<typeof readUniversityQuery> | null>(null);
  const [prepared, setPrepared] = useState("");
  const [failed, setFailed] = useState(false);
  const form = useForm<Values, unknown, UniversityInput>({
    resolver: zodResolver(universitySchema),
    defaultValues: {
      name: "",
      contact: "",
      age: pilotInternship.ageGroups[0],
      program: pilotInternship.slug,
      source: "",
      company: "",
      sector: "",
      consent: false,
      website: "",
    },
  });
  const { setValue } = form;
  useEffect(() => {
    const next = readUniversityQuery(new URLSearchParams(query));
    const old = previous.current;
    for (const key of [
      "age",
      "program",
      "source",
      "company",
      "sector",
    ] as const) {
      if (
        !old ||
        next[key] !== old[key] ||
        (key === "age" && next.program !== old.program)
      )
        setValue(key, next[key], { shouldValidate: false });
    }
    if (old && old.program !== next.program) setPrepared("");
    previous.current = next;
  }, [query, setValue]);
  const age = form.watch("age");
  const source = form.watch("source");
  const companyVisible = corporateSources.includes(source);
  const consent = form.watch("consent");
  const errors = form.formState.errors;
  const selectClass =
    "min-h-12 w-full rounded-[12px] border border-border bg-surface px-3 py-2 text-[16px] text-text";
  async function submit(values: UniversityInput) {
    setFailed(false);
    try {
      const internship = availableInternships.find(
        (item) => item.slug === values.program,
      );
      if (!internship || !internship.ageGroups.includes(values.age)) {
        form.setError("program", { message: t.invalid });
        return;
      }
      const corporate = corporateSources.includes(values.source);
      const tracking = {
        ...collectTracking("universitet"),
        from: values.source || undefined,
        company: corporate ? values.company || undefined : undefined,
      };
      const fields = {
        [t.subjectLabel]: t.subject,
        [t.name]: values.name,
        [t.contact]: values.contact,
        [t.age]: loc(ageLabels[values.age], locale),
        [t.program]: loc(internship.title, locale),
        [t.source]:
          dict.university.form.sources[values.source as keyof typeof t.sources],
        [t.company]: corporate ? values.company : undefined,
        [t.sector]: values.sector
          ? loc(
              sectors.find((item) => item.key === values.sector)!.title,
              locale,
            )
          : t.unknown,
      };
      setPrepared(
        await sendFormFromBrowser(t.subject, withTracking(fields, tracking)),
      );
    } catch {
      setFailed(true);
    }
  }
  if (prepared)
    return (
      <PreparedRequest
        body={prepared}
        dict={dict}
        onEdit={() => setPrepared("")}
      />
    );
  return (
    <form
      onSubmit={form.handleSubmit(submit)}
      className="university-form space-y-5"
      noValidate
    >
      <p>{dict.university.formIntro}</p>
      <div className="grid gap-5 md:grid-cols-2">
        <Input
          id="university-name"
          autoComplete="name"
          label={t.name}
          {...form.register("name")}
          error={errors.name ? dict.forms.required : undefined}
        />
        <Input
          id="university-contact"
          label={t.contact}
          hint={t.contactHint}
          {...form.register("contact")}
          error={errors.contact ? t.invalidContact : undefined}
        />
        <label className="form-select-label" htmlFor="university-age">
          {t.age}
          <select
            id="university-age"
            className={selectClass}
            aria-invalid={!!errors.age}
            {...form.register("age", {
              onChange: (event) => {
                const selected = availableInternships.find(
                  (item) => item.slug === form.getValues("program"),
                );
                if (
                  selected &&
                  !selected.ageGroups.includes(event.target.value)
                )
                  setValue("program", "");
              },
            })}
          >
            <option value="">{t.choose}</option>
            {enrollmentAges.map((value) => (
              <option key={value} value={value}>
                {loc(ageLabels[value], locale)}
              </option>
            ))}
          </select>
          {errors.age && (
            <span className="form-error">{dict.forms.required}</span>
          )}
        </label>
        <label className="form-select-label" htmlFor="university-program">
          {t.program}
          <select
            id="university-program"
            className={selectClass}
            aria-invalid={!!errors.program}
            {...form.register("program", {
              onChange: (event) => {
                const selected = availableInternships.find(
                  (item) => item.slug === event.target.value,
                );
                if (
                  selected &&
                  (!age || !selected.ageGroups.some((value) => value === age))
                )
                  setValue("age", selected.ageGroups[0]);
              },
            })}
          >
            <option value="">{t.choose}</option>
            {availableInternships
              .filter(
                (item) => !age || item.ageGroups.some((value) => value === age),
              )
              .map((item) => (
                <option key={item.slug} value={item.slug}>
                  {loc(item.title, locale)} ·{" "}
                  {item.ageGroups
                    .map((a) => loc(ageLabels[a], locale))
                    .join(", ")}
                </option>
              ))}
          </select>
          {errors.program && (
            <span className="form-error">{dict.forms.required}</span>
          )}
        </label>
        <label className="form-select-label" htmlFor="university-source">
          {t.source}
          <select
            id="university-source"
            className={selectClass}
            {...form.register("source", {
              onChange: (event) => {
                if (!corporateSources.includes(event.target.value))
                  setValue("company", "");
              },
            })}
          >
            <option value="">{t.choose}</option>
            {referralSources.map((value) => (
              <option key={value} value={value}>
                {t.sources[value]}
              </option>
            ))}
          </select>
        </label>
        {companyVisible && (
          <Input
            id="university-company"
            label={t.company}
            maxLength={80}
            {...form.register("company")}
            error={errors.company ? dict.forms.required : undefined}
          />
        )}
        <label
          className="form-select-label md:col-span-2"
          htmlFor="university-sector"
        >
          {t.sector}
          <select
            id="university-sector"
            className={selectClass}
            {...form.register("sector")}
          >
            <option value="">{t.unknown}</option>
            {sectors.map((item) => (
              <option key={item.key} value={item.key}>
                {loc(item.title, locale)}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="hidden" aria-hidden="true">
        <input
          aria-label={dict.forms.honeypot}
          tabIndex={-1}
          autoComplete="off"
          {...form.register("website")}
        />
      </div>
      <Checkbox
        id="university-consent"
        {...form.register("consent")}
        label={
          <>
            {t.consent}.{" "}
            <Link href={localePath(locale, "/politika")} className="underline">
              {t.policy}
            </Link>
          </>
        }
        error={errors.consent ? dict.forms.required : undefined}
      />
      <Button type="submit" disabled={!consent || form.formState.isSubmitting}>
        {form.formState.isSubmitting ? t.preparing : t.prepare}
      </Button>
      {(Object.keys(errors).length > 0 || failed) && (
        <p role="alert">{failed ? t.prepareError : t.invalid}</p>
      )}
      <p>{dict.university.paymentNote}</p>
    </form>
  );
}
