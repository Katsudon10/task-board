import { Inbox } from "lucide-react";
import type { Metadata } from "next";

import { DesignButton, EmptyOrErrorCard } from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "空状態 | タスク管理アプリ",
  description: "空状態の UI パターン",
};

export default function EmptyStatePage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-lg font-semibold text-slate-900">
        空状態（UIパターン）
      </h1>
      <div className="flex min-h-[600px] items-center justify-center">
        <EmptyOrErrorCard
          icon={<Inbox className="size-10" aria-hidden />}
          title="ボードにタスクがありません"
          description="最初のタスクを作成して、チームと共有しましょう。"
          action={
            <DesignButton
              href="/board/task/create"
              className="px-3.5 py-2 text-[13px]"
            >
              タスクを作成
            </DesignButton>
          }
        />
      </div>
    </main>
  );
}
