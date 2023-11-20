import { useSessionQuery } from "@/5-entities/session";
import { UiPageSpinner } from "@/6-shared/ui/ui-page-spinner.tsx";
import { HomePage } from "@/2-pages/home.page.tsx";
import { NotAuthPage } from "@/2-pages/not-auth.page.tsx";

export function AppRouter() {
  const { isLoading, isSuccess } = useSessionQuery();

  if (isLoading) {
    return <UiPageSpinner />;
  }
  if (isSuccess) {
    return <HomePage />;
  }

  return <NotAuthPage />;
}
