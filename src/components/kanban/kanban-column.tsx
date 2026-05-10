"use client";

import { useDroppable } from "@dnd-kit/react";
import { clsx } from "clsx";

import type { BoardColumn, BoardState } from "@/lib/kanban/types";

import { SortableTaskCard } from "./sortable-task-card";

type KanbanColumnProps = {
  column: BoardColumn;
  board: BoardState;
};

export function KanbanColumn({ column, board }: KanbanColumnProps) {
  const { ref, isDropTarget } = useDroppable({ id: column.id });

  return (
    <div
      className={clsx(
        "flex min-h-0 min-w-[min(100%,280px)] flex-1 flex-col gap-3 rounded-xl p-3",
        column.headerClass,
        isDropTarget && "ring-2 ring-indigo-400/30 ring-inset",
      )}
    >
      <div className="flex items-center justify-between px-1">
        <span
          className={clsx(
            "text-xs font-bold uppercase tracking-wide",
            column.labelClass,
          )}
        >
          {column.title}
        </span>
        <span
          className={clsx(
            "min-w-6 rounded-full px-2 py-0.5 text-center text-[11px] font-semibold",
            column.countChipClass,
          )}
        >
          {column.taskIds.length}
        </span>
      </div>

      <div
        ref={ref}
        className="flex min-h-[120px] flex-1 flex-col gap-3 overflow-y-auto"
      >
        {column.taskIds.map((id, index) => {
          const task = board.tasks[id];
          if (!task) {
            return null;
          }
          return (
            <SortableTaskCard
              key={id}
              task={task}
              index={index}
              group={column.id}
            />
          );
        })}

        {column.taskIds.length === 0 ? (
          <p className="px-1 py-6 text-center text-sm text-slate-500">
            この列は空です
          </p>
        ) : null}
      </div>
    </div>
  );
}
