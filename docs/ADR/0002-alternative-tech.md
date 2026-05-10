# ADR 2: 対抗技術との比較と不採用理由

## ステータス

承認済み (Accepted)

## 比較検討

1. **Drizzle vs Prisma**
   - PrismaはDXに優れるが、ランタイムが重くエッジ環境での制約がある。Drizzleは軽量でSQLに近い制御が可能なため採用。
2. **Neon vs Supabase**
   - SupabaseはBaaSとして多機能だが、特定のプラットフォームへの依存を避けるため、純粋なPostgreSQLであるNeonを採用。Neonの「DBブランチ機能」を重視。
3. **Next.js vs Remix**
   - Server ActionsとReactの最新機能（useOptimistic等）のエコシステムが成熟しているNext.jsを採用。
