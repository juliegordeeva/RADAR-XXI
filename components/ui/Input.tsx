import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
  error?: string;
};

export function Input({ label, hint, error, id, className, ...props }: InputProps) {
  const fieldId = id ?? props.name;
  const hintId = hint || error ? `${fieldId}-hint` : undefined;

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={fieldId} className="text-[15px] font-medium text-text">
        {label}
      </label>
      <input
        id={fieldId}
        aria-invalid={Boolean(error)}
        aria-describedby={hintId}
        className={cn(
          "min-h-12 w-full rounded-[12px] border border-border bg-surface px-4 text-[17px] text-text",
          "placeholder:text-text-muted",
          error && "border-accent",
          className,
        )}
        {...props}
      />
      {(error || hint) && (
        <p id={hintId} className={cn("text-[15px]", error ? "text-accent" : "text-text-muted")}>
          {error ?? hint}
        </p>
      )}
    </div>
  );
}

export function Checkbox({
  label,
  error,
  children,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode;
  error?: string;
  children?: ReactNode;
}) {
  const fieldId = props.id ?? props.name;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={fieldId} className="flex items-start gap-3 text-[15px] text-text">
        <input
          id={fieldId}
          type="checkbox"
          className="mt-1 size-5 shrink-0 accent-deep"
          {...props}
        />
        <span>
          {label}
          {children}
        </span>
      </label>
      {error && <p className="text-[15px] text-accent">{error}</p>}
    </div>
  );
}

export function Textarea({
  label,
  error,
  id,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; error?: string }) {
  const fieldId = id ?? props.name;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={fieldId} className="text-[15px] font-medium text-text">
        {label}
      </label>
      <textarea
        id={fieldId}
        className="min-h-28 w-full rounded-[12px] border border-border bg-surface px-4 py-3 text-[17px]"
        {...props}
      />
      {error && <p className="text-[15px] text-accent">{error}</p>}
    </div>
  );
}
