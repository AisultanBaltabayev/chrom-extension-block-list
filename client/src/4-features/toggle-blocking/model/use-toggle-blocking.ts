import {
  useAccountQuery,
  useUpdateAccountMutation,
} from "@/5-entities/account";

export function useToggleBlocking() {
  const accountQuery = useAccountQuery();
  const updateAccountMutation = useUpdateAccountMutation();

  const toggleBlocking = () => {
    if (accountQuery.data) {
      updateAccountMutation.mutate({
        data: { isBlockingEnabled: !accountQuery.data?.isBlockingEnabled },
      });
    }
  };

  return {
    isBlockingEnabled: accountQuery.data?.isBlockingEnabled ?? false,
    toggleBlocking,
    isLoading: updateAccountMutation.isLoading,
    isReady: accountQuery.isSuccess,
  };
}
