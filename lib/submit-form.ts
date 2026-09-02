import { site } from "@/lib/site";

function mailLink(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function sendLeadFromBrowser(fields: {
  name: string;
  contact: string;
  product?: string;
  childAge?: string;
}) {
  const body = [
    `Имя: ${fields.name}`,
    `Контакт: ${fields.contact}`,
    fields.product ? `Набор: ${fields.product}` : "",
    fields.childAge ? `Возраст ребёнка: ${fields.childAge}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  if (site.email) {
    window.location.href = mailLink("Заявка RADAR XXI Kids", body);
    return;
  }
  window.open(site.telegram, "_blank", "noopener,noreferrer");
}

export function sendSubscribeFromBrowser(email: string) {
  if (site.email) {
    window.location.href = mailLink("PDF RADAR XXI Kids", `Почта: ${email}`);
    return;
  }
  window.open(site.telegram, "_blank", "noopener,noreferrer");
}
