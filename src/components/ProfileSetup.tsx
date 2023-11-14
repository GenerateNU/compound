import React from "react";

function ProfileSetup() {
  return (
    <main className="bg-white flex flex-col px-5">
      <section className="self-center flex w-full max-w-[1268px] items-start justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
        <div className="flex flex-col">
          <div className="text-zinc-600 text-center text-base font-semibold leading-[100%] self-center justify-center items-center bg-white w-10 max-w-full px-4 py-3 rounded-lg border-2 border-solid border-zinc-600">
            1
          </div>
          <div className="text-zinc-600 text-xl font-semibold leading-[160%] self-stretch mt-6">
            Personalize Your Profile
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-gray-500 text-center text-base font-semibold leading-[100%] self-center justify-center items-center bg-white w-10 max-w-full px-4 py-3 rounded-lg border-2 border-solid border-zinc-500">
            2
          </div>
          <div className="text-zinc-500 text-xl font-semibold leading-[160%] self-stretch mt-6">
            Customize Your Dashboard
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-gray-500 text-center text-base font-semibold leading-[100%] self-center justify-center items-center bg-white w-10 max-w-full px-4 py-3 rounded-lg border-2 border-solid border-zinc-500">
            3
          </div>
          <div className="text-zinc-500 text-xl font-semibold leading-[160%] self-stretch mt-6">
            Add Your Financial Info
          </div>
        </div>
        <div className="flex flex-col">
          <div className="justify-center items-center bg-white self-center flex w-10 max-w-full flex-col p-1 rounded-lg border-2 border-solid border-zinc-500">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/357c8328-cc7d-401a-b78b-3eaaef20a5f3?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/357c8328-cc7d-401a-b78b-3eaaef20a5f3?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/357c8328-cc7d-401a-b78b-3eaaef20a5f3?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/357c8328-cc7d-401a-b78b-3eaaef20a5f3?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/357c8328-cc7d-401a-b78b-3eaaef20a5f3?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/357c8328-cc7d-401a-b78b-3eaaef20a5f3?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/357c8328-cc7d-401a-b78b-3eaaef20a5f3?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/357c8328-cc7d-401a-b78b-3eaaef20a5f3?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
              className="aspect-square object-cover object-center w-full overflow-hidden self-stretch grow"
            />
          </div>
          <div className="text-zinc-500 text-xl font-semibold leading-[160%] self-stretch mt-6">
            Earn Your Badge!
          </div>
        </div>
      </section>
      <section className="justify-center text-black text-center text-3xl self-center max-w-[999px] ml-11 mt-20 max-md:max-w-full max-md:mt-10">
        Let’s make your Compound profile feel a little more like you.
      </section>
      <section className="self-center w-full max-w-[1289px] mt-16 mb-16 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col max-md:max-w-full max-md:mt-10">
              <div className="flex w-[277px] max-w-full items-start justify-between gap-5">
                <div className="text-zinc-600 text-center text-base font-semibold leading-[100%] self-stretch justify-center items-center bg-white w-[30px] max-w-full px-2.5 py-2 rounded-lg border-2 border-solid border-zinc-600">
                  1
                </div>
                <div className="justify-center text-black text-center text-2xl self-center max-w-[272px] grow shrink-0 basis-auto my-auto">
                  Choose Your Avatar
                </div>
              </div>
              <div className="flex w-[378px] max-w-full grow flex-col mt-12 max-md:mt-10">
                <div className="text-zinc-600 text-base font-semibold leading-[150%]">
                  People
                </div>
                <div className="flex w-full items-start justify-between gap-5 mt-6 max-md:justify-center">
                  <div className="justify-center items-center bg-zinc-300 flex h-[51px] flex-col flex-1 rounded-lg" />
                  <div className="justify-center items-center bg-zinc-400 flex h-[51px] flex-col flex-1 rounded-lg" />
                  <div className="justify-center items-center bg-stone-400 flex h-[51px] flex-col flex-1 rounded-lg" />
                  <div className="justify-center items-center bg-neutral-500 flex h-[51px] flex-col flex-1 rounded-lg" />
                </div>
                <div className="text-zinc-600 text-base font-semibold leading-[150%] mt-14 max-md:mt-10">
                  Animals
                </div>
                <div className="flex w-full items-start justify-between gap-5 mt-8 max-md:justify-center">
                  <div className="justify-center items-center bg-zinc-300 flex h-[51px] flex-col flex-1 rounded-lg" />
                  <div className="justify-center items-center bg-zinc-400 flex h-[51px] flex-col flex-1 rounded-lg" />
                  <div className="justify-center items-center bg-stone-400 flex h-[51px] flex-col flex-1 rounded-lg" />
                  <div className="justify-center items-center bg-neutral-500 flex h-[51px] flex-col flex-1 rounded-lg" />
                </div>
                <div className="text-zinc-600 text-base font-semibold leading-[150%] mt-20 max-md:mt-10">
                  Abstract
                </div>
                <div className="flex w-full items-start justify-between gap-5 mt-8 max-md:justify-center">
                  <div className="justify-center items-center bg-zinc-300 flex h-[51px] flex-col flex-1 rounded-lg" />
                  <div className="justify-center items-center bg-zinc-400 flex h-[51px] flex-col flex-1 rounded-lg" />
                  <div className="justify-center items-center bg-stone-400 flex h-[51px] flex-col flex-1 rounded-lg" />
                  <div className="justify-center items-center bg-neutral-500 flex h-[51px] flex-col flex-1 rounded-lg" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[56%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col mt-1.5 max-md:max-w-full max-md:mt-10">
              <div className="justify-center text-black text-2xl max-w-[368px]">
                Profile Preview
              </div>
              <div className="bg-neutral-100 flex w-[463px] max-w-full flex-col mt-9 pt-8 pb-12 px-5">
                <div className="self-center flex ml-0 w-80 max-w-full flex-col">
                  <div className="bg-zinc-300 flex w-[121px] h-[121px] flex-col rounded-lg" />
                  <div className="items-start rounded flex w-full flex-col mt-11 max-md:mt-10">
                    <div className="text-zinc-600 text-xs font-semibold leading-[120%]">
                      Display Name
                    </div>
                    <div className="text-zinc-900 text-base leading-[150%] items-center border-[color:var(--Medium-gray,#B2B9C0)] bg-white w-full mt-2 pl-4 pr-5 py-2 border-2 border-solid">
                      Jane
                    </div>
                    <div className="text-zinc-600 text-xs leading-[120%] mt-2">
                      *This is the name that will be shown on your dashboard
                    </div>
                  </div>
                  <div className="items-start rounded flex w-full grow flex-col mt-10">
                    <div className="text-zinc-600 text-xs font-semibold leading-[120%]">
                      Email
                    </div>
                    <div className="items-start border-[color:var(--Medium-gray,#B2B9C0)] bg-white flex w-full gap-2.5 mt-2 px-4 py-2 border-2 border-solid">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fbb18a85-d061-4e2c-b65b-e949ea239f3d?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbb18a85-d061-4e2c-b65b-e949ea239f3d?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbb18a85-d061-4e2c-b65b-e949ea239f3d?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbb18a85-d061-4e2c-b65b-e949ea239f3d?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbb18a85-d061-4e2c-b65b-e949ea239f3d?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbb18a85-d061-4e2c-b65b-e949ea239f3d?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbb18a85-d061-4e2c-b65b-e949ea239f3d?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fbb18a85-d061-4e2c-b65b-e949ea239f3d?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                        className="aspect-square object-cover object-center w-6 overflow-hidden self-stretch max-w-full"
                      />
                      <div className="text-zinc-900 text-base leading-[150%] self-stretch max-w-[273px] grow shrink-0 basis-auto">
                        doe.jane@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[422px] max-w-full items-start justify-between gap-5 mt-14 max-md:flex-wrap max-md:mt-10">
              <div className="justify-center items-center border-[color:var(--Dark-gray,#495057)] flex flex-col flex-1 px-5 py-3 rounded-lg border-2 border-solid">
                <div className="text-zinc-600 text-center text-base font-semibold leading-[100%] self-center">
                  Skip
                </div>
              </div>
              <div className="justify-center items-center bg-zinc-600 flex flex-col flex-1 px-5 py-3 rounded-lg">
                <div className="text-white text-center text-base font-semibold leading-[100%] self-center">
                  Save and Continue
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProfileSetup;
