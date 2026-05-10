import { WifiOff } from "lucide-react";
import type { Metadata } from "next";

import { DesignButton, EmptyOrErrorCard } from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "エラー状態 | タスク管理アプリ",
  description: "エラー状態の UI パターン",
};

export default function ErrorStatePage() {
  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-lg font-semibold text-slate-900">
        エラー状態（UIパターン）
      </h1>
      <div className="flex min-h-[600px] items-center justify-center">
        <EmptyOrErrorCard
          icon={<WifiOff className="size-10" aria-hidden />}
          eyebrow="ERR_NETWORK"
          title="接続できません"
          description="ネットワークを確認してから再度お試しください。"
          action={
            <DesignButton
              variant="secondary"
              className="px-3.5 py-2 text-[13px]"
            >
              再試行
            </DesignButton>
          }
        />
      </div>
    </main>
  );
}
