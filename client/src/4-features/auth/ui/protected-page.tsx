import { PropsWithChildren, ReactElement } from "react";
import { UiPageSpinner } from "@/6-shared/ui/ui-page-spinner";
import { useRouter } from "next/router";
import { ROUTES } from "@/6-shared/constants/routes";
import { useSessionQuery } from "@/5-entities/session";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
  return function ProtectedPage(props: PropsWithChildren<P>) {
    const router = useRouter();

    const { isLoading, isError } = useSessionQuery();

    if (isLoading) {
      return <UiPageSpinner />;
    }

    if (isError) {
      router.replace(ROUTES.SIGN_IN);
      return;
    }

    return <Component {...props} />;
  };
}
