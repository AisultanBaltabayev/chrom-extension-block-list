import { useSessionQuery } from "@/5-entities/session";

export function HomePage() {
  const { data: session } = useSessionQuery();

  return (
    <div className={"text-rose-500"}>
      HomePage {session?.email || "nothing"}
    </div>
  );
}
