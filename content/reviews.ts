import type { Localized } from "@/content/types";

export type Review = {
  name: Localized;
  child: Localized;
  detail: Localized;
  photo: string | null;
};

export const reviews: Review[] = [];
