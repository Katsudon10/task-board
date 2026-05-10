import { ChevronDown, Copy } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import {
  DesignButton,
  FieldBox,
  FormCard,
  TopBar,
} from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "メンバーを招待 | タスク管理アプリ",
  description: "ボードへメンバーを招待",
};

export default function InviteMembersPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <TopBar
        title="メンバーを招待"
        backHref="/board"
        right={
          <Link
            href="/board"
            className="text-[13px] font-medium text-indigo-600"
          >
            完了
          </Link>
        }
      />
      <div className="flex min-h-[calc(100vh-56px)] items-start justify-center px-6 py-7 sm:px-12">
        <FormCard className="max-w-[600px]">
          <div className="flex flex-col gap-4">
            <h1 className="text-[15px] font-semibold text-slate-900">
              メールで招待
            </h1>
            <div className="grid items-end gap-2.5 sm:grid-cols-[1fr_180px]">
              <FieldBox
                label="メールアドレス"
                value="member@example.com"
                muted
              />
              <FieldBox
                label="権限"
                value="編集者"
                icon={<ChevronDown className="size-4" aria-hidden />}
              />
            </div>
            <DesignButton className="w-full">招待メールを送る</DesignButton>
            <section className="space-y-2.5 border-t border-slate-200 pt-4">
              <h2 className="text-[13px] font-semibold text-slate-600">
                招待中
              </h2>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="size-8 rounded-full bg-indigo-200" />
                  <div className="text-sm">
                    <p className="font-medium text-slate-900">
                      invite@example.com
                    </p>
                    <p className="text-xs text-slate-400">編集者として招待中</p>
                  </div>
                </div>
                <button type="button" className="text-xs text-indigo-600">
                  取り消し
                </button>
              </div>
            </section>
            <section className="space-y-2 pt-3">
              <h2 className="text-xs font-medium text-slate-600">
                またはリンクを共有
              </h2>
              <div className="flex items-center justify-between gap-3 rounded-lg bg-slate-100 px-3 py-2.5 text-xs text-slate-600">
                <span className="min-w-0 truncate">
                  https://taskboard.app/b/abc123
                </span>
                <Copy className="size-4 shrink-0" aria-hidden />
              </div>
            </section>
          </div>
        </FormCard>
      </div>
    </main>
  );
}
