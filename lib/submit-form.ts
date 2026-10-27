import type { TrackingFields } from "@/lib/utm";

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
  // Статический сайт готовит текст; отправку выполняет пользователь в чате.
  void subject;
  return formatBody(fields);
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
    from: tracking.from,
    company: tracking.company,
  };
}

export async function sendLeadFromBrowser(fields: {
  name: string;
  contact: string;
  product?: string;
  format?: string;
  childAge?: string;
  tracking: TrackingFields;
  labels?: { name: string; contact: string; product: string; format: string; childAge: string };
}) {
  const labels = fields.labels ?? {
    name: "Имя", contact: "Контакт", product: "Набор", format: "Формат", childAge: "Возраст ребёнка",
  };
  return sendFormFromBrowser(
    "Заявка RADAR KIDS",
    withTracking(
      {
        [labels.name]: fields.name,
        [labels.contact]: fields.contact,
        [labels.product]: fields.product,
        [labels.format]: fields.format,
        [labels.childAge]: fields.childAge,
      },
      fields.tracking,
    ),
  );
}

export async function sendSubscribeFromBrowser(
  email: string,
  tracking: TrackingFields,
) {
  return sendFormFromBrowser(
    "Запрос образца RADAR KIDS",
    withTracking({ Почта: email }, tracking),
  );
}
