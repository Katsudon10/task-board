"use client";

import { useState } from "react";

import { authClient } from "@/lib/auth/client";

type GoogleSignInButtonProps = {
  callbackURL?: string;
  label?: string;
  className?: string;
  iconClassName?: string;
};

export function GoogleSignInButton({
  callbackURL = "/",
  label = "Google でログイン",
  className,
  iconClassName,
}: GoogleSignInButtonProps) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function handleSignIn() {
    setIsPending(true);
    setErrorMessage(null);

    const { error } = await authClient.signIn.social({
      provider: "google",
      callbackURL,
    });

    if (error) {
      setErrorMessage(error.message ?? "Google ログインに失敗しました。");
      setIsPending(false);
    }
  }

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={handleSignIn}
        disabled={isPending}
        className={
          className ??
          "flex w-full items-center justify-center gap-3 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
        }
      >
        <span
          className={
            iconClassName ??
            "flex size-5 items-center justify-center rounded-full bg-white text-xs font-bold text-slate-900"
          }
        >
          G
        </span>
        {isPending ? "Google に接続中..." : label}
      </button>
      {errorMessage ? (
        <p className="text-center text-sm text-red-600">{errorMessage}</p>
      ) : null}
    </div>
  );
}
