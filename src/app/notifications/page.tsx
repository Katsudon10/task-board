import type { Metadata } from "next";

import { TopBar } from "@/components/ui/design-system";
import { requireSession } from "@/lib/auth/require-session";

export const metadata: Metadata = {
  title: "通知 | タスク管理アプリ",
  description: "TaskBoard の通知一覧",
};

const notifications = [
  {
    title: "あなたをメンション",
    body: "佐藤さんがコメントで @あなた をメンションしました",
    time: "10分前",
    unread: true,
  },
  {
    title: "期限が近いタスク",
    body: "「API設計レビュー」は明日が期限です",
    time: "昨日",
    unread: false,
  },
  {
    title: "カードが移動",
    body: "田中さんがカードを 進行中 に移動しました",
    time: "4/10",
    unread: false,
  },
];

export default async function NotificationsPage() {
  await requireSession("/notifications");

  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <TopBar
        title="通知"
        backHref="/board"
        right={
          <button
            type="button"
            className="text-[13px] font-medium text-indigo-600"
          >
            すべて既読にする
          </button>
        }
      />
      <div className="flex min-h-[calc(100vh-56px)] items-start justify-center px-6 py-5 sm:px-12">
        <section className="w-full max-w-[720px] overflow-hidden rounded-xl border border-slate-200 bg-white">
          {notifications.map((notification) => (
            <article
              key={notification.title}
              className="flex gap-3 border-b border-slate-100 px-4 py-[18px] last:border-b-0"
            >
              <div className="min-w-0 flex-1 space-y-1">
                <h2 className="text-[13px] font-semibold text-slate-900">
                  {notification.title}
                </h2>
                <p className="text-[13px] leading-relaxed text-slate-500">
                  {notification.body}
                </p>
                <p className="text-[11px] text-slate-400">
                  {notification.time}
                </p>
              </div>
              <span
                className={`mt-1 size-2 rounded-full ${
                  notification.unread ? "bg-indigo-600" : "bg-slate-200"
                }`}
                aria-hidden
              />
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
