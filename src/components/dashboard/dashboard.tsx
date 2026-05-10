import { LayoutGrid } from "lucide-react";
import Link from "next/link";

import { SignOutButton } from "@/components/auth/sign-out-button";
import { BoardCard } from "@/components/dashboard/board-card";

type DashboardUser = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

type DashboardProps = {
  user: DashboardUser;
};

const boards = [
  {
    title: "プロダクトロードマップ",
    href: "/board",
    lastUpdatedLabel: "最終更新: 2026年4月10日",
    avatars: [
      { className: "bg-indigo-400" },
      { className: "bg-emerald-400" },
      { className: "bg-amber-400" },
    ],
    overflowCount: 2,
    avatarLayout: "overlap" as const,
  },
  {
    title: "マーケティング施策",
    lastUpdatedLabel: "最終更新: 2026年4月8日",
    avatars: [{ className: "bg-pink-400" }, { className: "bg-blue-400" }],
    avatarLayout: "spread" as const,
  },
  {
    title: "インフラ整備",
    lastUpdatedLabel: "最終更新: 2026年4月5日",
    avatars: [
      { className: "bg-slate-400" },
      { className: "bg-teal-400" },
      { className: "bg-orange-400" },
    ],
    avatarLayout: "spread" as const,
  },
] as const;

function getUserInitial(user: DashboardUser) {
  return (user.name?.trim() || user.email?.trim() || "U")
    .charAt(0)
    .toUpperCase();
}

export function Dashboard({ user }: DashboardProps) {
  const displayName = user.name || user.email || "ユーザー";

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-slate-200/80 bg-white px-6 shadow-[0_1px_4px_rgba(15,23,42,0.07)] sm:px-10">
        <div className="flex items-center gap-3">
          <LayoutGrid
            className="size-6 shrink-0 text-indigo-600"
            strokeWidth={2}
            aria-hidden
          />
          <span className="text-lg font-semibold text-slate-900">
            TaskBoard
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/board/create"
            className="rounded-lg bg-indigo-600 px-4 py-2.5 text-[13px] font-medium text-white transition hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            ボードを作成
          </Link>
          <Link
            href="/profile"
            className="hidden items-center gap-2 rounded-full bg-slate-100 py-1 pl-1 pr-3 transition hover:bg-slate-200 sm:flex"
          >
            <span
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-indigo-300 text-xs font-semibold text-white"
              title="アカウント"
            >
              {getUserInitial(user)}
            </span>
            <span className="max-w-36 truncate text-xs font-medium text-slate-600">
              {displayName}
            </span>
          </Link>
          <SignOutButton />
        </div>
      </header>

      <section className="px-6 pb-10 pt-7 sm:px-10 sm:pb-10 sm:pt-7">
        <div className="mx-auto max-w-[1280px]">
          <div className="flex flex-col gap-2 pb-3">
            <h1 className="text-[26px] font-semibold leading-tight text-slate-900">
              プロジェクト一覧
            </h1>
            <p className="text-sm text-slate-500">参加中の共有ボードです</p>
          </div>

          <div className="flex flex-col flex-wrap gap-5 pt-2 sm:flex-row sm:items-stretch">
            {boards.map((board) => (
              <BoardCard
                key={board.title}
                title={board.title}
                lastUpdatedLabel={board.lastUpdatedLabel}
                avatars={[...board.avatars]}
                avatarLayout={board.avatarLayout}
                href={"href" in board ? board.href : undefined}
                overflowCount={
                  "overflowCount" in board ? board.overflowCount : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
