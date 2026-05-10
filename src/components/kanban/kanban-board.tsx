"use client";

import { type DragEndEvent, PointerActivationConstraints } from "@dnd-kit/dom";
import { move } from "@dnd-kit/helpers";
import {
  DragDropProvider,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
} from "@dnd-kit/react";
import {
  Bell,
  Calendar,
  ChevronLeft,
  GripVertical,
  Move,
  Search,
  SlidersHorizontal,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";

import { SignOutButton } from "@/components/auth/sign-out-button";
import { initialBoard } from "@/lib/kanban/initial-board";
import type { BoardState, BoardTask, ColumnId } from "@/lib/kanban/types";

import { KanbanColumn } from "./kanban-column";

type KanbanBoardUser = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

type KanbanBoardProps = {
  user: KanbanBoardUser;
};

function getUserInitial(user: KanbanBoardUser) {
  return (user.name?.trim() || user.email?.trim() || "U")
    .charAt(0)
    .toUpperCase();
}

function boardFromItems(
  b: BoardState,
  items: Record<ColumnId, string[]>,
): BoardState {
  return {
    ...b,
    columns: b.columns.map((c) => ({
      ...c,
      taskIds: items[c.id] ?? c.taskIds,
    })),
  };
}

function itemsFromBoard(b: BoardState): Record<ColumnId, string[]> {
  return Object.fromEntries(
    b.columns.map((c) => [c.id, [...c.taskIds]]),
  ) as Record<ColumnId, string[]>;
}

export function KanbanBoard({ user }: KanbanBoardProps) {
  const [board, setBoard] = useState<BoardState>(initialBoard);
  const displayName = user.name || user.email || "ユーザー";

  const onDragEnd = useCallback((event: DragEndEvent) => {
    if (event.canceled) {
      return;
    }
    setBoard((b) => {
      const items = itemsFromBoard(b);
      const next = move(items, event);
      if (next === items) {
        return b;
      }
      return boardFromItems(b, next);
    });
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <header className="sticky top-0 z-20 flex h-16 shrink-0 items-center justify-between border-b border-slate-200/80 bg-white px-6 shadow-[0_1px_4px_rgba(15,23,42,0.08)] sm:px-8">
        <div className="flex min-w-0 items-center gap-4">
          <Link
            href="/"
            className="flex shrink-0 items-center text-slate-500 transition hover:text-slate-800"
            aria-label="プロジェクト一覧へ戻る"
          >
            <ChevronLeft className="size-5" strokeWidth={2} />
          </Link>
          <h1 className="min-w-0 truncate text-[17px] font-semibold text-slate-900">
            {board.title}
          </h1>
          <Link
            href="/board/invite"
            className="hidden shrink-0 rounded-md bg-indigo-50 px-2.5 py-1 text-[11px] font-medium text-indigo-600 transition hover:bg-indigo-100 sm:inline"
          >
            共有
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-lg p-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
            aria-label="検索"
          >
            <Search className="size-5" strokeWidth={2} />
          </button>
          <Link
            href="/notifications"
            className="rounded-lg p-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
            aria-label="通知"
          >
            <Bell className="size-5" strokeWidth={2} />
          </Link>
          <Link
            href="/board/invite"
            className="hidden rounded-lg p-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 sm:inline-flex"
            aria-label="メンバーを招待"
          >
            <UserPlus className="size-5" strokeWidth={2} />
          </Link>
          <Link
            href="/board/settings"
            className="rounded-lg p-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
            aria-label="表示設定"
          >
            <SlidersHorizontal className="size-5" strokeWidth={2} />
          </Link>
          <Link
            href="/board/task/create"
            className="rounded-lg bg-indigo-600 px-3.5 py-2 text-xs font-medium text-white transition hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            タスクを追加
          </Link>
          <Link
            href="/profile"
            className="hidden items-center gap-2 rounded-full bg-slate-100 py-1 pl-1 pr-3 transition hover:bg-slate-200 md:flex"
          >
            <span
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-indigo-300 text-xs font-semibold text-white"
              title="アカウント"
            >
              {getUserInitial(user)}
            </span>
            <span className="max-w-32 truncate text-xs font-medium text-slate-600">
              {displayName}
            </span>
          </Link>
          <SignOutButton label="退出" />
        </div>
      </header>

      <DragDropProvider
        onDragEnd={onDragEnd}
        sensors={[
          PointerSensor.configure({
            activationConstraints: () => [
              new PointerActivationConstraints.Distance({ value: 6 }),
            ],
          }),
          KeyboardSensor,
        ]}
      >
        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <div className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col gap-0 px-4 py-4 sm:px-6 sm:py-6">
            <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-x-auto pb-1 lg:flex-row">
              {board.columns.map((c) => (
                <KanbanColumn key={c.id} column={c} board={board} />
              ))}
            </div>
          </div>
          <div className="flex shrink-0 items-center justify-center gap-2 px-6 py-2 pb-4 text-center text-xs text-slate-400 sm:px-8">
            <Move className="size-3.5 shrink-0" aria-hidden />
            <p>
              グリップ（左端）またはカードをドラッグして、列をまたいで移動できます
            </p>
          </div>
        </div>

        <DragOverlay dropAnimation={null}>
          {(source) => {
            const task: BoardTask | undefined = board.tasks[String(source.id)];
            if (!task) {
              return null;
            }
            return (
              <div className="w-[min(100vw-2rem,300px)] rounded-[10px] border border-slate-200 bg-white p-3.5 shadow-lg ring-2 ring-indigo-400/20">
                <div className="flex gap-2">
                  <div className="mt-0.5 text-slate-400">
                    <GripVertical className="size-4" />
                  </div>
                  <div className="min-w-0 flex-1 space-y-2.5">
                    <p className="text-sm font-semibold text-slate-900">
                      {task.title}
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                      <Calendar className="size-3 text-slate-400" aria-hidden />
                      <span>{task.dueLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </DragOverlay>
      </DragDropProvider>
    </div>
  );
}
