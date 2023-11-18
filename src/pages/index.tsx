import SignUpBar from "@/components/SignUpBar";
import { signIn } from "next-auth/react";
import Dashboard from "@/components/Dashboard";

import SignInPage from "./auth-frontend/signIn";
import { Button } from "@chakra-ui/react";

export default function Home() {
  function button(text: string) {
    return (
      <button className="h-[60px] w-[20vw] lg:w-[11vw] ml-5 text-white rounded-3xl transition ease-in duration-75">
        {text}
      </button>
    );
  }
  return (
    <main className="bg-black flex min-h-screen flex-col items-center justify-between p-12">
      <h1>Home!</h1>
      <div onClick={() => signIn("google")} >
        {button("Sign In")}
      </div>
      <div onClick={() => signIn("google")} >
        { button("Sign Up") }
      </div>
    </main>
  );

}
