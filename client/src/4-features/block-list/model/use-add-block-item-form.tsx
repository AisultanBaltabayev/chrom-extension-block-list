import { useForm } from "react-hook-form";
import { useAddBlockItemMutation } from "@/5-entities/block-list";
import { AddBlockItemDtoType } from "@/6-shared/api/orval/models";

export function useAddBlockItemForm() {
  const {
    register,
    handleSubmit: handleFormSubmit,
    watch,
  } = useForm<{
    type: AddBlockItemDtoType;
    data: string;
  }>();

  const addBlockItemMutation = useAddBlockItemMutation();

  const handleSubmit = handleFormSubmit((data) =>
    addBlockItemMutation.mutate({ data }),
  );

  const type = watch("type");

  return {
    register,
    handleSubmit,
    isLoading: addBlockItemMutation.isLoading,
    type,
  };
}
