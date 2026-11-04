import {
  findInternship,
  pilotInternship,
  isReferralSource,
  corporateSources,
} from "@/content/internships";
import { isSectorKey } from "@/content/competencies";

export function readUniversityQuery(params: URLSearchParams) {
  const program = findInternship(params.get("program")) ?? pilotInternship;
  const from = params.get("from");
  const source = isReferralSource(from) ? from : "";
  const sector = params.get("sector");
  return {
    program: program.slug,
    age: program.ageGroups[0],
    source,
    company: corporateSources.includes(source)
      ? (params.get("company") ?? "").trim().slice(0, 80)
      : "",
    sector: isSectorKey(sector) ? sector : "",
  };
}
