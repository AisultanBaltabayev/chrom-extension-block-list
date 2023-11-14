import { useAuthControllerGetSessionInfo } from "@/6-shared/api/orval/auth/auth";
import { useQueryClient } from "@tanstack/react-query";

const sessionKey = ["session"];

export function useSessionQuery() {
  return useAuthControllerGetSessionInfo({
    query: {
      queryKey: sessionKey,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  });
}

export function useResetSession() {
  const queryClient = useQueryClient();

  return () => queryClient.removeQueries();
}
