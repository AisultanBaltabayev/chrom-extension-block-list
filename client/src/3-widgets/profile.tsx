import { SignOutButton } from "@/4-features/auth";
import { useSessionQuery } from "@/5-entities/session";

export function Profile() {
  const { data: session } = useSessionQuery();

  if (!session) {
    return null;
  }

  return (
    <div className={"flex gap-2 items-center"}>
      {session?.email}
      <SignOutButton />
    </div>
  );
}
