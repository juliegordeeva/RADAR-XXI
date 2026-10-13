import Image from "next/image";
import { assetPath } from "@/lib/asset";

export function BrandLogo() {
  return (
    <Image
      src={assetPath("/images/radar/brand/radar-kids-logo.svg")}
      alt="RADAR KIDS"
      width={3240}
      height={1520}
      className="brand-logo"
      priority
    />
  );
}
