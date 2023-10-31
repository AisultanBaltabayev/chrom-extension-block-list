import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  authControllerGetSessionInfo,
  authControllerSignIn,
} from "@/shared/api/orval/auth/auth";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (!loggedIn) {
      authControllerSignIn({
        email: "example@gmail.com",
        password: "pass1234",
      }).then((data) => {
        console.log("data: ", data);
        setLoggedIn(true);
      });
    }
  }, [loggedIn]);

  const { data } = useQuery({
    queryKey: ["session", loggedIn],
    queryFn: () => authControllerGetSessionInfo(),
    retry: false,
  });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {data?.email}
    </main>
  );
}
