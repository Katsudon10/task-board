# ADR 1: 技術スタックの選定

## ステータス

承認済み (Accepted)

## コンテキスト

複数人でリアルタイムに編集可能な「共有タスクボード」を開発するにあたり、以下の要件を満たす必要がある。

- 高い型安全性 (TypeScriptの最大活用)
- 快適な操作感 (Optimistic Updatesの実現)
- 低コストかつスケーラブルなインフラ

## 決定事項

- **Framework**: Next.js (App Router)
- **Database**: PostgreSQL (Neon)
- **ORM**: Drizzle ORM
- **State Management**: Zustand
- **UI Library**: shadcn/ui (Radix UI + Tailwind CSS)
