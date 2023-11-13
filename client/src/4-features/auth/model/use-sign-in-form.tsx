import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useAuthControllerSignIn } from "@/6-shared/api/orval/auth/auth";
import { ROUTES } from "@/6-shared/constants/routes";

export const useSignInForm = () => {
  const router = useRouter();

  const { register, handleSubmit: handleFormSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const signInMutation = useAuthControllerSignIn({
    mutation: {
      onSuccess: () => {
        router.push(ROUTES.HOME);
      },
    },
  });

  const handleSubmit = handleFormSubmit((data) =>
    signInMutation.mutate({ data }),
  );

  const errorMessage = signInMutation.error ? "Sign in failed" : undefined;

  return {
    register,
    handleSubmit,
    isLoading: signInMutation.isLoading,
    errorMessage,
  };
};
