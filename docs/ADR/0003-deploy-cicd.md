# ADR 3: デプロイおよびCI/CD戦略

## ステータス

承認済み (Accepted)

## 決定事項

- **CI/CD**: GitHub Actions
- **Database Migration**: `drizzle-kit push` をCIから実行。

## 理由

- **自動化**: 手動によるマイグレーション漏れを防ぐ。
- **環境分離**: ローカル開発には Docker PostgreSQL を使用し、本番およびプレビュー環境には Neon を使用することで、開発スピードと安全性を両立する。
