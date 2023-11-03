import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  authControllerGetSessionInfo,
  authControllerSignIn,
} from "@/shared/api/orval/auth/auth";
import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiLink } from "@/shared/ui/ui-link";
import { UiSpinner } from "@/shared/ui/ui-spinner";
// import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { UiHeader } from "@/shared/ui/ui-header";

export default function HomePage() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (!loggedIn) {
      authControllerSignIn({
        email: "example@gmail.com",
        password: "pass1234",
      }).then((data) => {
        console.log("data: ", data);
        setLoggedIn(true);
      });
    }
  }, [loggedIn]);

  const { data } = useQuery({
    queryKey: ["session", loggedIn],
    queryFn: () => authControllerGetSessionInfo(),
    retry: false,
  });

  return (
    <main className={"min-h-screen"}>
      <UiHeader right={<div>{data?.email}</div>} />

      <UiButton variant={"primary"}>1</UiButton>
      <UiButton variant={"secondary"}>2</UiButton>
      <UiButton variant={"outlined"}>3</UiButton>
      <UiTextField
        label={"Text field"}
        inputProps={{ placeholder: "Enter email" }}
      />
      <UiTextField
        error={"Invalid email"}
        inputProps={{ placeholder: "Enter email" }}
      />
      <UiTextField />
      <UiSelectField
        label={"Text field"}
        selectProps={{ placeholder: "Enter email" }}
        options={[
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3", value: "3" },
        ]}
      />
      <UiSelectField
        error={"Invalid email"}
        selectProps={{ placeholder: "Enter email" }}
        options={[
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3", value: "3" },
        ]}
      />
      <UiSelectField
        options={[
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3", value: "3" },
        ]}
      />
      <UiLink href={"/"}>asdasd</UiLink>
      <UiSpinner className={"text-teal-600 w-20 h-20"} />
      {/*<UiPageSpinner />*/}
    </main>
  );
}
