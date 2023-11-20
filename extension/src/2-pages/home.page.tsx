import { useSessionQuery } from "@/5-entities/session";

export function HomePage() {
  const { data: session } = useSessionQuery();
  return <div>HomePage {session?.email || "nothing"}</div>;
}
