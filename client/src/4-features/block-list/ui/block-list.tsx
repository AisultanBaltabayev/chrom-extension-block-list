import { FC } from "react";
import { UiTextField } from "@/6-shared/ui/ui-text-field";
import { useBlockItems } from "@/4-features/block-list/model/use-block-items";
import { UiSpinner } from "@/6-shared/ui/ui-spinner";
import { BlockItem } from "@/4-features/block-list/ui/block-item";

interface BlockListProps {
  className?: string;
}

type Props = BlockListProps;

export const BlockList: FC<Props> = ({ className }) => {
  const { items, isLoading, q, setQ } = useBlockItems();

  const isLoader = isLoading;
  const isEmptyText = !isLoading && items.length === 0;
  const isItems = items.length > 0;

  return (
    <div className={className}>
      <UiTextField
        className={"mb-2"}
        label={"Search..."}
        inputProps={{ value: q, onChange: (e) => setQ(e.target.value) }}
      />
      <div
        className={"rounded-xl bg-slate-100/50 px-10 py-6 flex flex-col gap-3"}
      >
        {isLoader && (
          <UiSpinner className={"text-teal-600 w-10 h-10 mx-auto"} />
        )}
        {isEmptyText && (
          <div className={"text-xl py-1 text-center"}>List is Empty...</div>
        )}
        {isItems && items.map((item) => <BlockItem key={item.id} {...item} />)}
      </div>
    </div>
  );
};
