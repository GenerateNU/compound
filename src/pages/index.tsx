import { signIn } from "next-auth/react";

export default function Home() {
  function button(text: string) {
    return (
      <button className="h-[60px] w-[20vw] lg:w-[11vw] ml-5 bg-bxBrand text-white rounded-3xl hover:bg-bxBrandLight transition ease-in duration-75">
        {text}
      </button>
    );
  }

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Home!</h1>
      <div onClick={signIn} href={"/auth-frontend/signUp"}>
            {button("Sign Up")}
      </div>
      <div onClick={signIn} href={"/auth-frontend/signIn"}>
            {button("Sign In")}
      </div>
    </main>
  );
}
