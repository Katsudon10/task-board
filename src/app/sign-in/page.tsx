import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import { GoogleSignInButton } from "@/components/auth/google-sign-in-button";
import {
  BrandMark,
  CenteredCard,
  FieldBox,
} from "@/components/ui/design-system";
import { auth } from "@/lib/auth/auth";

export const metadata: Metadata = {
  title: "ログイン | タスク管理アプリ",
  description: "Google アカウントでタスク管理アプリにログイン",
};

type SignInPageProps = {
  searchParams: Promise<{
    callbackURL?: string;
  }>;
};

export default async function SignInPage({ searchParams }: SignInPageProps) {
  const { callbackURL = "/" } = await searchParams;
  const safeCallbackURL =
    callbackURL.startsWith("/") && !callbackURL.startsWith("//")
      ? callbackURL
      : "/";
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect(safeCallbackURL);
  }

  return (
    <CenteredCard className="max-w-[420px]">
      <div className="flex flex-col gap-6">
        <BrandMark size="lg" subtitle="共有ボードでタスクを進めましょう" />
        <h1 className="text-lg font-semibold text-slate-900">ログイン</h1>
        <FieldBox label="メールアドレス" value="you@example.com" muted />
        <FieldBox label="パスワード" value="••••••••" muted />
        <GoogleSignInButton
          callbackURL={safeCallbackURL}
          label="ログイン"
          className="flex w-full items-center justify-center gap-3 rounded-[10px] bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-70"
          iconClassName="flex size-5 items-center justify-center rounded-full bg-white text-xs font-bold text-indigo-700"
        />
        <div className="space-y-3 text-center text-xs">
          <p className="text-indigo-600">パスワードをお忘れですか？</p>
          <p className="text-slate-500">
            アカウントをお持ちでない方は{" "}
            <Link href="/sign-up" className="text-indigo-600">
              新規登録
            </Link>
          </p>
        </div>
      </div>
    </CenteredCard>
  );
}
