import React from "react";
import { UiButton } from "@/shared/ui/ui-button";
import { useSignOut } from "@/features/auth/model/use-sign-out";

export const SignOutButton = () => {
  const { signOut, isLoading } = useSignOut();
  return (
    <UiButton
      variant={"outlined"}
      onClick={() => signOut()}
      disabled={isLoading}
    >
      Sign Out
    </UiButton>
  );
};
