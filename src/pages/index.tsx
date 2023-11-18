import { signIn } from "next-auth/react";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  function button(text: string) {
    return (
      <button className="h-[60px] w-[20vw] lg:w-[11vw] ml-5 text-white rounded-3xl transition ease-in duration-75">
        {text}
      </button>
    );
  }

  // function handleSignIn(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  //   signIn();
  // }

  return <Dashboard />;
}
