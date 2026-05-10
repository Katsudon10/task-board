import { ChevronLeft, LayoutGrid } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  subtitle?: string;
};

const iconSizeClass = {
  sm: "size-6",
  md: "size-9",
  lg: "size-10",
};

const titleSizeClass = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-[22px]",
};

export function BrandMark({ size = "sm", subtitle }: BrandMarkProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <LayoutGrid
        className={`${iconSizeClass[size]} text-indigo-600`}
        strokeWidth={2}
        aria-hidden
      />
      <p className={`${titleSizeClass[size]} font-semibold text-slate-900`}>
        TaskBoard
      </p>
      {subtitle ? (
        <p className="text-[13px] text-slate-500">{subtitle}</p>
      ) : null}
    </div>
  );
}

type TopBarProps = {
  title: string;
  backHref?: string;
  right?: ReactNode;
};

export function TopBar({ title, backHref = "/", right }: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between bg-white px-6 shadow-[0_1px_4px_rgba(15,23,42,0.05)] sm:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <Link
          href={backHref}
          className="rounded-lg p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
          aria-label="戻る"
        >
          <ChevronLeft className="size-[22px]" strokeWidth={2} />
        </Link>
        <h1 className="min-w-0 truncate text-[17px] font-semibold text-slate-900">
          {title}
        </h1>
      </div>
      {right ? <div className="shrink-0">{right}</div> : null}
    </header>
  );
}

type CenteredCardProps = {
  children: ReactNode;
  className?: string;
};

export function CenteredCard({ children, className = "" }: CenteredCardProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6 py-10">
      <section
        className={`w-full rounded-2xl bg-white p-9 shadow-[0_8px_32px_rgba(15,23,42,0.10)] ${className}`}
      >
        {children}
      </section>
    </main>
  );
}

type FormCardProps = {
  children: ReactNode;
  className?: string;
};

export function FormCard({ children, className = "" }: FormCardProps) {
  return (
    <section
      className={`w-full rounded-[14px] bg-white p-7 shadow-[0_2px_16px_rgba(15,23,42,0.04)] ${className}`}
    >
      {children}
    </section>
  );
}

type FieldBoxProps = {
  label: string;
  value: ReactNode;
  icon?: ReactNode;
  muted?: boolean;
  multiline?: boolean;
};

export function FieldBox({
  label,
  value,
  icon,
  muted = false,
  multiline = false,
}: FieldBoxProps) {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <span className="text-xs font-medium text-slate-600">{label}</span>
      <span
        className={`flex w-full items-center justify-between gap-3 rounded-lg border border-slate-200 px-3 text-sm ${
          multiline
            ? "min-h-[88px] items-start bg-slate-50 py-3 leading-relaxed"
            : "py-2.5"
        } ${muted ? "text-slate-400" : "text-slate-900"}`}
      >
        <span>{value}</span>
        {icon ? <span className="shrink-0 text-slate-500">{icon}</span> : null}
      </span>
    </div>
  );
}

type PrimaryButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  className?: string;
};

const buttonVariantClass = {
  primary: "bg-indigo-600 text-white hover:bg-indigo-700",
  secondary: "bg-slate-100 text-slate-600 hover:bg-slate-200",
  danger: "border border-red-200 bg-white text-red-700 hover:bg-red-50",
  ghost: "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50",
};

export function DesignButton({
  children,
  href,
  variant = "primary",
  className = "",
}: PrimaryButtonProps) {
  const buttonClassName = `inline-flex items-center justify-center gap-2 rounded-[10px] px-4 py-3 text-sm font-semibold transition ${buttonVariantClass[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={buttonClassName}>
      {children}
    </button>
  );
}

type EmptyOrErrorCardProps = {
  icon: ReactNode;
  eyebrow?: string;
  title: string;
  description: string;
  action: ReactNode;
};

export function EmptyOrErrorCard({
  icon,
  eyebrow,
  title,
  description,
  action,
}: EmptyOrErrorCardProps) {
  return (
    <div className="flex h-[300px] w-full max-w-[380px] flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-6 text-center">
      <div className="text-slate-400">{icon}</div>
      {eyebrow ? (
        <p className="text-xs font-semibold text-slate-400">{eyebrow}</p>
      ) : null}
      <h2 className="text-[15px] font-semibold text-slate-900">{title}</h2>
      <p className="text-[13px] leading-relaxed text-slate-500">
        {description}
      </p>
      {action}
    </div>
  );
}
