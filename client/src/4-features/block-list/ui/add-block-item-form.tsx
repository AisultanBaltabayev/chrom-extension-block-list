import { FC } from "react";
import { useAddBlockItemForm } from "@/4-features/block-list/model/use-add-block-item-form";
import { UiSelectField } from "@/6-shared/ui/ui-select-field";
import { UiTextField } from "@/6-shared/ui/ui-text-field";
import { UiButton } from "@/6-shared/ui/ui-button";
import { AddBlockItemDtoType } from "@/6-shared/api/orval/models";

interface AddBlockItemFormProps {}

type Props = AddBlockItemFormProps;

const typeOptions = [
  { label: "Website", value: AddBlockItemDtoType.Website },
  { label: "KeyWord", value: AddBlockItemDtoType.KeyWord },
];

export const AddBlockItemForm: FC<Props> = (props) => {
  const { handleSubmit, isLoading, register, type } = useAddBlockItemForm();

  return (
    <form className={"flex gap-2"} onSubmit={handleSubmit}>
      <UiSelectField
        className={"grow min-w-[200px]"}
        options={typeOptions}
        selectProps={{ ...register("type") }}
      />
      <UiTextField
        className={"grow"}
        inputProps={{
          placeholder:
            type === "KeyWord" ? "Enter Key Word..." : "Enter WebSite...",
          ...register("data"),
        }}
      />
      <UiButton variant={"primary"} disabled={isLoading}>
        Add Block Item
      </UiButton>
    </form>
  );
};
