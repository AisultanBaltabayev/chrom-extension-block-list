import { useForm } from "react-hook-form";
import { useAddBlockItemMutation } from "@/5-entities/block-list";
import { AddBlockItemDtoType } from "@/6-shared/api/orval/models";

export function useAddBlockItemForm() {
  const {
    register,
    handleSubmit: formHandleSubmit,
    watch,
    reset: resetForm,
  } = useForm<{
    type: AddBlockItemDtoType;
    data: string;
  }>({
    defaultValues: {
      type: AddBlockItemDtoType.Website,
    },
  });

  const addBlockItemMutation = useAddBlockItemMutation();

  const handleSubmit = formHandleSubmit((data) =>
    addBlockItemMutation.mutate(
      { data },
      {
        onSuccess: () => {
          resetForm();
        },
      },
    ),
  );

  const type = watch("type");

  return {
    register,
    handleSubmit,
    isLoading: addBlockItemMutation.isLoading,
    type,
  };
}
