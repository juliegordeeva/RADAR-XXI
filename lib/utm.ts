export type TrackingFields = {
  page: string;
  source: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
};

const utmKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export function collectTracking(source: string): TrackingFields {
  const result: TrackingFields = {
    source,
    page: typeof window !== "undefined" ? window.location.pathname : source,
  };

  if (typeof window === "undefined") return result;

  const params = new URLSearchParams(window.location.search);
  for (const key of utmKeys) {
    const value = params.get(key)?.trim();
    if (value) result[key] = value;
  }

  return result;
}
