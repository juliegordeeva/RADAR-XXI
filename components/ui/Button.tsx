import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-accent text-bg hover:bg-accent-hover border-transparent w-full md:w-auto",
  secondary:
    "bg-transparent text-text border-text hover:bg-text hover:text-bg w-full md:w-auto",
};

type Base = {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
};

type ButtonAsButton = Base &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = Base & {
  href: string;
  type?: never;
  disabled?: boolean;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, className, variant = "primary" } = props;
  const classes = cn(
    "inline-flex items-center justify-center min-h-12 h-[54px] px-7 md:px-9 rounded-[12px] text-[17px] font-medium border transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    className,
  );

  if ("href" in props && props.href) {
    const { href } = props;
    const external = href.startsWith("http");
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
