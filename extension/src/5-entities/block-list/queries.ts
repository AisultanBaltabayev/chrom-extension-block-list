import { useQueryClient } from "@tanstack/react-query";
import {
  useBlockListControllerAddBlockListItem,
  useBlockListControllerGetList,
  useBlockListControllerRemoveBlockItem,
} from "@/6-shared/api/orval/block-list/block-list.ts";

const blockListKey = ["block-list"] as unknown[];

export function useBlockListQuery({ q }: { q?: string }) {
  return useBlockListControllerGetList(
    { q },
    {
      query: { queryKey: blockListKey.concat([{ q }]), keepPreviousData: true },
    },
  );
}

export function useAddBlockItemMutation() {
  const queryClient = useQueryClient();

  return useBlockListControllerAddBlockListItem({
    mutation: {
      async onSettled() {
        await queryClient.invalidateQueries(blockListKey);
      },
    },
  });
}

export function useRemoveBlockItemMutation() {
  const queryClient = useQueryClient();

  return useBlockListControllerRemoveBlockItem({
    mutation: {
      async onSettled() {
        await queryClient.invalidateQueries(blockListKey);
      },
    },
  });
}
