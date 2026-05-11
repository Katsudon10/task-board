import { requireSessionForCurrentPath } from "@/lib/auth/require-session";

export default async function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await requireSessionForCurrentPath("/board");

  return children;
}
