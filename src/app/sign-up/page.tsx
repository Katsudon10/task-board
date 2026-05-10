import type { Metadata } from "next";
import Link from "next/link";

import { GoogleSignInButton } from "@/components/auth/google-sign-in-button";
import {
  BrandMark,
  CenteredCard,
  FieldBox,
} from "@/components/ui/design-system";

export const metadata: Metadata = {
  title: "新規登録 | タスク管理アプリ",
  description: "TaskBoard の新規登録",
};

export default function SignUpPage() {
  return (
    <CenteredCard className="max-w-[440px]">
      <div className="flex flex-col gap-5">
        <BrandMark size="md" />
        <div className="space-y-2 text-center">
          <h1 className="text-lg font-semibold text-slate-900">新規登録</h1>
          <p className="text-[13px] text-slate-500">
            チームで使うアカウントを作成します
          </p>
        </div>
        <FieldBox label="表示名" value="山田 太郎" muted />
        <FieldBox label="メールアドレス" value="you@example.com" muted />
        <FieldBox label="パスワード" value="8文字以上" muted />
        <FieldBox label="パスワード（確認）" value="再入力" muted />
        <div className="flex items-center gap-2.5 text-xs text-slate-600">
          <span className="size-[18px] rounded border border-slate-300" />
          <span className="min-w-0 flex-1">
            利用規約 と プライバシーポリシー に同意します
          </span>
        </div>
        <GoogleSignInButton
          label="登録する"
          className="flex w-full items-center justify-center gap-3 rounded-[10px] bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
          iconClassName="flex size-5 items-center justify-center rounded-full bg-white text-xs font-bold text-indigo-700"
        />
        <p className="text-center text-xs text-slate-500">
          すでにアカウントをお持ちですか？{" "}
          <Link href="/sign-in" className="text-indigo-600">
            ログイン
          </Link>
        </p>
      </div>
    </CenteredCard>
  );
}
