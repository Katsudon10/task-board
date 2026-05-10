import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as authRelations from "@/db/schema/auth-relations";
import * as authSchema from "@/db/schema/auth";
import { getRequiredEnv } from "@/lib/env";

const sql = neon(getRequiredEnv("DATABASE_URL"));
const schema = { ...authSchema, ...authRelations };
export const db = drizzle({ client: sql, schema });
