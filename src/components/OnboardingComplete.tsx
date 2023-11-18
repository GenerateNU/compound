import * as React from "react";

export default function OnboardingComponent(props: any) {
  return (
    <main className="bg-white flex flex-col items-center px-5">
      <section className="flex w-full max-w-[1268px] flex-col mt-16 mb-16 max-md:max-w-full max-md:my-10">
        <div className="self-stretch flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="flex grow basis-[0%] flex-col items-center self-start">
            <div className="text-white text-center text-base font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-500 aspect-square px-4 py-3 rounded-lg">
              1
            </div>
            <div className="text-zinc-600 text-xl font-semibold leading-8 self-stretch whitespace-nowrap mt-6">
              Personalize Your Profile
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col items-center self-start">
            <div className="text-white text-center text-base font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-500 aspect-square px-4 py-3 rounded-lg">
              2
            </div>
            <div className="text-zinc-600 text-xl font-semibold leading-8 self-stretch whitespace-nowrap mt-6">
              Customize Your Dashboard
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col items-center self-start">
            <div className="text-white text-center text-base font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-500 aspect-square px-4 py-3 rounded-lg">
              3
            </div>
            <div className="text-zinc-600 text-xl font-semibold leading-8 self-stretch whitespace-nowrap mt-6">
              Add Your Financial Info
            </div>
          </div>
          <div className="self-stretch flex grow basis-[0%] flex-col items-center">
            <div className="justify-center items-center bg-gray-500 flex aspect-square flex-col p-1 rounded-lg">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bee32756-e12c-4a09-928b-6329e5fe0f7a?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                className="aspect-square object-contain object-center w-[34px] overflow-hidden"
                alt="Badge"
              />
            </div>
            <div className="text-zinc-600 text-xl font-semibold leading-8 self-stretch whitespace-nowrap mt-6">
              Earn Your Badge!
            </div>
          </div>
        </div>
        <h1 className="text-black text-center text-5xl leading-[65px] self-center max-w-[684px] mt-20 max-md:max-w-full max-md:text-4xl max-md:leading-[60px] max-md:mt-10">
          Welcome to Compound!
        </h1>
        <div className="text-black text-center text-2xl leading-7 self-center max-w-[606px] mt-11 max-md:max-w-full max-md:mt-10">
          <span className="">
            Congrats on finishing your onboarding! As a reward, you’ve earned
            your first badge:
          </span>{" "}
          <span className="font-bold">Fun Badge Name</span>
          <span className="">!</span>
        </div>
        <div className="self-center flex w-[234px] max-w-full gap-0 mt-12 max-md:mt-10">
          <div className="justify-center items-center bg-stone-400 flex mr-0 w-[200px] shrink-0 h-[200px] flex-col mt-5 rounded-lg border-2 border-solid border-black" />
          <div className="bg-stone-300 flex aspect-square flex-col items-center p-1 rounded-2xl self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/28599d00-2257-4ee9-a6d5-64693e242ed2?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
              className="aspect-square object-contain object-center w-[65px] overflow-hidden"
              alt="Badge"
            />
          </div>
        </div>
        <div className="justify-center text-black text-xl leading-7 self-center max-w-[606px] mt-14 max-md:max-w-full max-md:mt-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris.
        </div>
        <a
          href="/postDashboard"
          className="text-white text-center text-2xl font-semibold leading-6 whitespace-nowrap justify-center items-center bg-zinc-600 self-center w-[339px] max-w-full mt-14 px-5 py-6 rounded-lg max-md:mt-10"
        >
          Go to Dashboard
        </a>
      </section>
    </main>
  );
}
