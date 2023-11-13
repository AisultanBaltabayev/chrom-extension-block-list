import React from "react";
import { UiButton } from "@/6-shared/ui/ui-button";
import { useToggleBlocking } from "@/4-features/toggle-blocking/model/use-toggle-blocking";
import { UiSpinner } from "@/6-shared/ui/ui-spinner";

export function ToggleBlockingButton({}) {
  const { isBlockingEnabled, toggleBlocking, isLoading, isReady } =
    useToggleBlocking();

  if (!isReady) {
    // return null;
    return (
      <UiButton variant={isBlockingEnabled ? "secondary" : "primary"}>
        <UiSpinner className={"text-teal-600 w-24 h-24"} />
      </UiButton>
    );
  }

  return (
    <UiButton
      variant={isBlockingEnabled ? "secondary" : "primary"}
      disabled={isLoading}
      onClick={toggleBlocking}
    >
      {isBlockingEnabled ? "Disable Blocking" : "Enable Blocking"}
    </UiButton>
  );
}
