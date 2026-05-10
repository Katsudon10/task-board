# ADR 5: テスト戦略 (Vitest & Playwright)

## ステータス

承認済み (Accepted)

## 決定事項

- **Unit/Component Test**: Vitest + React Testing Library
- **E2E Test**: Playwright

## 理由

- **役割分担**: ロジックの検証は爆速な Vitest で行い、ドラッグ＆ドロップなどの複雑なUI操作の検証は Playwright で行う。
- **品質保証**: リアルタイム共有アプリにおいて、状態遷移のバグは致命的であるため、多角的なテストを導入する。
