import type { Locale } from "@/lib/i18n";
import { contactRoute, type ContactKind } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
export function ContactPanel({
  locale,
  kind,
  context,
}: {
  locale: Locale;
  kind: ContactKind;
  context: string;
}) {
  const route = contactRoute(kind, context);
  const ru = locale === "ru";
  const label = route.personal
    ? kind === "corporate"
      ? ru
        ? "Запросить программу и расчёт"
        : "Request a programme and quote"
      : ru
        ? "Задать вопрос о материале"
        : "Ask about this material"
    : ru
      ? "Написать в RADAR KIDS"
      : "Message RADAR KIDS";
  return (
    <div
      className="contact-panel"
      data-contact-kind={kind}
      data-context={context}
    >
      <p className="font-bold">{context}</p>
      {kind === "corporate" && (
        <p>
          {ru
            ? "Для расчёта укажите компанию, город, желаемую дату, количество и возраст детей. Если что-то ещё неизвестно, так и напишите."
            : "For a quote, include your company, city, preferred date, number of children and their ages. You can leave undecided details open."}
        </p>
      )}
      <Button href={route.href}>{label} ↗</Button>
      <p className="material-summary">
        {ru
          ? "Откроется Telegram. Напишите и отправьте сообщение в чате."
          : "Telegram will open. Write and send your message in the chat."}
      </p>
      {!route.personal && (
        <p className="material-summary">
          {ru
            ? "Общий контакт организаторов RADAR KIDS."
            : "General contact for the RADAR KIDS organisers."}
        </p>
      )}
    </div>
  );
}
