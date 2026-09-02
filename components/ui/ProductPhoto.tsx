import Image from "next/image";
import { cn } from "@/lib/cn";

export function ProductPhoto({
  src,
  alt,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1024}
      height={1536}
      priority={priority}
      sizes="(max-width: 768px) 100vw, 480px"
      className={cn("w-full h-auto rounded-[16px] border border-border bg-bg-alt", className)}
    />
  );
}

export function hasProductPhoto(src: string) {
  return /\.(webp|jpe?g|png)$/i.test(src);
}
