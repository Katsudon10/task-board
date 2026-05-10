import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { Dashboard } from "@/components/dashboard/dashboard";
import { auth } from "@/lib/auth/auth";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in?callbackURL=/");
  }

  return <Dashboard user={session.user} />;
}
