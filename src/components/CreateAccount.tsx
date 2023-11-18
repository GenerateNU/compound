import React from "react";

function FinancialLiteracyForm(props: any) {
  return (
    <section className="bg-white">
      <header className="flex flex-row items-stretch max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[64%] max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch max-md:max-w-full">
            <div className="bg-neutral-100 flex w-full items-stretch justify-between gap-5 pl-9 pr-16 py-8 max-md:max-w-full max-md:flex-wrap max-md:px-5">
              <div className="items-stretch flex justify-between gap-4">
                <div className="flex w-14 shrink-0 h-14 flex-col rounded-[50%]" />
                <div className="text-black text-2xl font-extrabold leading-9 self-center grow whitespace-nowrap my-auto">
                  Compound
                </div>
              </div>
              <div className="text-black text-center text-base leading-5 self-center grow whitespace-nowrap my-auto">
                Already have an account?{" "}
                <a href="" className="text-blue-500">
                  Sign in
                </a>
              </div>
            </div>
            <div className="self-center flex w-[573px] max-w-full flex-col mt-36 px-5 max-md:mt-10">
              <h1 className="text-black text-4xl font-extrabold leading-[51px] self-stretch ml-0 mr-0 whitespace-nowrap max-md:max-w-full">
                Your start to financial literacy.
              </h1>
              <p className="text-black text-base font-medium leading-6 self-stretch -mr-5 mt-7 max-md:max-w-full">
                Unlock your adventure to coins, confidence, and a wealth of
                knowledge.
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
                <div className="text-zinc-900 text-base leading-6 grow shrink basis-auto">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
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
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/78cb4d33-f456-43c6-bd15-c05a56503213?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  alt="Password Icon"
                />
              </div>
              <a
                className="text-white text-center text-base font-semibold leading-4 whitespace-nowrap justify-center items-center bg-zinc-600 self-center w-[408px] max-w-full mt-10 px-5 py-3 rounded-lg max-md:mt-10"
                href="account/confirmation"
              >
                Sign up with my email
              </a>
              <div className="text-black text-xl font-bold leading-6 self-center whitespace-nowrap mt-12 max-md:mt-10">
                or
              </div>
              <button className="text-zinc-900 text-center text-base leading-6 items-stretch self-center border-[color:var(--Medium-gray,#B2B9C0)] bg-white w-[408px] max-w-full mt-11 px-4 py-2 border-2 border-solid max-md:mt-10">
                Continue with Google
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[36%] ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b927267-194e-4d7c-833b-e6068dd9aca1?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
            className="aspect-[0.56] object-contain object-center w-full items-start overflow-hidden grow max-md:max-w-full"
            alt="Financial Literacy Image"
          />
        </div>
      </header>
    </section>
  );
}

export default FinancialLiteracyForm;
