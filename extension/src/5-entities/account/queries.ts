import {
  useAccountControllerGetAccount,
  useAccountControllerPathAccount,
} from "@/6-shared/api/orval/account/account.ts";
import { useQueryClient } from "@tanstack/react-query";

const accountKey = ["account"];

export function useAccountQuery() {
  return useAccountControllerGetAccount({
    query: {
      queryKey: accountKey,
    },
  });
}

export function useUpdateAccountMutation() {
  const queryClient = useQueryClient();
  return useAccountControllerPathAccount({
    mutation: {
      onSettled: async () => {
        await queryClient.invalidateQueries(accountKey);
      },
    },
  });
}
