import React from "react";
import { OnboardingProgress } from "./OnboardingProgress";

function ProfileComponent() {
  return (
    <main className="bg-white flex flex-col px-5">
      <OnboardingProgress />
      <section className="self-center w-full max-w-[1274px] mt-32 mb-48 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 justify-center">
          <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <h1 className="text-black text-center text-5xl max-md:text-4xl">
                Time to personalize!
              </h1>
              <p className="text-black text-xl  mt-14 max-md:max-w-full max-md:mt-10">
                Everyone's financial education journey is unique so let's
                personalize your experience.
              </p>
              <div className="flex w-[568px] max-w-full items-center justify-center gap-5 mt-28 max-md:flex-wrap max-md:mt-10">
                <div className="justify-center items-center bg-zinc-600 self-stretch flex w-[339px] max-w-full flex-col grow shrink-0 basis-auto px-5 py-6 rounded-lg">
                  <div className="text-white text-center text-2xl font-semibold leading-[100%] self-center">
                    <a href="profileUnfilled" aria-label="Let’s Get Started!">
                      Let’s Get Started!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProfileComponent;
