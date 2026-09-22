import { site } from "@/lib/site";
import type { TrackingFields } from "@/lib/utm";

function mailLink(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function formatBody(fields: Record<string, string | undefined>) {
  return Object.entries(fields)
    .filter(([, value]) => value && value.trim())
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
}

export async function sendFormFromBrowser(
  subject: string,
  fields: Record<string, string | undefined>,
) {
  const body = formatBody(fields);

  if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(body);
    } catch {
      // Буфер недоступен — заявка всё равно уйдёт через почту или Telegram.
    }
  }

  if (site.email) {
    window.location.href = mailLink(subject, body);
    return;
  }

  const telegramUrl = new URL(site.telegram);
  window.open(telegramUrl.toString(), "_blank", "noopener,noreferrer");
}

export function withTracking(
  fields: Record<string, string | undefined>,
  tracking: TrackingFields,
) {
  return {
    ...fields,
    Страница: tracking.page,
    Источник: tracking.source,
    utm_source: tracking.utm_source,
    utm_medium: tracking.utm_medium,
    utm_campaign: tracking.utm_campaign,
    utm_content: tracking.utm_content,
    utm_term: tracking.utm_term,
  };
}

export async function sendLeadFromBrowser(fields: {
  name: string;
  contact: string;
  product?: string;
  format?: string;
  childAge?: string;
  tracking: TrackingFields;
}) {
  await sendFormFromBrowser(
    "Заявка RADAR KIDS",
    withTracking(
      {
        Имя: fields.name,
        Контакт: fields.contact,
        Набор: fields.product,
        Формат: fields.format,
        "Возраст ребёнка": fields.childAge,
      },
      fields.tracking,
    ),
  );
}

export async function sendSubscribeFromBrowser(
  email: string,
  tracking: TrackingFields,
) {
  await sendFormFromBrowser(
    "Запрос образца RADAR KIDS",
    withTracking({ Почта: email }, tracking),
  );
}
