import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { KanbanBoard } from "@/components/kanban/kanban-board";
import { auth } from "@/lib/auth/auth";

export const metadata: Metadata = {
  title: "プロダクトロードマップ | タスク管理アプリ",
  description: "カンバンでタスクを管理",
};

export default async function BoardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in?callbackURL=/board");
  }

  return <KanbanBoard user={session.user} />;
}
