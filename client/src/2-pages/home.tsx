import { UiHeader } from "@/6-shared/ui/ui-header";
import { ToggleBlockingButton } from "@/4-features/toggle-blocking/ui/toggle-blocking-button";
import { Profile } from "@/3-widgets/profile";

export default function HomePage() {
  return (
    <main className={"min-h-screen flex flex-col"}>
      <UiHeader right={<Profile />} />
      <div className={"grid grid-cols-[400px_1fr]"}>
        <aside className={"px-5 pt-10s"}>
          <ToggleBlockingButton />
        </aside>
        <main>...</main>
      </div>
    </main>
  );
}
