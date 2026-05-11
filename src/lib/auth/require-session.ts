import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth/auth";

const CURRENT_PATH_HEADER = "x-current-path";

function getSignInPath(callbackURL: string) {
  const signInUrl = new URL("/sign-in", "http://localhost");
  signInUrl.searchParams.set("callbackURL", callbackURL);

  return `${signInUrl.pathname}${signInUrl.search}`;
}

export async function requireSession(callbackURL: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect(getSignInPath(callbackURL));
  }

  return session;
}

export async function requireSessionForCurrentPath(fallbackURL: string) {
  const requestHeaders = await headers();
  const session = await auth.api.getSession({
    headers: requestHeaders,
  });

  if (!session) {
    redirect(
      getSignInPath(requestHeaders.get(CURRENT_PATH_HEADER) ?? fallbackURL),
    );
  }

  return session;
}
