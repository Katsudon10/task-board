# ADR 4: LinterとFormatterにBiomeを採用

## ステータス

承認済み (Accepted)

## 決定事項

ESLint/Prettier の代わりに **Biome** を採用する。

## 理由

- **パフォーマンス**: Rust製で圧倒的に高速。
- **統合**: 単一のツールでLinter、Formatter、整理（Organize Imports）を完結でき、設定の競合が発生しない。
- **簡素化**: 2026年現在のモダンな標準として、Next.jsプロジェクトでの採用実績が増えている。
