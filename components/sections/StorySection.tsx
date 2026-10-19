import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { BrandArt } from "@/components/ui/BrandArt";

export function StorySection({
  title,
  eyebrow,
  image,
  imageAlt = "",
  caption,
  children,
  reverse = false,
  alt = false,
  id,
}: {
  title: string;
  eyebrow?: string;
  image: string;
  imageAlt?: string;
  caption?: string;
  children: ReactNode;
  reverse?: boolean;
  alt?: boolean;
  id?: string;
}) {
  return (
    <Section
      alt={alt}
      id={id}
      className={`story-section story-${image.split("/").pop()}`}
    >
      <div className={`editorial-split ${reverse ? "reverse" : ""}`}>
        <div>
          {eyebrow && <p className="editorial-label">{eyebrow}</p>}
          <h2 className="section-heading">{title}</h2>
          <div className="space-y-5">{children}</div>
        </div>
        <figure>
          <BrandArt name={image} alt={imageAlt} />
          {caption && (
            <figcaption className="illustration-caption">{caption}</figcaption>
          )}
        </figure>
      </div>
    </Section>
  );
}
