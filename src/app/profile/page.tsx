import { ImagePlus } from "lucide-react";
import type { Metadata } from "next";

import {
  CenteredCard,
  DesignButton,
  FieldBox,
} from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "プロフィール設定 | タスク管理アプリ",
  description: "TaskBoard のプロフィール設定",
};

export default function ProfilePage() {
  return (
    <CenteredCard className="max-w-[480px]">
      <div className="flex flex-col gap-5">
        <div className="space-y-2">
          <h1 className="text-xl font-semibold text-slate-900">
            プロフィールを設定
          </h1>
          <p className="text-[13px] leading-relaxed text-slate-500">
            チームに表示される名前とアイコンです。あとから変更できます。
          </p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <span className="size-[88px] rounded-full border-2 border-indigo-200 bg-indigo-100" />
          <DesignButton variant="ghost" className="px-3 py-2 text-xs">
            <ImagePlus className="size-4" aria-hidden />
            写真を追加
          </DesignButton>
        </div>
        <FieldBox label="表示名" value="山田 太郎" />
        <FieldBox
          label="自己紹介（任意）"
          value="例: フロントエンドを担当しています。"
          muted
          multiline
        />
        <div className="grid gap-3 sm:grid-cols-2">
          <DesignButton href="/" variant="secondary" className="w-full">
            スキップ
          </DesignButton>
          <DesignButton href="/" className="w-full">
            保存してはじめる
          </DesignButton>
        </div>
      </div>
    </CenteredCard>
  );
}
