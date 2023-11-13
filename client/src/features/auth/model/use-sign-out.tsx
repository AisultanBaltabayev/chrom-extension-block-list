import { useRouter } from "next/router";
import { useAuthControllerSignOut } from "@/shared/api/orval/auth/auth";
import { ROUTES } from "@/shared/constants/routes";
import { useResetSession } from "@/entities/session/queries";

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
