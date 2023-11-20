import { UiLogo } from "@/6-shared/ui/ui-logo.tsx";
import { UiButton } from "@/6-shared/ui/ui-button.tsx";
import { createTab } from "@/6-shared/lib/browser.ts";
import { ADMIN_ROUTES } from "@/6-shared/constants/constants.ts";

export function NotAuthPage() {
  return (
    <div className={"p-8 flex flex-col gap-3"}>
      <UiLogo />
      <h2 className={"text-xl"}>You are not authorized!</h2>
      <UiButton
        variant={"primary"}
        onClick={() => {
          createTab(ADMIN_ROUTES.MAIN_URL);
        }}
      >
        Sign In
      </UiButton>
    </div>
  );
}
