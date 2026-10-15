import Image from "next/image";
import manifest from "@/docs/RADAR_ASSETS_MANIFEST.json";
import { assetPath } from "@/lib/asset";
import { cn } from "@/lib/cn";

const assets = new Map(
  manifest.generated_assets.map((item) => [item.webp, item]),
);

export function BrandArt({
  name,
  alt = "",
  priority = false,
  className,
}: {
  name: string;
  alt?: string;
  priority?: boolean;
  className?: string;
}) {
  const path = `/images/radar/${name}.webp`;
  const asset = assets.get(path);
  if (!asset) throw new Error(`Нет изображения в manifest: ${path}`);
  return (
    <Image
      src={assetPath(path)}
      alt={alt}
      aria-hidden={alt ? undefined : true}
      width={asset.width}
      height={asset.height}
      priority={priority}
      sizes="(max-width: 767px) 100vw, (max-width: 1200px) 55vw, 700px"
      className={cn("brand-art", className)}
    />
  );
}
