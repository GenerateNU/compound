import * as React from "react";

export default function ProfileWizard(props: any) {
  return (
    <main className="bg-white flex flex-col items-center px-5">
      <section className="flex w-full max-w-[1292px] flex-col items-stretch mt-16 mb-16 max-md:max-w-full max-md:my-10">
        <div className="flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="flex grow basis-[0%] flex-col items-center self-start">
            <div className="text-white text-center text-base font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-gray-500 aspect-square px-4 py-3 rounded-lg">
              1
            </div>
            <div className="text-zinc-600 text-xl font-semibold leading-8 self-stretch whitespace-nowrap mt-6">
              Personalize Your Profile
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col items-center self-start">
            <div className="text-zinc-600 text-center text-base font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-white aspect-square px-4 py-3 rounded-lg border-2 border-solid border-zinc-600">
              2
            </div>
            <div className="text-zinc-600 text-xl font-semibold leading-8 self-stretch whitespace-nowrap mt-6">
              Customize Your Dashboard
            </div>
          </div>
          <div className="flex grow basis-[0%] flex-col items-center self-start">
            <div className="text-gray-500 text-center text-base font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-white aspect-square px-4 py-3 rounded-lg border-2 border-solid border-zinc-500">
              3
            </div>
            <div className="text-zinc-500 text-xl font-semibold leading-8 self-stretch whitespace-nowrap mt-6">
              Add Your Financial Info
            </div>
          </div>
          <div className="self-stretch flex grow basis-[0%] flex-col items-center">
            <div className="justify-center items-center bg-white flex aspect-square flex-col p-1 rounded-lg border-2 border-solid border-zinc-500">
              <a href="#">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebb36203-92be-4cfa-98c7-1a07fa5ab7b3?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-square object-contain object-center w-[34px] overflow-hidden"
                />
              </a>
            </div>
            <div className="text-zinc-500 text-xl font-semibold leading-8 self-stretch whitespace-nowrap mt-6">
              Begin your Journey!
            </div>
          </div>
        </div>
        <div className="justify-center text-black text-center text-3xl leading-10 self-center max-w-[999px] mt-20 max-md:max-w-full max-md:mt-10">
          Let’s personalize your dashboard!
        </div>
        <div className="flex w-full items-stretch justify-between gap-5 mt-24 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="flex items-stretch justify-between gap-5">
            <div className="text-zinc-600 text-center text-base font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-white aspect-[1.0344827586206897] px-2.5 py-2 rounded-lg border-2 border-solid border-zinc-600">
              1
            </div>
            <div className="justify-center text-black text-center text-2xl leading-8 self-center grow shrink basis-auto my-auto">
              Choose Dashboard Colors
            </div>
          </div>
          <div className="flex items-stretch justify-between gap-5">
            <div className="text-zinc-600 text-center text-base font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-white aspect-[1.0344827586206897] px-2.5 py-2 rounded-lg border-2 border-solid border-zinc-600">
              2
            </div>
            <div className="justify-center text-black text-center text-2xl leading-8 grow shrink basis-auto mt-1.5 self-start">
              My Financial Interests
            </div>
          </div>
        </div>
        <div className="self-center flex w-full max-w-[1248px] justify-between gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="flex grow basis-[0%] flex-col items-stretch">
            <div className="text-zinc-600 text-base font-semibold leading-6">
              Accent Color
            </div>
            <div className="flex items-stretch justify-between gap-5 mt-6 max-md:justify-center">
              <div className="justify-center items-center bg-zinc-300 flex w-[51px] shrink-0 h-[51px] flex-col rounded-lg" />
              <div className="justify-center items-center bg-zinc-400 flex w-[51px] shrink-0 h-[51px] flex-col rounded-lg" />
              <div className="justify-center items-center bg-stone-400 flex w-[51px] shrink-0 h-[51px] flex-col rounded-lg" />
            </div>
            <div className="text-zinc-600 text-base font-semibold leading-6 whitespace-nowrap mt-14 max-md:mt-10">
              Dashboard Preview
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe9d989e-b4b9-4059-8dee-eb8fd50e6ed8?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
              className="aspect-[1.9] object-contain object-center w-full items-start overflow-hidden mt-6"
            />
          </div>
          <div className="flex grow basis-[0%] flex-col mt-5 max-md:max-w-full">
            <div className="flex w-[340px] max-w-full items-stretch justify-between gap-5 self-start">
              <button className="justify-between items-stretch border-[color:var(--Dark-gray,#495057)] flex gap-2 px-8 py-3 rounded-lg border-2 border-solid max-md:px-5">
                <div className="text-zinc-600 text-center text-base font-semibold leading-4">
                  Button
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fcaa78e-f08c-416b-8e9d-7a187144cad8?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                />
              </button>
              <button className="justify-between items-stretch border-[color:var(--Dark-gray,#495057)] flex gap-2 px-8 py-3 rounded-lg border-2 border-solid max-md:px-5">
                <div className="text-zinc-600 text-center text-base font-semibold leading-4">
                  Button
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c70ac37e-2c78-48ba-82d2-49d3ca086ba4?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                />
              </button>
            </div>
            <div className="flex w-[340px] max-w-full items-stretch justify-between gap-5 mt-10 self-start">
              <button className="justify-between items-stretch border-[color:var(--Dark-gray,#495057)] flex gap-2 px-8 py-3 rounded-lg border-2 border-solid max-md:px-5">
                <div className="text-zinc-600 text-center text-base font-semibold leading-4">
                  Button
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1446f9cf-5263-4814-bfa4-43938978757f?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                />
              </button>
              <button className="justify-between items-stretch border-[color:var(--Dark-gray,#495057)] flex gap-2 px-8 py-3 rounded-lg border-2 border-solid max-md:px-5">
                <div className="text-zinc-600 text-center text-base font-semibold leading-4">
                  Button
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d6604ab-4531-4aa8-9133-eddfb48d6f45?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                />
              </button>
            </div>
            <div className="flex w-[340px] max-w-full items-stretch justify-between gap-5 mt-10 self-start">
              <button className="justify-between items-stretch border-[color:var(--Dark-gray,#495057)] flex gap-2 px-8 py-3 rounded-lg border-2 border-solid max-md:px-5">
                <div className="text-zinc-600 text-center text-base font-semibold leading-4">
                  Button
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc696253-4d47-45ea-b149-985820aef7e8?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                />
              </button>
              <button className="justify-between items-stretch border-[color:var(--Dark-gray,#495057)] flex gap-2 px-8 py-3 rounded-lg border-2 border-solid max-md:px-5">
                <div className="text-zinc-600 text-center text-base font-semibold leading-4">
                  Button
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/be3694a2-8cd3-4fe7-a47c-ccbc3e06d8b1?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                />
              </button>
            </div>
            <div className="flex w-[340px] max-w-full items-stretch justify-between gap-5 mt-10 self-start">
              <button className="justify-between items-stretch border-[color:var(--Dark-gray,#495057)] flex gap-2 px-8 py-3 rounded-lg border-2 border-solid max-md:px-5">
                <div className="text-zinc-600 text-center text-base font-semibold leading-4">
                  Button
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c27d8a51-3377-418a-bf21-4d9147578202?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                />
              </button>
              <button className="justify-between items-stretch border-[color:var(--Dark-gray,#495057)] flex gap-2 px-8 py-3 rounded-lg border-2 border-solid max-md:px-5">
                <div className="text-zinc-600 text-center text-base font-semibold leading-4">
                  Button
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8249cf2-4402-401d-9944-daad931b9549?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-square object-contain object-center w-[18px] overflow-hidden shrink-0 max-w-full"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-[422px] max-w-full items-stretch justify-between gap-5 mt-36 self-end max-md:flex-wrap max-md:mt-10">
          <button className="text-zinc-600 text-center text-base font-semibold leading-4 whitespace-nowrap justify-center items-center border-[color:var(--Dark-gray,#495057)] grow px-5 py-3 rounded-lg border-2 border-solid">
            Skip
          </button>
          <a
            className="text-white text-center text-base font-semibold leading-4 whitespace-nowrap justify-center items-center bg-zinc-600 grow px-5 py-3 rounded-lg"
            href="financialInfo"
          >
            Save and Continue
          </a>
        </div>
      </section>
    </main>
  );
}
