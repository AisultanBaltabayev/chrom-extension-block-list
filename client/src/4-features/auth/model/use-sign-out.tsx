import { useRouter } from "next/router";
import { useAuthControllerSignOut } from "@/6-shared/api/orval/auth/auth";
import { ROUTES } from "@/6-shared/constants/routes";
import { useResetSession } from "@/5-entities/session";

export const useSignOut = () => {
  const resetSession = useResetSession();
  const router = useRouter();

  const signOutMutation = useAuthControllerSignOut({
    mutation: {
      onSuccess: async () => {
        await router.push(ROUTES.SIGN_IN);
        resetSession();
      },
    },
  });

  return {
    signOut: signOutMutation.mutate,
    isLoading: signOutMutation.isLoading,
  };
};
