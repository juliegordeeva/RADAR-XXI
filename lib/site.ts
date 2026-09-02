export const site = {
  name: "RADAR XXI Kids",
  phones: {
    ru: "+7 916 637 49 86",
    eu: "+33 66 24 334 24",
  },
  email: null as string | null,
  telegram: "https://t.me/m/HORDWsDDY2Rk",
} as const;

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
    /\/$/,
    "",
  );
}
