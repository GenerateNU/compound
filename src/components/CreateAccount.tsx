import { useState } from "react";
import { useRouter } from "next/router";

function FinancialLiteracyForm(props: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  async function createUser() {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      localStorage.setItem("email", email); // Store email to localStorage
      console.log("user created");
    } else {
      console.log("user not created");
    }
  }

  async function signUpAndRedirect() {
    const res = await fetch(`/api/users?email=${encodeURIComponent(email)}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      console.log("user found, logging in, redirecting to dashboard");
      localStorage.setItem("email", email); // Store email to localStorage
      router.push("/postDashboard");
    } else {
      console.log("user not found, creating user and redirecting to sign up ");
      await createUser();
      router.push("/account/confirmation");
    }
  }

  return (
    <section className="bg-white h-screen w-screen">
      <header className="flex">
        <div className="grow flex flex-col items-stretch">
          <div className="flex flex-col items-stretch max-md:max-w-full">
            <div className="bg-neutral-100 flex w-full items-center justify-between py-8 p-10">
              <div className="flex justify-between items-center gap-4">
                <div className="flex w-14 shrink-0 h-14 flex-col rounded-[50%] bg-neutral-400" />
                <div className="text-black text-2xl font-extrabold">
                  Compound
                </div>
              </div>
              {/* <div className="text-black">
                Already have an account?{" "}
                <a href="" className="text-blue-500">
                  Sign in
                </a>
              </div> */}
            </div>
            <div className="flex w-full flex-col mt-10 px-5 max-md:mt-10">
              <h1 className="text-black text-4xl font-extrabold max-w-48 mb-5 mx-auto">
                Your start to financial literacy.
              </h1>
              <p className="text-black font-medium max-w-48 mx-auto text-center">
                Unlock your adventure to coins, <br></br>
                confidence, and a wealth of knowledge.
              </p>
              <label
                htmlFor="email"
                className="text-zinc-600 text-xs font-semibold leading-4 self-center whitespace-nowrap mt-16 max-md:mt-10"
              >
                Enter your email address
              </label>
              <div className="items-stretch self-center border-[color:var(--Medium-gray,#B2B9C0)] bg-white flex w-[408px] max-w-full gap-2.5 mt-2 px-4 py-2 border-2 border-solid">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9edb7d42-5a4e-4aa0-a411-641df6a6f8f0?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  alt="Email Icon"
                />
                <div className="text-zinc-900 text-base w-full">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="w-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <label
                htmlFor="password"
                className="text-zinc-600 text-xs font-semibold leading-4 self-center whitespace-nowrap mt-3.5"
              >
                Password
              </label>
              <div className="items-stretch self-center border-[color:var(--Medium-gray,#B2B9C0)] bg-white flex w-[408px] max-w-full gap-2.5 mt-2 px-4 py-2 border-2 border-solid">
                <div className="text-zinc-900 text-base leading-6 grow shrink basis-auto">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="w-full"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/78cb4d33-f456-43c6-bd15-c05a56503213?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  alt="Password Icon"
                  onClick={togglePasswordVisibility}
                />
              </div>
              <button
                className="text-white text-center text-base font-semibold leading-4 whitespace-nowrap justify-center items-center bg-zinc-600 self-center w-[408px] max-w-full mt-10 px-5 py-3 rounded-lg max-md:mt-10"
                onClick={() => {
                  signUpAndRedirect();
                }}
              >
                Sign up / Sign in
              </button>
              <div className="text-black text-xl font-bold leading-6 self-center whitespace-nowrap mt-12 max-md:mt-10">
                or
              </div>
              <button className="text-zinc-900 text-center text-base leading-6 items-stretch self-center border-[color:var(--Medium-gray,#B2B9C0)] bg-white w-[408px] max-w-full mt-11 px-4 py-2 border-2 border-solid max-md:mt-10">
                Continue with Google
              </button>
            </div>
          </div>
        </div>
        {/* <div className="flex grow-0 flex-col items-stretch">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b927267-194e-4d7c-833b-e6068dd9aca1?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
            className="h-screen"
            alt="Financial Literacy Image"
          />
        </div> */}
      </header>
    </section>
  );
}

export default FinancialLiteracyForm;
