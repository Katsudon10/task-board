import { Archive, ChevronDown, Trash2 } from "lucide-react";
import type { Metadata } from "next";

import {
  DesignButton,
  FieldBox,
  FormCard,
  TopBar,
} from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "ボード設定 | タスク管理アプリ",
  description: "ボードの設定を変更",
};

export default function BoardSettingsPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <TopBar title="ボード設定" backHref="/board" />
      <div className="flex min-h-[calc(100vh-56px)] items-start justify-center px-6 py-7 sm:px-12">
        <FormCard className="max-w-[600px]">
          <div className="flex flex-col gap-[18px]">
            <h1 className="text-[15px] font-semibold text-slate-900">
              基本情報
            </h1>
            <FieldBox label="ボード名" value="プロダクトロードマップ" />
            <FieldBox
              label="説明"
              value="スプリント単位で進捗を追います。"
              multiline
            />
            <FieldBox
              label="公開範囲"
              value="招待したメンバーのみ"
              icon={<ChevronDown className="size-[18px]" aria-hidden />}
            />
            <DesignButton href="/board" className="w-full">
              変更を保存
            </DesignButton>
            <section className="space-y-2.5 border-t border-slate-200 pt-4">
              <h2 className="text-[13px] font-semibold text-red-700">
                危険な操作
              </h2>
              <DesignButton variant="danger" className="w-full justify-between">
                ボードをアーカイブ
                <Archive className="size-[18px]" aria-hidden />
              </DesignButton>
              <DesignButton variant="danger" className="w-full justify-between">
                ボードを削除
                <Trash2 className="size-[18px]" aria-hidden />
              </DesignButton>
            </section>
          </div>
        </FormCard>
      </div>
    </main>
  );
}
