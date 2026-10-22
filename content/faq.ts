import type { Localized } from "@/content/types";
import ru from "@/content/dictionaries/ru.json";
import en from "@/content/dictionaries/en.json";

export type FaqItem = { question: Localized; answer: Localized };

export const faqItems: FaqItem[] = ru.redesign.faq.map((item, index) => ({
  question: { ru: item.question, en: en.redesign.faq[index].question },
  answer: { ru: item.answer, en: en.redesign.faq[index].answer },
}));

export const universityFaq: FaqItem[] = ru.university.faq.map(
  (item, index) => ({
    question: { ru: item.question, en: en.university.faq[index].question },
    answer: { ru: item.answer, en: en.university.faq[index].answer },
  }),
);
