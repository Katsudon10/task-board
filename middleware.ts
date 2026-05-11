import { getSessionCookie } from "better-auth/cookies";
import { type NextRequest, NextResponse } from "next/server";

const CURRENT_PATH_HEADER = "x-current-path";

export function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  // This is only an early redirect hint. Real session validation happens in
  // protected server layouts/pages via auth.api.getSession.
  if (sessionCookie) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(
      CURRENT_PATH_HEADER,
      `${request.nextUrl.pathname}${request.nextUrl.search}`,
    );

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  const signInUrl = new URL("/sign-in", request.url);
  signInUrl.searchParams.set(
    "callbackURL",
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
  );

  return NextResponse.redirect(signInUrl);
}

// middlewareを適用を除外するパスを設定
export const config = {
  matcher: [
    "/((?!api/auth|_next/static|_next/image|favicon.ico|sign-in|sign-up|.*\\..*).*)",
  ],
};
