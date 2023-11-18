import * as React from "react";
import Sidebar from "./SideBar";

export default function AchievementsComponent(props: any) {
  return (
    <main className="bg-white">
      <section className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Sidebar />

        <section className="flex flex-col items-stretch w-[81%] ml-5 max-md:w-full max-md:ml-0">
          <header className="flex flex-col items-stretch mt-24 px-5 max-md:max-w-full max-md:mt-10">
            <h1 className="text-black text-4xl font-extrabold leading-[51px] w-[555px] max-w-full self-start">
              Achievements
            </h1>
            <p className="text-black text-base font-medium leading-6 mt-5 max-md:max-w-full">
              Some body text here blah blah blah, probably a one liner.
            </p>
            <div className="-mr-5 mt-12 pr-9 max-md:max-w-full max-md:mt-10 max-md:pr-5">
              <section className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <section className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
                  <div className="bg-white flex grow flex-col items-stretch w-full mx-auto pt-0.5 pb-5 rounded-3xl border-[19px] border-solid border-zinc-100 max-md:max-w-full max-md:mt-10">
                    <h2 className="text-black text-xl font-bold leading-7 whitespace-nowrap bg-zinc-100 px-5 py-8  max-md:max-w-full max-md:pl-1">
                      Module Badges
                    </h2>
                    <div className="flex w-[585px] max-w-full items-stretch justify-between gap-5 ml-5 mt-9 self-start max-md:flex-wrap">
                      <div className="flex grow basis-[0%] flex-col items-stretch max-md:max-w-full">
                        <div className="max-md:max-w-full">
                          <section className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <section className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c183228-fa44-4dc8-b027-8462831d3a81?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                                className="aspect-[0.96] object-contain object-center w-[150px] overflow-hidden shrink-0 max-w-full grow"
                              />
                            </section>
                            <section className="flex flex-col items-stretch w-[72%] ml-5 max-md:w-full max-md:ml-0">
                              <div className="justify-center items-stretch self-stretch flex flex-col mt-4">
                                <h3 className="text-black text-xl font-bold leading-7 whitespace-nowrap">
                                  Completed Module 1
                                </h3>
                                <p className="text-zinc-500 text-sm font-semibold leading-5 tracking-wide whitespace-nowrap mt-3">
                                  Status: Lesson 2/3
                                </p>
                                <div className="items-stretch self-stretch flex flex-col pt-1">
                                  <section className="bg-neutral-400 flex w-full flex-col items-stretch rounded-3xl">
                                    <div
                                      className="bg-zinc-600 flex min-h-[35px] w-2/3 flex-col rounded-3xl"
                                      role="presentation"
                                      aria-label="Content"
                                    />
                                  </section>
                                </div>
                              </div>
                            </section>
                          </section>
                        </div>
                        <section className="mt-11 max-md:max-w-full max-md:mt-10">
                          <section className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <section className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/35fdd5db-9178-49b9-bd4b-13d3bc61ff7b?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                                className="aspect-[0.9] object-contain object-center w-[152px] overflow-hidden shrink-0 max-w-full grow"
                              />
                            </section>
                            <section className="flex flex-col items-stretch w-[72%] ml-5 max-md:w-full max-md:ml-0">
                              <div className="justify-center items-stretch self-stretch flex flex-col my-auto max-md:mt-5">
                                <h3 className="text-black text-xl font-bold leading-7 whitespace-nowrap">
                                  Completed Module 2
                                </h3>
                                <p className="text-zinc-500 text-sm font-semibold leading-5 tracking-wide whitespace-nowrap mt-3">
                                  Status: Lesson 0/3
                                </p>
                                <div className="bg-neutral-400 flex shrink-0 h-[35px] flex-col mt-4 rounded-3xl" />
                              </div>
                            </section>
                          </section>
                        </section>
                        <section className="mt-9 max-md:max-w-full">
                          <section className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                            <section className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
                              <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd884b45-7d5b-4b74-a503-05618a4ea0b7?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                                className="aspect-[0.9] object-contain object-center w-[152px] overflow-hidden shrink-0 max-w-full grow"
                              />
                            </section>
                            <section className="flex flex-col items-stretch w-[72%] ml-5 max-md:w-full max-md:ml-0">
                              <div className="justify-center items-stretch self-stretch flex flex-col my-auto max-md:mt-5">
                                <h3 className="text-black text-xl font-bold leading-7 whitespace-nowrap">
                                  Completed Module 3
                                </h3>
                                <p className="text-zinc-500 text-sm font-semibold leading-5 tracking-wide whitespace-nowrap mt-3">
                                  Status: Lesson 0/3
                                </p>
                                <div className="bg-neutral-400 flex shrink-0 h-[35px] flex-col mt-4 rounded-3xl" />
                              </div>
                            </section>
                          </section>
                        </section>
                      </div>
                      <div className="flex basis-[0%] flex-col items-stretch mt-3.5 pb-12 rounded-3xl self-start">
                        <div className="bg-neutral-400 flex shrink-0 h-[146px] flex-col mb-64 rounded-3xl max-md:mb-10" />
                      </div>
                    </div>
                  </div>
                </section>
                <section className="flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="bg-white flex grow flex-col items-stretch w-full mx-auto pt-0.5 pb-9 rounded-3xl border-[19px] border-solid border-zinc-100 max-md:max-w-full max-md:mt-10">
                    <h2 className="text-black text-xl font-bold whitespace-nowrap bg-zinc-100 px-5 py-8 max-md:max-w-full max-md:pl-1">
                      One Hit Wonders
                    </h2>
                    <div className="self-center flex w-[404px] max-w-full justify-between gap-5 mt-11 max-md:mt-10">
                      <div className="items-stretch content-start flex-wrap flex grow basis-[0%] flex-col">
                        <div className="flex items-stretch justify-between gap-5">
                          <div className="items-center border bg-white flex grow basis-[0%] flex-col pt-4 pb-7 px-4 rounded-md border-solid border-gray-200">
                            <div className="text-black text-center text-xl font-bold leading-7 self-stretch">
                              Insert Title
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b1ec7d6-551e-4f09-acd6-a7b5f1b317a0?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                              className="aspect-square object-contain object-center w-20 overflow-hidden self-center max-w-full mt-4"
                            />
                            <div className="text-black text-center text-sm font-semibold leading-5 tracking-wide self-stretch mt-4">
                              You completed your first lesson.
                            </div>
                            <div className="text-neutral-600 text-center text-xs font-medium leading-4 tracking-wide self-stretch mt-4">
                              Status: Completed
                            </div>
                          </div>
                          <div className="items-center border bg-white flex grow basis-[0%] flex-col pt-4 pb-7 px-4 rounded-md border-solid border-gray-200">
                            <div className="text-black text-center text-xl font-bold leading-7 self-stretch">
                              Insert Title
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6da37eb-dfc2-4bf8-a98a-a2ab82dce5d9?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                              className="aspect-square object-contain object-center w-20 overflow-hidden self-center max-w-full mt-4"
                            />
                            <div className="text-black text-center text-sm font-semibold leading-5 tracking-wide self-stretch mt-4">
                              You completed your first lesson.
                            </div>
                            <div className="text-neutral-600 text-center text-xs font-medium leading-4 tracking-wide self-stretch mt-4">
                              Status: Incompleted
                            </div>
                          </div>
                        </div>
                        <div className="flex items-stretch justify-between gap-5 mt-8">
                          <div className="items-center border bg-white flex grow basis-[0%] flex-col pt-4 pb-7 px-4 rounded-md border-solid border-gray-200">
                            <div className="text-black text-center text-xl font-bold leading-7 self-stretch">
                              Insert Title
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d72863ae-5b52-4bdf-89c7-4f41bb5b4732?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                              className="aspect-square object-contain object-center w-20 overflow-hidden self-center max-w-full mt-4"
                            />
                            <div className="text-black text-center text-sm font-semibold leading-5 tracking-wide self-stretch mt-4">
                              You completed your first lesson.
                            </div>
                            <div className="text-neutral-600 text-center text-xs font-medium leading-4 tracking-wide self-stretch mt-4">
                              Status: Completed
                            </div>
                          </div>
                          <div className="items-center border bg-white flex grow basis-[0%] flex-col pt-4 pb-7 px-4 rounded-md border-solid border-gray-200">
                            <div className="text-black text-center text-xl font-bold leading-7 self-stretch">
                              Insert Title
                            </div>
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/69b1345a-d342-4b19-87e6-1e23a7d9d884?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                              className="aspect-square object-contain object-center w-20 overflow-hidden self-center max-w-full mt-4"
                            />
                            <div className="text-black text-center text-sm font-semibold leading-5 tracking-wide self-stretch mt-4">
                              You completed your first lesson.
                            </div>
                            <div className="text-neutral-600 text-center text-xs font-medium leading-4 tracking-wide self-stretch mt-4">
                              Status: Completed
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex basis-[0%] flex-col items-stretch mt-3.5 pb-12 rounded-3xl self-start">
                        <div className="bg-neutral-400 flex shrink-0 h-[152px] flex-col mb-64 rounded-3xl max-md:mb-10" />
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </div>
          </header>
        </section>
      </section>
    </main>
  );
}
