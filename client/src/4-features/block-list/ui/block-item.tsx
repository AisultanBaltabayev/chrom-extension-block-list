import { FC } from "react";
import { AddBlockItemDtoType } from "@/6-shared/api/orval/models";
import { useRemoveBlockItemMutation } from "@/5-entities/block-list";

interface BlockItemProps {
  id: number;
  type: AddBlockItemDtoType;
  data: string;
}

type Props = BlockItemProps;

export const BlockItem: FC<Props> = ({ id, data, type }) => {
  const removeBlockItemMutation = useRemoveBlockItemMutation();

  const handleRemove = () => {
    removeBlockItemMutation.mutate({ id });
  };

  return (
    <div className={"flex gap-2"}>
      <div>
        <div className={"text-lg"}>{data}</div>
        <div className={"text-slate-500"}>{type}</div>
      </div>
      <button
        className={
          "ml-auto text-rose-500 hover:text-rose-600 disabled:opacity-50"
        }
        disabled={removeBlockItemMutation.isLoading}
        onClick={handleRemove}
      >
        Delete
      </button>
    </div>
  );
};
