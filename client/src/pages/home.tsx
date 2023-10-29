import { Inter } from "next/font/google";
import {
  authControllerGetSessionInfo,
  authControllerSignIn,
} from "@/shared/api/generated";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   authControllerSignIn({
  //     email: "example@gmail.com",
  //     password: "pass1234",
  //   }).then((data) => {
  //     console.log("data: ", data);
  //     setLoggedIn(true);
  //   });
  // }, []);

  const { data } = useQuery({
    queryKey: ["session", loggedIn],
    queryFn: () => {
      return authControllerGetSessionInfo();
    },
  });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      {data?.email}
    </main>
  );
}
