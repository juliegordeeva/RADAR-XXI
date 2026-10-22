"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { isReferralSource } from "@/content/internships";
export function UniversityArrival({ text }: { text: string }) {
  const params = useSearchParams();
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return ready && isReferralSource(params.get("from")) ? (
    <p className="mt-5">{text}</p>
  ) : null;
}
