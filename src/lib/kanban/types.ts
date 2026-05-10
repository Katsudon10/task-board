export type ColumnId = "todo" | "doing" | "done";

export type TaskTag = {
  label: string;
  className: string;
};

export type BoardTask = {
  id: string;
  title: string;
  /** 例: 「期限 4/15」「完了 4/9」 */
  dueLabel: string;
  tags: TaskTag[];
  /** Tailwind: 例 bg-indigo-400 */
  assigneeClass: string;
};

export type BoardColumn = {
  id: ColumnId;
  title: string;
  taskIds: string[];
  headerClass: string;
  countChipClass: string;
  labelClass: string;
};

export type BoardState = {
  title: string;
  columns: BoardColumn[];
  tasks: Record<string, BoardTask>;
};
