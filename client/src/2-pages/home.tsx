import { UiHeader } from "@/6-shared/ui/ui-header";
import { ToggleBlockingButton } from "@/4-features/toggle-blocking/ui/toggle-blocking-button";
import { Profile } from "@/3-widgets/profile";
import { AddBlockItemForm, BlockList } from "@/4-features/block-list";

export default function HomePage() {
  return (
    <main className={"min-h-screen flex flex-col"}>
      <UiHeader right={<Profile />} />
      <div className={"grid grid-cols-[400px_1fr]"}>
        <aside className={"px-5 pt-10s"}>
          <ToggleBlockingButton />
        </aside>
        <main className={"pt-10 px-5"}>
          <h1 className={"text-2xl mb-8"}>Block List</h1>
          <AddBlockItemForm />
          <BlockList className={"mt-3"} />
        </main>
      </div>
    </main>
  );
}
