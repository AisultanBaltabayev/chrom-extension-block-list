import React from "react";
import { SignInForm } from "@/4-features/auth";
import { UiHeader } from "@/6-shared/ui/ui-header";
import { UiFormPageLayout } from "@/6-shared/ui/layouts/ui-form-page-layout";

export const SignInPage = () => {
  return (
    <UiFormPageLayout
      title={"Sign In"}
      header={<UiHeader />}
      form={<SignInForm />}
    />
  );
};
