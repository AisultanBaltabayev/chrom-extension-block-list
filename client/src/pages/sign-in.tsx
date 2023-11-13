import React from "react";
import { SignInForm } from "@/features/auth";
import { UiHeader } from "@/shared/ui/ui-header";
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";

export const SignInPage = () => {
  return (
    <UiFormPageLayout
      title={"Sign In"}
      header={<UiHeader />}
      form={<SignInForm />}
    />
  );
};
