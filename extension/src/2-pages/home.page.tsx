import { UiLogo } from "@/6-shared/ui/ui-logo.tsx";
import { UiButton } from "@/6-shared/ui/ui-button.tsx";
import { createTab } from "@/6-shared/lib/browser.ts";
import { ADMIN_ROUTES } from "@/6-shared/constants/constants.ts";
import { ToggleBlockingButton } from "@/4-features/toggle-blocking";

export function HomePage() {
  return (
    <div className={"p-8 flex flex-col gap-3"}>
      <UiLogo />
      <ToggleBlockingButton />
      <UiButton
        variant={"outlined"}
        onClick={() => {
          createTab(ADMIN_ROUTES.MAIN_URL);
        }}
      >
        Manage Extension
      </UiButton>
    </div>
  );
}
