import {
  findInternship,
  isChildAge,
  isReferralSource,
  corporateSources,
} from "@/content/internships";
import { isSectorKey } from "@/content/competencies";

export function readUniversityQuery(params: URLSearchParams) {
  const program = findInternship(params.get("program"));
  const requestedAge = params.get("age");
  const age =
    isChildAge(requestedAge) &&
    (!program || program.ageGroups.includes(requestedAge))
      ? requestedAge
      : program?.ageGroups[0];
  const from = params.get("from");
  const source = isReferralSource(from) ? from : "";
  const sector = params.get("sector");
  return {
    program: program?.slug ?? "",
    age: age ?? "",
    source,
    company: corporateSources.includes(source)
      ? (params.get("company") ?? "").trim().slice(0, 80)
      : "",
    sector: isSectorKey(sector) ? sector : "",
  };
}
