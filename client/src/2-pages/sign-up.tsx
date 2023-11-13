import React from "react";
import { SignUpForm } from "@/4-features/auth";
import { UiHeader } from "@/6-shared/ui/ui-header";
import { UiFormPageLayout } from "@/6-shared/ui/layouts/ui-form-page-layout";

export const SignUpPage = () => {
  return (
    <UiFormPageLayout
      title={"Sign Up"}
      header={<UiHeader />}
      form={<SignUpForm />}
    />
  );
};
