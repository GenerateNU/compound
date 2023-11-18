import * as React from "react";
import { useState } from "react";
import Sidebar from "./SideBar";

// Card.jsx - Base card component
const Card = ({ title, children }: any) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 m-2 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-gray-800 text-lg font-semibold mb-4">{title}</h2>
        {children}
      </div>
      <a
        href="#"
        className="text-zinc-600 text-center text-base font-medium leading-6 justify-center bg-white mt-4 px-5 py-2.5 rounded-lg border-2 border-solid border-zinc-600 self-center"
      >
        Start now
      </a>
    </div>
  );
};

// SmartSavingCard.jsx
const SmartSavingCard = () => {
  return (
    <Card title="Smart Saving">
      <div className="flex items-center mt-2">
        <span className="text-gray-500 text-sm">Experience</span>
        <div className="flex items-center ml-2">
          <div className="bg-gray-300 rounded-full h-2 w-2 mr-1"></div>
          <div className="bg-gray-300 rounded-full h-2 w-2 mr-1"></div>
          <div className="bg-gray-300 rounded-full h-2 w-2 mr-1"></div>
          <div className="bg-gray-500 rounded-full h-2 w-2"></div>
        </div>
      </div>
    </Card>
  );
};

// SpendingCard.jsx
const SpendingCard = () => {
  return (
    <Card title="Spending">
      <div className="flex items-center mt-2">
        <span className="text-gray-500 text-sm">Experience</span>
        <div className="flex items-center ml-2">
          <div className="bg-gray-300 rounded-full h-2 w-2 mr-1"></div>
          <div className="bg-gray-500 rounded-full h-2 w-2 mr-1"></div>
          <div className="bg-gray-300 rounded-full h-2 w-2 mr-1"></div>
          <div className="bg-gray-300 rounded-full h-2 w-2"></div>
        </div>
      </div>
    </Card>
  );
};

export default function UpdatedComponent(props: any) {
  return (
    <main className="bg-white">
      <section className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Sidebar />
        {/* <section className="flex flex-col items-stretch w-[19%] max-md:w-full max-md:ml-0">
          <header className="bg-zinc-100 flex w-full grow flex-col mx-auto pl-10 pr-16 py-11 max-md:mt-7 max-md:px-5">
            <div className="justify-center items-stretch flex w-[161px] max-w-full gap-3.5 ml-3 max-md:ml-2.5">
              <a href="#" className="flex">
                <div className="bg-stone-300 flex w-[51px] shrink-0 h-[53px] flex-col rounded-[67px]" />
              </a>
              <a href="#" className="flex">
                <h1 className="text-black text-lg font-extrabold leading-6 tracking-tight self-center grow whitespace-nowrap my-auto">
                  Compound
                </h1>
              </a>
            </div>
            <nav className="items-stretch self-stretch bg-neutral-200 flex justify-between gap-3 mt-12 pl-3 pr-16 py-3 rounded-md max-md:mt-10 max-md:pr-5">
              <a href="#" className="flex items-center">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/323e6bd4-41f9-441a-a6ec-2f261eaa7530?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  alt="Dashboard"
                  className="aspect-[1.14] object-contain object-center w-6 fill-black overflow-hidden shrink-0 max-w-full"
                />
                <span className="text-black text-sm font-semibold leading-5 tracking-wide grow whitespace-nowrap self-start pl-2">
                  Dashboard
                </span>
              </a>
            </nav>
            <section className="self-stretch flex flex-col items-stretch mt-12 pl-3 pr-11 max-md:mt-10 max-md:pr-5">
              <a
                href="#"
                className="flex items-center justify-between gap-3 hover:bg-gray-50"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/50304736-f900-45c0-8ec4-b8688c0f6fa3?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  alt="Curriculum"
                  className="aspect-square object-contain object-center w-6 fill-zinc-600 overflow-hidden shrink-0 max-w-full"
                />
                <span className="text-zinc-600 text-sm font-semibold leading-5 tracking-wide grow whitespace-nowrap self-center my-auto">
                  Curriculum
                </span>
              </a>
              <a
                href="#"
                className="flex items-center justify-between gap-3 mt-12 max-md:mt-10"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/15a23448-9344-4525-8775-7abc98b97fa6?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  alt="Achievements"
                  className="aspect-[1.14] object-contain object-center w-6 fill-zinc-600 overflow-hidden shrink-0 max-w-full"
                />
                <span className="text-zinc-600 text-sm font-semibold leading-5 tracking-wide grow whitespace-nowrap self-start">
                  Achievements
                </span>
              </a>
              <a
                href="#"
                className="flex items-center justify-between gap-3 mt-12 max-md:mt-10"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dbb19464-dd76-437e-97e8-bf4a62e2851a?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  alt="Profile"
                  className="aspect-square object-contain object-center w-6 fill-zinc-600 overflow-hidden shrink-0 max-w-full"
                />
                <span className="text-zinc-600 text-sm font-semibold leading-5 tracking-wide self-center grow whitespace-nowrap my-auto">
                  Profile
                </span>
              </a>
            </section>
            <a
              href="#"
              className="flex items-center w-[143px] max-w-full gap-0 ml-3 mt-[300px] max-md:ml-2.5 max-md:mt-10"
            >
              <div className="items-stretch flex justify-between gap-5 my-auto">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/899f0a1f-0364-4caf-b4eb-a94632a014cd?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  alt="More"
                  className="aspect-square object-contain object-center w-6 fill-zinc-600 overflow-hidden shrink-0 max-w-full"
                />
                <span className="text-zinc-600 text-base font-medium leading-6 grow whitespace-nowrap">
                  More
                </span>
              </div>
            </a>
          </header>
        </section> */}

        <section className="bg-zinc-100 flex flex-col px-6 rounded-3xl max-md:px-5">
          <div className="items-stretch flex w-[228px] max-w-full justify-between gap-5 ml-6 mt-8 pr-0.5 max-md:ml-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dc66ed2-4b04-49e7-a6c6-2d70406d4660?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
              className="aspect-[1.02] object-contain object-center w-[62px] overflow-hidden shrink-0 max-w-full"
              alt="User Avatar"
            />
            <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
              <h2 className="text-black text-2xl font-bold leading-9 whitespace-nowrap">
                Jyaleen Wu
              </h2>
              <p className="text-zinc-600 text-sm font-semibold leading-5 tracking-wide whitespace-nowrap mt-2">
                @vdghvs
              </p>
            </div>
          </div>
          <div className="items-stretch self-stretch bg-white flex flex-col mt-8 pt-8 pb-6 px-8 rounded-2xl max-md:max-w-full max-md:px-5">
            <div className="justify-between items-center content-center gap-y-4 flex-wrap flex w-full gap-5">
              <div className="items-stretch flex justify-between gap-5 my-auto">
                <div className="items-stretch flex justify-between gap-3">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/16993279-b005-418e-836d-384db9c4a73a?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                    className="aspect-[1.07] object-contain object-center w-[30px] fill-black overflow-hidden shrink-0 max-w-full"
                    alt="Level Icon"
                  />
                  <div className="text-black text-xl font-bold leading-7 grow whitespace-nowrap">
                    Level 3
                  </div>
                </div>
                <div className="text-zinc-500 text-sm font-semibold leading-5 tracking-wide self-center grow whitespace-nowrap my-auto">
                  100 XP to level up
                </div>
              </div>
              <div className="items-stretch content-center flex-wrap bg-zinc-300 self-stretch flex basis-[0%] flex-col p-2 rounded-2xl min-w-fit">
                <div className="justify-between items-stretch flex gap-2 shrink-0">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d524a991-3ace-4f4c-98ab-ec2e6f8d1f7f?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                    className="aspect-square object-contain object-center w-5 fill-zinc-600 overflow-hidden shrink-0 max-w-full"
                    alt="XP Icon"
                  />
                  <div className="text-zinc-600 text-sm font-semibold leading-5 tracking-wide grow whitespace-nowrap flex-shrink">
                    225 XP
                  </div>
                </div>
              </div>
            </div>
            <div className="items-stretch self-stretch flex flex-col pt-1">
              <section className="bg-neutral-400 flex w-full flex-col items-stretch rounded-3xl">
                <div
                  className="bg-zinc-600 flex min-h-[35px] w-1/2 flex-col rounded-3xl"
                  role="presentation"
                  aria-label="Content"
                />
              </section>
            </div>
          </div>

          <div className="justify-between items-stretch content-center gap-y-2 flex-wrap flex gap-5 mt-12 max-md:mt-10">
            <h2 className="text-black text-xl font-bold leading-7">
              Achievements
            </h2>
            <a
              href="#"
              className="text-zinc-500 text-right text-sm font-semibold leading-5 tracking-wide self-center whitespace-nowrap my-auto"
            >
              View all
            </a>
          </div>
          <div className="justify-between items-stretch content-start flex-wrap flex gap-5 mt-6 p-4 max-md:justify-center">
            <div className="items-stretch flex grow basis-[0%] flex-col">
              <h3 className="text-black text-center text-sm font-semibold leading-5 tracking-wide">
                Insert Title
              </h3>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d7e1482f-9380-4762-9ab8-285146500472?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                className="aspect-[1.01] object-contain object-center w-[84px] overflow-hidden self-center mt-3"
                alt="Achievement Image"
              />
            </div>
            <div className="items-stretch flex grow basis-[0%] flex-col">
              <h3 className="text-black text-center text-sm font-semibold leading-5 tracking-wide">
                Insert Title
              </h3>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/999b4294-3242-4427-b148-81aa6b7ea395?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                className="aspect-[1.01] object-contain object-center w-[84px] overflow-hidden self-center mt-3"
                alt="Achievement Image"
              />
            </div>
            <div className="items-stretch flex grow basis-[0%] flex-col">
              <h3 className="text-black text-center text-sm font-semibold leading-5 tracking-wide">
                Insert Title
              </h3>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca2f6dd7-1ddd-4c7a-9e07-d960b9e25558?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                className="aspect-[1.01] object-contain object-center w-[84px] overflow-hidden self-center mt-3"
                alt="Achievement Image"
              />
            </div>
          </div>
          <div className="self-stretch mt-10 mb-6 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div className="items-stretch self-stretch bg-white flex grow flex-col w-full mx-auto px-7 py-6 rounded-2xl max-md:mt-6 max-md:px-5">
                  <h2 className="text-black text-xl font-bold leading-7 whitespace-nowrap">
                    Financial Tools
                  </h2>
                  <p className="text-zinc-900 text-base font-medium leading-6 mt-6">
                    This is a product description.
                  </p>
                  <a
                    href="#"
                    className="text-zinc-600 text-center text-base font-medium leading-6 whitespace-nowrap justify-center items-center bg-white mt-7 px-5 py-2.5 rounded-lg border-2 border-solid border-zinc-600"
                  >
                    Explore
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div className="items-stretch self-stretch bg-white flex grow flex-col w-full mx-auto px-7 py-6 rounded-2xl max-md:mt-6 max-md:px-5">
                  <h2 className="text-black text-xl font-bold leading-7 whitespace-nowrap">
                    Mentor Market
                  </h2>
                  <p className="text-zinc-900 text-base font-medium leading-6 mt-6">
                    This is a product description.
                  </p>
                  <a
                    href="#"
                    className="text-zinc-600 text-center text-base font-medium leading-6 whitespace-nowrap justify-center items-stretch bg-white mt-7 px-5 py-2.5 rounded-lg border-2 border-solid border-zinc-600 max-md:pr-px"
                  >
                    Find a mentor
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <main className="bg-zinc-100 flex flex-col items-stretch rounded-3xl border-[10px] border-solid border-zinc-100">
          <section className="items-stretch bg-zinc-100 flex flex-col rounded-2xl max-md:max-w-full max-md:mr-1.5">
            <section className="items-stretch bg-zinc-100 flex flex-col px-5 py-7 rounded-2xl max-md:max-w-full">
              <div className="justify-between items-stretch flex gap-5 mr-2.5 max-md:max-w-full max-md:flex-wrap">
                <h1 className="text-black text-2xl font-bold leading-9">
                  Jump back in
                </h1>
                <a
                  href="#"
                  className="text-zinc-500 text-right text-sm font-semibold leading-5 tracking-wide self-center whitespace-nowrap my-auto"
                >
                  View full curriculum
                </a>
              </div>
            </section>
          </section>
          <section className="flex w-full flex-col items-stretch mt-10 mb-6 px-5 max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/de17ae0b-b331-4cd6-97f8-df0008be520a?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/de17ae0b-b331-4cd6-97f8-df0008be520a?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/de17ae0b-b331-4cd6-97f8-df0008be520a?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/de17ae0b-b331-4cd6-97f8-df0008be520a?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/de17ae0b-b331-4cd6-97f8-df0008be520a?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/de17ae0b-b331-4cd6-97f8-df0008be520a?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/de17ae0b-b331-4cd6-97f8-df0008be520a?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/de17ae0b-b331-4cd6-97f8-df0008be520a?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
              className="aspect-[1.71] object-contain object-center w-full overflow-hidden rounded-2xl max-md:max-w-full"
            />
            <h2 className="text-neutral-500 text-xl font-bold leading-7 whitespace-nowrap mt-8 pb-5 max-md:max-w-full">
              Modules you may be interested in...
            </h2>
            <div className="flex justify-center items-center ">
              <SmartSavingCard />
              <SpendingCard />
            </div>
            {/* <div className="mt-8 pr-3.5 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                  <div className="items-stretch bg-white flex w-full grow flex-col mx-auto pl-3 pr-6 py-5 rounded-xl max-md:mt-6 max-md:pr-5">
                    <div className="justify-between items-stretch flex-col gap-5">
                      <div className="bg-stone-300 flex w-14 shrink-0 h-14 flex-col rounded-[67px]" />
                      <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
                        <h3 className="text-black text-xl font-bold leading-7 whitespace-nowrap">
                          Smart Saving
                        </h3>
                        <div className="items-stretch bg-zinc-300 flex w-full justify-between gap-2 mt-2 px-2 py-1 rounded-3xl">
                          <div className="text-neutral-600 text-xs font-medium leading-4 tracking-wide">
                            Experience
                          </div>
                          <div className="items-stretch self-center flex gap-4 my-auto max-md:justify-center">
                            <div className="flex w-2.5 shrink-0 h-2.5 flex-col rounded-[50%]" />
                            <div className="flex w-2.5 shrink-0 h-2.5 flex-col rounded-[50%]" />
                            <div className="flex w-2.5 shrink-0 h-2.5 flex-col rounded-[50%]" />
                          </div>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-zinc-600 text-center text-base font-medium leading-6 whitespace-nowrap justify-center items-center border-[color:var(--Dark-gray,#495057)] bg-white mt-8 px-5 py-2.5 rounded-lg border-2 border-solid"
                      >
                        Start now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-stretch bg-white flex w-full grow flex-col mx-auto pl-3 pr-6 py-5 rounded-xl max-md:mt-6 max-md:pr-5">
                    <div className="justify-between items-stretch flex gap-5">
                      <div className="bg-stone-300 flex w-14 shrink-0 h-14 flex-col rounded-[67px]" />
                      <div className="justify-center items-stretch flex grow basis-[0%] flex-col">
                        <h3 className="text-black text-xl font-bold leading-7 whitespace-nowrap">
                          Spending
                        </h3>
                        <div className="bg-zinc-300 flex w-full justify-between gap-3.5 mt-2 px-2 py-1.5 rounded-3xl">
                          <div className="text-neutral-600 text-xs font-medium leading-4 tracking-wide">
                            Experience
                          </div>
                          <div className="items-stretch self-stretch flex gap-4 max-md:justify-center">
                            <div className="flex w-2.5 shrink-0 h-2.5 flex-col rounded-[50%]" />
                            <div className="stroke-[1px] flex w-2.5 shrink-0 h-2.5 flex-col rounded-[50%]" />
                            <div className="stroke-[1px] flex w-2.5 shrink-0 h-2.5 flex-col rounded-[50%]" />
                          </div>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-zinc-600 text-center text-base font-medium leading-6 whitespace-nowrap justify-center items-center border-[color:var(--Dark-gray,#495057)] bg-white mt-8 px-5 py-2.5 rounded-lg border-2 border-solid"
                      >
                        Start now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </section>
        </main>
      </section>
    </main>
  );
}
