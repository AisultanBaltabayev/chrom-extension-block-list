import React from "react";
import { UiTextField } from "@/6-shared/ui/ui-text-field";
import { UiButton } from "@/6-shared/ui/ui-button";
import { ROUTES } from "@/6-shared/constants/routes";
import { UiLink } from "@/6-shared/ui/ui-link";
import { useSignUpForm } from "@/4-features/auth/model/use-sign-up-form";

export const SignUpForm = () => {
  const { register, handleSubmit, isLoading, errorMessage } = useSignUpForm();

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
        Sign Up
      </UiButton>
      <UiLink className={"text-center"} href={ROUTES.SIGN_IN}>
        Sign In
      </UiLink>
      {errorMessage && <div className={"text-rose-500"}>{errorMessage}</div>}
    </form>
  );
};
