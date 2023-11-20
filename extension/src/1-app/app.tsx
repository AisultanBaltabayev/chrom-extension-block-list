import { AppProvider } from "@/1-app/app-provider.tsx";
import { AppRouter } from "@/1-app/app-router.tsx";

export function App() {
  return (
    <div className={"p-8"}>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </div>
  );
}
