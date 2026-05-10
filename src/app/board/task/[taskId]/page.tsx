import { ChevronDown, X } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { initialBoard } from "@/lib/kanban/initial-board";

type TaskDetailPageProps = {
  params: Promise<{
    taskId: string;
  }>;
};

export const metadata: Metadata = {
  title: "タスク詳細 | タスク管理アプリ",
  description: "タスクの説明、プロパティ、コメント、アクティビティ",
};

const comments = [
  {
    name: "佐藤",
    body: "認可コードフローのリダイレクト URI だけ先に確認したいです。",
    time: "今日 10:40",
    avatar: "bg-indigo-400",
  },
  {
    name: "田中",
    body: "更新トークンの失効タイミングも仕様に入れます。",
    time: "昨日 17:24",
    avatar: "bg-emerald-400",
  },
];

const activities = [
  ["佐藤がカードを TODO から 進行中 に移動しました", "今日 10:42"],
  ["期限を 2026/4/15 に変更しました（山田）", "昨日 18:05"],
  ["タスクを作成しました（佐藤）", "4/6 09:12"],
];

export default async function TaskDetailPage({ params }: TaskDetailPageProps) {
  const { taskId } = await params;
  const task = initialBoard.tasks[taskId] ?? initialBoard.tasks.t1;

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900/50 px-4 py-10">
      <section className="w-full max-w-[700px] overflow-hidden rounded-[14px] bg-white shadow-[0_12px_40px_rgba(15,23,42,0.15)]">
        <header className="flex items-center justify-between bg-neutral-50 px-6 py-5 shadow-[0_1px_0_rgba(226,232,240,1)]">
          <h1 className="min-w-0 flex-1 truncate text-lg font-semibold text-slate-900">
            {task.title}
          </h1>
          <Link
            href="/board"
            className="rounded-lg p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
            aria-label="閉じる"
          >
            <X className="size-5" aria-hidden />
          </Link>
        </header>
        <div className="flex flex-col gap-5 p-6">
          <section className="space-y-2">
            <h2 className="text-[11px] font-semibold tracking-wide text-slate-500">
              説明（Markdown）
            </h2>
            <div className="space-y-2 rounded-lg border border-slate-200 bg-slate-50 p-3.5 text-sm leading-relaxed text-slate-700">
              <p>## 目的</p>
              <p>OAuth連携のエンドポイント仕様を確定する。</p>
              <ul className="list-inside list-disc">
                <li>認可コードフロー</li>
                <li>トークン更新</li>
              </ul>
              <p className="text-xs font-medium text-indigo-600">
                `PATCH /v1/sessions` を追加予定
              </p>
            </div>
          </section>
          <section className="space-y-2.5">
            <h2 className="text-[11px] font-semibold tracking-wide text-slate-500">
              プロパティ
            </h2>
            {[
              ["ステータス", "TODO"],
              ["優先度", "高"],
              ["期限", task.dueLabel.replace("期限 ", "2026/")],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center gap-3">
                <span className="w-24 shrink-0 text-[13px] text-slate-600">
                  {label}
                </span>
                <button
                  type="button"
                  className="flex flex-1 items-center justify-between rounded-md border border-slate-200 px-3 py-2 text-[13px] text-slate-900"
                >
                  {value}
                  <ChevronDown className="size-4 text-slate-500" aria-hidden />
                </button>
              </div>
            ))}
          </section>
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-[11px] font-semibold tracking-wide text-slate-500">
                コメント
              </h2>
              <span className="text-xs text-slate-400">2件</span>
            </div>
            {comments.map((comment) => (
              <article
                key={comment.name}
                className="rounded-lg border border-slate-200 bg-white p-3"
              >
                <div className="flex gap-2.5">
                  <span
                    className={`size-8 shrink-0 rounded-full ${comment.avatar}`}
                  />
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <p className="font-semibold text-slate-900">
                        {comment.name}
                      </p>
                      <p className="text-slate-400">{comment.time}</p>
                    </div>
                    <p className="text-[13px] leading-relaxed text-slate-600">
                      {comment.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
            <button
              type="button"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-left text-[13px] text-slate-400"
            >
              コメントを追加…
            </button>
          </section>
          <section className="space-y-2">
            <h2 className="text-[11px] font-semibold tracking-wide text-slate-500">
              アクティビティ
            </h2>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
              {activities.map(([body, time]) => (
                <div
                  key={body}
                  className="border-slate-200 py-3 first:pt-0 last:pb-0 [&:not(:last-child)]:border-b"
                >
                  <p className="text-xs text-slate-700">{body}</p>
                  <p className="mt-1 text-[11px] text-slate-400">{time}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
