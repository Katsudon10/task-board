import { Calendar } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export type BoardCardAvatar = {
  className: string;
};

export type BoardCardProps = {
  title: string;
  lastUpdatedLabel: string;
  avatars: BoardCardAvatar[];
  /** 省略表示する残り人数（例: 2 → 「+2」） */
  overflowCount?: number;
  /** ペンデザイン: 1枚目は重ね、2〜3枚目は離す */
  avatarLayout?: "overlap" | "spread";
  /** 未指定なら従来どおり <article> のみ */
  href?: string;
};

export function BoardCard({
  title,
  lastUpdatedLabel,
  avatars,
  overflowCount,
  avatarLayout = "spread",
  href,
}: BoardCardProps) {
  const avatarGroupClassName =
    avatarLayout === "overlap"
      ? "flex items-center -space-x-1.5"
      : "flex items-center gap-2";

  const body: ReactNode = (
    <article className="flex w-full max-w-[380px] flex-col gap-3.5 rounded-xl bg-white p-5 shadow-[0_2px_10px_rgba(15,23,42,0.07)] ring-1 ring-slate-900/5 transition hover:ring-2 hover:ring-indigo-200/60">
      <h2 className="text-base font-semibold leading-snug text-slate-900">
        {title}
      </h2>
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Calendar className="size-3.5 shrink-0 text-slate-400" aria-hidden />
        <span>{lastUpdatedLabel}</span>
      </div>
      <div className="flex items-center">
        <div className={avatarGroupClassName}>
          {avatars.map((avatar, index) => (
            <span
              key={`${avatar.className}-${index}`}
              className={`size-8 shrink-0 rounded-full ring-2 ring-white ${avatar.className}`}
              aria-hidden
            />
          ))}
          {overflowCount != null && overflowCount > 0 ? (
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-[11px] font-semibold text-slate-500 ring-2 ring-white">
              <span className="sr-only">他{overflowCount}名</span>
              <span aria-hidden>+{overflowCount}</span>
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block w-full max-w-[380px] focus-visible:outline-none"
      >
        {body}
      </Link>
    );
  }
  return body;
}
