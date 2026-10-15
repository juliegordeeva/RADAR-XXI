import Image from "next/image";
import { assetPath } from "@/lib/asset";

export function CalendarPreview({
  page = "cover",
  alt,
  priority = false,
  className,
  zoom = false,
}: {
  page?: "cover" | "day-01" | "day-02" | "day-09";
  alt: string;
  priority?: boolean;
  className?: string;
  zoom?: boolean;
}) {
  const image = (
    <Image
      src={assetPath(`/images/radar/real-materials/calendar-${page}.webp`)}
      width={1200}
      height={1500}
      alt={alt}
      priority={priority}
      sizes="(max-width: 767px) 100vw, 450px"
      className={className || "w-full h-auto"}
    />
  );
  return zoom ? (
    <a
      href={assetPath(`/images/radar/real-materials/calendar-${page}.webp`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
    >
      {image}
    </a>
  ) : (
    image
  );
}
