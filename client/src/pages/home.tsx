import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { UiLink } from "@/shared/ui/ui-link";
import { UiSpinner } from "@/shared/ui/ui-spinner";
import { UiHeader } from "@/shared/ui/ui-header";
import { SignOutButton } from "@/features/auth";
import { useSessionQuery } from "@/entities/session/queries";

export default function HomePage() {
  const { data } = useSessionQuery();

  return (
    <main className={"min-h-screen"}>
      <UiHeader
        right={
          <div>
            {data?.email}
            <SignOutButton />
          </div>
        }
      />

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
