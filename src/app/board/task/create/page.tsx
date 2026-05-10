import { Calendar, ChevronDown, Plus, X } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import {
  DesignButton,
  FieldBox,
  FormCard,
} from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "タスクを作成 | タスク管理アプリ",
  description: "新しいタスクを作成",
};

export default function CreateTaskPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between bg-white px-6 shadow-[0_1px_4px_rgba(15,23,42,0.05)] sm:px-8">
        <div className="flex items-center gap-3">
          <Link
            href="/board"
            className="rounded-lg p-1 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
            aria-label="閉じる"
          >
            <X className="size-[22px]" aria-hidden />
          </Link>
          <h1 className="text-[17px] font-semibold text-slate-900">
            タスクを作成
          </h1>
        </div>
        <button
          type="button"
          className="text-[13px] font-medium text-indigo-600"
        >
          下書き保存
        </button>
      </header>
      <div className="flex min-h-[calc(100vh-56px)] items-start justify-center px-6 py-7 sm:px-12">
        <FormCard className="max-w-[640px]">
          <div className="flex flex-col gap-4">
            <FieldBox label="タイトル" value="API設計レビュー" />
            <FieldBox
              label="説明"
              value="背景と完了条件を書きます。Markdown に対応想定。"
              multiline
            />
            <div className="grid gap-3.5 sm:grid-cols-2">
              <FieldBox
                label="ステータス"
                value="TODO"
                icon={<ChevronDown className="size-4" aria-hidden />}
              />
              <FieldBox
                label="優先度"
                value="高"
                icon={<ChevronDown className="size-4" aria-hidden />}
              />
            </div>
            <FieldBox
              label="期限"
              value="2026年4月20日"
              icon={<Calendar className="size-4" aria-hidden />}
            />
            <div className="space-y-2">
              <p className="text-xs font-medium text-slate-600">担当者</p>
              <div className="flex items-center gap-2.5">
                <span className="size-8 rounded-full bg-indigo-400" />
                <span className="size-8 rounded-full bg-emerald-400" />
                <span className="size-8 rounded-full bg-amber-400" />
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs text-slate-600"
                >
                  <Plus className="size-4" aria-hidden />
                  追加
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-slate-600">タグ</p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md bg-sky-100 px-2.5 py-1 text-xs font-medium text-blue-700">
                  backend
                </span>
                <span className="rounded-md bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800">
                  design
                </span>
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-1">
              <DesignButton href="/board" variant="ghost">
                キャンセル
              </DesignButton>
              <DesignButton href="/board">タスクを作成</DesignButton>
            </div>
          </div>
        </FormCard>
      </div>
    </main>
  );
}
