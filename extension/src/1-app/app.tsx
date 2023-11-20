import { AppProvider } from "@/1-app/app-provider.tsx";
import { HomePage } from "@/2-pages/home.page.tsx";

export function App() {
  return (
    <>
      <AppProvider>
        <HomePage />
      </AppProvider>
    </>
  );
}
