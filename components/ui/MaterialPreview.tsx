import Image from "next/image";
import manifest from "@/content/preview-manifest.json";
import { assetPath } from "@/lib/asset";
export function MaterialPreview({
  file,
  alt,
  priority = false,
  zoom = false,
}: {
  file: string;
  alt: string;
  priority?: boolean;
  zoom?: boolean;
}) {
  const size = manifest[file as keyof typeof manifest];
  if (!size) return null;
  const src = assetPath(`/images/radar/material-previews/${file}`);
  const image = (
    <Image
      src={src}
      {...size}
      alt={alt}
      priority={priority}
      sizes="(max-width:767px) 90vw, 500px"
      className="material-preview-image"
    />
  );
  return zoom ? (
    <a href={src} target="_blank" rel="noopener noreferrer" aria-label={alt}>
      {image}
    </a>
  ) : (
    image
  );
}
