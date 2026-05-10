import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@/db/db";
import * as authRelations from "@/db/schema/auth-relations";
import * as authSchema from "@/db/schema/auth";
import { getRequiredEnv } from "@/lib/env";

const authDbSchema = { ...authSchema, ...authRelations };

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: authDbSchema,
  }),
  socialProviders: {
    google: {
      clientId: getRequiredEnv("GOOGLE_CLIENT_ID"),
      clientSecret: getRequiredEnv("GOOGLE_CLIENT_SECRET"),
    },
  },
  secret: getRequiredEnv("BETTER_AUTH_SECRET"),
  baseURL: getRequiredEnv("BETTER_AUTH_URL"),
});
