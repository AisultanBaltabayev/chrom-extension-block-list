import React from "react";
import { UiTextField } from "@/6-shared/ui/ui-text-field";
import { UiButton } from "@/6-shared/ui/ui-button";
import { ROUTES } from "@/6-shared/constants/routes";
import { UiLink } from "@/6-shared/ui/ui-link";
import { useSignInForm } from "@/4-features/auth/model/use-sign-in-form";

export const SignInForm = () => {
  const { register, handleSubmit, isLoading, errorMessage } = useSignInForm();

  return (
    <form className={"flex flex-col gap-2"} onSubmit={handleSubmit}>
      <UiTextField
        label={"Email"}
        inputProps={{ type: "email", ...register("email", { required: true }) }}
      />
      <UiTextField
        label={"Password"}
        inputProps={{
          type: "password",
          ...register("password", { required: true }),
        }}
      />
      <UiButton variant={"primary"} disabled={isLoading}>
        Sign In
      </UiButton>
      <UiLink className={"text-center"} href={ROUTES.SIGN_UP}>
        Sign Up
      </UiLink>
      {errorMessage && <div className={"text-rose-500"}>{errorMessage}</div>}
    </form>
  );
};
