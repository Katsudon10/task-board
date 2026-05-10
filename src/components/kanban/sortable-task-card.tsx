"use client";

import { useSortable } from "@dnd-kit/react/sortable";
import { clsx } from "clsx";
import { Calendar, GripVertical } from "lucide-react";
import Link from "next/link";

import type { BoardTask, ColumnId } from "@/lib/kanban/types";

type SortableTaskCardProps = {
  task: BoardTask;
  index: number;
  group: ColumnId;
};

export function SortableTaskCard({
  task,
  index,
  group,
}: SortableTaskCardProps) {
  const { ref, handleRef, isDragging, isDropTarget } = useSortable({
    id: task.id,
    index,
    group,
  });

  return (
    <div
      ref={ref}
      className={clsx(
        "rounded-[10px] border border-slate-100/80 bg-white p-3.5 shadow-[0_1px_4px_rgba(15,23,42,0.1)]",
        isDragging && "z-20 opacity-90 ring-2 ring-indigo-400/40",
        isDropTarget && "ring-1 ring-indigo-300/50",
      )}
    >
      <div className="flex gap-2">
        <button
          type="button"
          ref={handleRef}
          className="mt-0.5 flex shrink-0 touch-none text-slate-400 hover:text-slate-600"
          aria-label="タスクをドラッグ"
        >
          <GripVertical className="size-4" strokeWidth={2} />
        </button>
        <div className="min-w-0 flex-1 space-y-2.5">
          <Link
            href={`/board/task/${task.id}`}
            className="block text-sm font-semibold leading-snug text-slate-900 transition hover:text-indigo-600"
          >
            {task.title}
          </Link>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
            <Calendar className="size-3 shrink-0 text-slate-400" aria-hidden />
            <span>{task.dueLabel}</span>
          </div>
          {task.tags.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {task.tags.map((t) => (
                <span
                  key={`${task.id}-${t.label}`}
                  className={clsx(
                    "rounded px-2 py-0.5 text-[10px] font-medium",
                    t.className,
                  )}
                >
                  {t.label}
                </span>
              ))}
            </div>
          ) : null}
          <div className="flex justify-end pt-0.5">
            <span
              className={clsx(
                "size-[26px] shrink-0 rounded-full",
                task.assigneeClass,
              )}
              title="担当者"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
