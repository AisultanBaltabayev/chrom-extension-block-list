import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useAuthControllerSignUp } from "@/6-shared/api/orval/auth/auth";
import { ROUTES } from "@/6-shared/constants/routes";

export const useSignUpForm = () => {
  const router = useRouter();

  const { register, handleSubmit: handleFormSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const signUpMutation = useAuthControllerSignUp({
    mutation: {
      onSuccess: () => {
        router.push(ROUTES.HOME);
      },
    },
  });

  const handleSubmit = handleFormSubmit((data) =>
    signUpMutation.mutate({ data }),
  );

  const errorMessage = signUpMutation.error ? "Sign up failed" : undefined;

  return {
    register,
    handleSubmit,
    isLoading: signUpMutation.isLoading,
    errorMessage,
  };
};
