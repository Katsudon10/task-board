import type { BoardState } from "./types";

const tag = (label: string, className: string) => ({ label, className });

export const initialBoard: BoardState = {
  title: "プロダクトロードマップ",
  columns: [
    {
      id: "todo",
      title: "TODO",
      taskIds: ["t1", "t2", "t3"],
      headerClass: "bg-slate-200",
      countChipClass: "bg-slate-300 text-slate-700",
      labelClass: "text-slate-600",
    },
    {
      id: "doing",
      title: "進行中",
      taskIds: ["t4", "t5"],
      headerClass: "bg-sky-100",
      countChipClass: "bg-sky-200 text-sky-900",
      labelClass: "text-blue-800",
    },
    {
      id: "done",
      title: "完了",
      taskIds: ["t6", "t7"],
      headerClass: "bg-emerald-100",
      countChipClass: "bg-emerald-200 text-emerald-900",
      labelClass: "text-emerald-800",
    },
  ],
  tasks: {
    t1: {
      id: "t1",
      title: "API設計レビュー",
      dueLabel: "期限 4/15",
      tags: [
        tag("backend", "bg-sky-100 text-blue-700"),
        tag("priority", "bg-pink-100 text-pink-700"),
      ],
      assigneeClass: "bg-indigo-400",
    },
    t2: {
      id: "t2",
      title: "ログイン画面ワイヤー",
      dueLabel: "期限 4/18",
      tags: [tag("design", "bg-amber-100 text-amber-800")],
      assigneeClass: "bg-emerald-400",
    },
    t3: {
      id: "t3",
      title: "エラー監視設定",
      dueLabel: "期限 4/20",
      tags: [tag("ops", "bg-emerald-100 text-emerald-800")],
      assigneeClass: "bg-amber-400",
    },
    t4: {
      id: "t4",
      title: "ユーザーストーリー整理",
      dueLabel: "期限 4/12",
      tags: [tag("pm", "bg-indigo-100 text-indigo-800")],
      assigneeClass: "bg-violet-400",
    },
    t5: {
      id: "t5",
      title: "パフォーマンス計測",
      dueLabel: "期限 4/14",
      tags: [tag("perf", "bg-sky-100 text-blue-700")],
      assigneeClass: "bg-sky-400",
    },
    t6: {
      id: "t6",
      title: "要件定義ドラフト",
      dueLabel: "完了 4/9",
      tags: [tag("docs", "bg-teal-100 text-teal-800")],
      assigneeClass: "bg-pink-400",
    },
    t7: {
      id: "t7",
      title: "CIパイプライン整備",
      dueLabel: "完了 4/7",
      tags: [tag("devops", "bg-emerald-100 text-green-800")],
      assigneeClass: "bg-slate-400",
    },
  },
};
