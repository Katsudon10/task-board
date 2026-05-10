import { ChevronDown } from "lucide-react";
import type { Metadata } from "next";

import {
  DesignButton,
  FieldBox,
  FormCard,
  TopBar,
} from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "ボードを作成 | タスク管理アプリ",
  description: "新しいボードを作成",
};

export default function CreateBoardPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <TopBar title="ボードを作成" backHref="/" />
      <div className="flex min-h-[calc(100vh-56px)] items-start justify-center px-6 py-8 sm:px-12">
        <FormCard className="max-w-[560px]">
          <div className="flex flex-col gap-[18px]">
            <h1 className="text-[15px] font-semibold text-slate-900">
              ボードの情報
            </h1>
            <FieldBox label="ボード名" value="プロダクトロードマップ" />
            <FieldBox
              label="説明（任意）"
              value="このボードで扱うスプリントやテーマを書きます。"
              multiline
            />
            <FieldBox
              label="公開範囲"
              value="招待したメンバーのみ"
              icon={<ChevronDown className="size-[18px]" aria-hidden />}
            />
            <DesignButton href="/board" className="w-full">
              ボードを作成
            </DesignButton>
          </div>
        </FormCard>
      </div>
    </main>
  );
}
