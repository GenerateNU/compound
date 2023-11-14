import * as React from "react";

export function Carousel(props: any) {
  return (
    <section className="flex flex-col items-center px-5">
      <h1 className="text-black text-5xl font-extrabold leading-[68.6px] w-[436px] max-w-full max-md:text-4xl">
        What you'll learn
      </h1>
      <div className="self-stretch w-full -mr-5 mt-12 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/20f9ab92-000d-46fb-bc1f-fe7c1fe0f018?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/20f9ab92-000d-46fb-bc1f-fe7c1fe0f018?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/20f9ab92-000d-46fb-bc1f-fe7c1fe0f018?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/20f9ab92-000d-46fb-bc1f-fe7c1fe0f018?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/20f9ab92-000d-46fb-bc1f-fe7c1fe0f018?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/20f9ab92-000d-46fb-bc1f-fe7c1fe0f018?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/20f9ab92-000d-46fb-bc1f-fe7c1fe0f018?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/20f9ab92-000d-46fb-bc1f-fe7c1fe0f018?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
              className="aspect-[0.69] object-contain object-center w-full overflow-hidden mt-3 rounded-3xl max-md:max-w-full max-md:mt-10"
            />
          </div>
          <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-zinc-300 flex flex-col w-full mx-auto pl-20 pr-16 py-16 rounded-3xl max-md:max-w-full max-md:mt-7 max-md:px-5">
              <h2 className="text-black text-center text-4xl font-bold leading-[58.5px] self-center w-[242px]">
                Budgeting
              </h2>
              <div className="bg-zinc-50 self-stretch flex w-full shrink-0 h-[284px] flex-col mt-12 rounded-[75px] max-md:ml-1 max-md:mt-10" />
              <p className="text-black text-center text-2xl font-semibold leading-8 self-center max-w-[315px] mt-12 max-md:mt-10">
                Preview of what the module contains
              </p>
              <div className="flex-col fill-black overflow-hidden self-center relative flex aspect-[3.673076923076923] w-full gap-4 mt-9 pl-6 pr-5 py-4 max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9181883d-a35e-452e-98cd-ac81e2d57a9e?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                  alt="Module Preview"
                />
                <div className="relative justify-center text-black text-base font-medium leading-6">
                  <a
                    href="https://example.com/learn-more"
                    aria-label="Learn More"
                  >
                    Learn More
                  </a>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6be68c8e-e27e-4276-a1b1-2aa942a911c7?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-[2.74] object-contain object-center w-[52px] fill-black overflow-hidden self-stretch shrink-0 max-w-full"
                  alt="Learn More Icon"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[34%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e166c62c-0229-4f66-bc8b-f7970269e074?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e166c62c-0229-4f66-bc8b-f7970269e074?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e166c62c-0229-4f66-bc8b-f7970269e074?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e166c62c-0229-4f66-bc8b-f7970269e074?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e166c62c-0229-4f66-bc8b-f7970269e074?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e166c62c-0229-4f66-bc8b-f7970269e074?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e166c62c-0229-4f66-bc8b-f7970269e074?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e166c62c-0229-4f66-bc8b-f7970269e074?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
              className="aspect-[0.54] object-contain object-center w-full overflow-hidden mt-3 rounded-3xl max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function ProgressComponent(props: any) {
  return (
    <div className="flex gap-0 px-5 max-md:flex-wrap max-md:justify-center">
      <section
        className="bg-neutral-200 self-stretch flex grow basis-[0%] flex-col items-stretch pl-6 pr-20 pt-8 pb-40 rounded-[33px] max-md:pb-24 max-md:px-5"
        aria-label="Progress 30%"
      >
        <h1 className="justify-center text-black text-5xl font-extrabold leading-[68.6px] max-md:text-4xl">
          30%
        </h1>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3995abb7-d024-4da1-b9b5-8e791743182a?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
          className="aspect-[29.71] object-contain object-center w-52 fill-black overflow-hidden mb-0 mt-3.5 max-md:mb-2.5"
          alt=""
        />
      </section>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0881f153-0728-4d9b-a15d-2de68b0e1745?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
        className="aspect-[1.02] object-contain object-center w-[210px] fill-neutral-200 overflow-hidden z-[1] shrink-0 max-w-full mt-7 max-md:mr-0"
        alt=""
      />
      <section
        className="bg-neutral-200 self-stretch flex grow basis-[0%] flex-col items-stretch mt-1 pl-8 pr-16 pt-7 pb-40 rounded-[35px] max-md:pb-24 max-md:px-5"
        aria-label="Progress 35%"
      >
        <h1 className="flex items-stretch justify-between gap-5">
          <span className="justify-center text-black text-5xl font-extrabold leading-[68.6px] max-md:text-4xl">
            35%
          </span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e1da4a3-5469-4c5e-8f52-da9aa175e53d?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
            className="aspect-[2.22] object-contain object-center w-5 fill-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%),#000] stroke-[1px] stroke-stone-50 overflow-hidden shrink-0 max-w-full mt-6 self-end"
            alt=""
          />
        </h1>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7abcb4a2-6f28-4d29-a36a-667b9472e317?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
          className="aspect-[29.71] object-contain object-center w-52 fill-black overflow-hidden mb-0 mt-2.5 max-md:mb-2.5"
          alt=""
        />
      </section>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8601b113-4ad7-426e-ba67-463a69646498?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
        className="aspect-[0.98] object-contain object-center w-[205px] fill-neutral-200 overflow-hidden z-[1] shrink-0 max-w-full mt-6 max-md:mr-0"
        alt=""
      />
      <section
        className="bg-neutral-200 self-stretch flex grow basis-[0%] flex-col items-stretch mt-1 pl-7 pr-16 pt-7 pb-40 rounded-[33px] max-md:pb-24 max-md:px-5"
        aria-label="Progress 17"
      >
        <h1 className="justify-center text-black text-5xl font-extrabold leading-[68.6px] max-md:text-4xl">
          17
        </h1>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b1cc5a7-7bdc-48c0-be33-978ffc52620a?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
          className="aspect-[29.71] object-contain object-center w-52 fill-black overflow-hidden mt-3.5 -mb-8 max-md:mb-2.5"
          alt=""
        />
      </section>
    </div>
  );
}

export default ProgressComponent;
