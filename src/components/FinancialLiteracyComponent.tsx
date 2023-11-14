import * as React from "react";

export function LearningComponent(props: any) {
  return (
    <div className="flex flex-col items-center px-5">
      <h1 className="text-black text-5xl font-extrabold leading-[68.6px] whitespace-nowrap max-md:text-4xl">
        How you'll learn
      </h1>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d4e6301b-848c-4cd4-9839-25ea7efd7f04?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4e6301b-848c-4cd4-9839-25ea7efd7f04?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4e6301b-848c-4cd4-9839-25ea7efd7f04?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4e6301b-848c-4cd4-9839-25ea7efd7f04?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4e6301b-848c-4cd4-9839-25ea7efd7f04?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4e6301b-848c-4cd4-9839-25ea7efd7f04?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4e6301b-848c-4cd4-9839-25ea7efd7f04?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4e6301b-848c-4cd4-9839-25ea7efd7f04?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
        className="aspect-[1.62] object-contain object-center w-full overflow-hidden self-stretch -mr-5 mt-9 rounded-2xl max-md:max-w-full"
        alt="Learning Image"
      />
    </div>
  );
}

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

function FinancialLiteracyComponent(props: any) {
  return (
    <main className="bg-white flex flex-col">
      <header className="bg-zinc-300 bg-opacity-30 self-stretch flex w-full justify-between gap-5 pl-16 pr-10 py-8 max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <h1 className="text-black text-2xl font-bold mt-5">Compound</h1>
        <a
          href="#"
          className="justify-center text-black text-center text-xl font-bold leading-7 grow items-center pt-5 pb-3 px-5 rounded-[50px] border-[3px] border-solid border-neutral-400"
        >
          Log in
        </a>
      </header>
      <section className="self-center w-full max-w-[1409px] mt-48 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[59%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
              <div className="flex flex-col pl-20 max-md:max-w-full max-md:pl-5">
                <h2 className="text-black text-6xl font-extrabold ml-4 max-md:max-w-full max-md:text-4xl">
                  Empower & Educate: Financial Literacy for All
                </h2>
                <p className="text-black text-2xl font-semibold leading-8 w-[509px] ml-4 mt-8 max-md:max-w-full">
                  We're here to bridge the knowledge gap and level the playing
                  field, one lesson at a time.
                </p>
              </div>
              <div className="w-[449px] max-w-full mt-11 px-5 self-start max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fba02e91-b23d-4a28-be92-2ed08246063f?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                      className="aspect-[0.9] object-contain object-center w-[95px] overflow-hidden shrink-0 max-w-full mt-1.5"
                    />
                  </div>
                  <div className="flex flex-col items-stretch w-[62%] ml-5 max-md:w-full max-md:ml-0">
                    <a
                      href="#"
                      className="text-black text-center text-3xl font-semibold leading-10 bg-zinc-300 items-center w-full mx-auto px-5 py-7 rounded-[50px]"
                    >
                      Get Started
                    </a>
                  </div>
                  <div className="flex flex-col items-stretch w-[16%] ml-5 max-md:w-full max-md:ml-0">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe0e79dc-832f-4d41-9362-0a2079458ff0?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                      className="aspect-[0.88] object-contain object-center w-[74px] overflow-hidden shrink-0 max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/70489010-c1aa-4451-b3ac-aa7f7d701033?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/70489010-c1aa-4451-b3ac-aa7f7d701033?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70489010-c1aa-4451-b3ac-aa7f7d701033?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/70489010-c1aa-4451-b3ac-aa7f7d701033?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/70489010-c1aa-4451-b3ac-aa7f7d701033?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/70489010-c1aa-4451-b3ac-aa7f7d701033?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/70489010-c1aa-4451-b3ac-aa7f7d701033?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/70489010-c1aa-4451-b3ac-aa7f7d701033?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
              className="aspect-[1.35] object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </section>
      <div className="bg-zinc-500 self-stretch min-h-[1px] w-full mt-64 max-md:max-w-full max-md:mt-10" />
      <section className="self-stretch flex w-full flex-col items-stretch mt-24 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="self-center w-full max-w-[1295px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <h2 className="text-black text-5xl font-extrabold leading-[68.6px] max-md:max-w-full max-md:text-4xl max-md:mt-10">
                Turn Pennies into Prosperity: <br /> Begin your Financial
                Adventure Here
              </h2>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch mt-7 max-md:max-w-full max-md:mt-10">
                <p className="justify-center text-black text-2xl font-semibold leading-8 max-md:max-w-full">
                  Compound offers a diverse range of interactive courses to
                  empower minorities, women, and teenagers with the financial
                  knowledge they need to thrive.
                </p>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e94d25b6-00f7-4363-be43-8976a59637df?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-[0.95] object-contain object-center w-[127px] fill-black overflow-hidden max-w-full self-end"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-between gap-1 mt-9 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mr-1">
        <div className="bg-neutral-200 self-stretch flex grow basis-[0%] flex-col items-stretch pl-6 pr-14 py-7 rounded-[33px] max-md:px-5">
          <div className="justify-center text-black text-5xl font-extrabold leading-[68.6px] max-md:text-4xl">
            30%
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/376fe9a6-ce67-42fd-8d3a-9ad4b172b172?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
            className="aspect-[32.14] object-contain object-center w-[225px] fill-black overflow-hidden mt-3.5"
          />
          <div className="justify-center text-black text-xl font-bold leading-7 mt-8">
            of Black Americans are financially literate compared to 55% of white
            Americans
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/adbd295d-e0ec-4746-9cfb-53d596dbf2bc?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
          className="aspect-[1.02] object-contain object-center w-[210px] fill-neutral-200 overflow-hidden shrink-0 max-w-full my-auto"
        />
        <div className="bg-neutral-200 self-stretch flex grow basis-[0%] flex-col items-stretch mt-1 pl-8 pr-10 pt-7 pb-2.5 rounded-[35px] max-md:px-5">
          <div className="justify-center text-black text-5xl font-extrabold leading-[68.6px] max-md:text-4xl">
            35%
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/01b13e85-8181-4bad-acdd-47aa36d7f612?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
            className="aspect-[33.71] object-contain object-center w-[236px] fill-black overflow-hidden mt-2.5"
          />
          <div className="justify-center text-black text-xl font-bold leading-7 mt-7">
            of women could answer four or five basic financial literacy
            questions correctly, compared to 55% of men
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/94abb052-8fc3-4dbd-a1d1-3a2d39c024d9?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
          className="aspect-[0.98] object-contain object-center w-[205px] fill-neutral-200 overflow-hidden shrink-0 max-w-full my-auto"
        />
        <div className="bg-neutral-200 self-stretch flex grow basis-[0%] flex-col items-stretch mt-1 pl-7 pr-12 pt-7 pb-9 rounded-[33px] max-md:px-5">
          <div className="justify-center text-black text-5xl font-extrabold leading-[68.6px] max-md:text-4xl">
            17
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e73b2d7-2bd8-4078-8983-7bc58a4ddab4?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
            className="aspect-[32.57] object-contain object-center w-[228px] fill-black overflow-hidden mt-3.5"
          />
          <div className="justify-center text-black text-xl font-bold leading-7">
            17 states in the United States require high school students to take
            a course in personal finance
          </div>
        </div>
      </div>
      <Carousel />
      <LearningComponent />
      {/* <div className="self-stretch flex w-full justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0b01cf57-f504-423a-b3c5-5861f22af174?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
          className="aspect-[0.38] object-contain object-center w-6 fill-black overflow-hidden shrink-0 max-w-full mt-16 max-md:mt-10"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f62ba980-6499-49cf-8f25-8e77e826d32a?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
          className="aspect-[1.22] object-contain object-center w-[73px] fill-black overflow-hidden shrink-0 max-w-full"
        />
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b275ca5f-5cc8-40ae-8867-0d96ca18c42c?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b275ca5f-5cc8-40ae-8867-0d96ca18c42c?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b275ca5f-5cc8-40ae-8867-0d96ca18c42c?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b275ca5f-5cc8-40ae-8867-0d96ca18c42c?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b275ca5f-5cc8-40ae-8867-0d96ca18c42c?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b275ca5f-5cc8-40ae-8867-0d96ca18c42c?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b275ca5f-5cc8-40ae-8867-0d96ca18c42c?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b275ca5f-5cc8-40ae-8867-0d96ca18c42c?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
          className="aspect-[1.65] object-contain object-center w-full overflow-hidden grow basis-[0%] mt-4 rounded-2xl max-md:max-w-full"
        />
      </div> */}
      <section className="bg-neutral-100 self-stretch flex w-full flex-col items-center mt-32 pl-20 pt-14 pb-20 max-md:max-w-full max-md:mt-10 max-md:pl-5">
        <h2 className="text-black text-5xl font-extrabold leading-[68.6px] whitespace-nowrap ml-14 max-md:max-w-full max-md:text-4xl">
          What our users say
        </h2>
        <div className="flex w-full max-w-[1399px] flex-col items-stretch mt-36 max-md:max-w-full max-md:mt-10">
          <div className="pr-0.5 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-3/5 max-md:w-full max-md:ml-0">
                <div className="shadow-sm bg-white flex grow flex-col w-full mx-auto pl-11 pr-14 pt-10 pb-24 max-md:max-w-full max-md:mt-10 max-md:px-5">
                  <div className="flex w-[203px] max-w-full items-stretch justify-between gap-5">
                    <div className="flex shrink-0 h-[75px] flex-col flex-1 rounded-[50%]" />
                    <div className="text-black text-3xl font-bold leading-10 self-center whitespace-nowrap my-auto">
                      Aisha
                    </div>
                  </div>
                  <p className="text-black text-2xl font-semibold leading-8 w-[564px] max-w-full mt-2 self-end">
                    Super easy and clear! I can not recommend it enough Super
                    easy and clear! I can not recommend it enough.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-2/5 ml-5 max-md:w-full max-md:ml-0">
                <div className="shadow-sm bg-white grow w-full mx-auto pl-14 pt-10 pb-12 max-md:max-w-full max-md:mt-10 max-md:pl-5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[18%] max-md:w-full max-md:ml-0">
                      <div className="flex w-[75px] shrink-0 h-[75px] flex-col rounded-[50%] max-md:mt-10" />
                    </div>
                    <div className="flex flex-col items-stretch w-[82%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex flex-col items-stretch mt-7 max-md:mt-10">
                        <div className="text-black text-3xl font-bold leading-10">
                          Youssef
                        </div>
                        <div className="text-black text-2xl font-semibold leading-8 mt-8">
                          Wanted to learn about investing, and Compound made it
                          10x easier
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-100 flex w-full flex-col items-center pb-32 px-5 max-md:max-w-full max-md:pb-24">
        <div className="w-full max-w-[1134px] -mb-6 max-md:max-w-full max-md:mb-2.5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-1/5 max-md:w-full max-md:ml-0">
              <div className="flex w-[204px] shrink-0 h-[204px] flex-col rounded-[50%] max-md:mt-10" />
            </div>
            <div className="flex flex-col items-stretch w-4/5 ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch mt-10 max-md:max-w-full max-md:mt-10">
                <h2 className="justify-center text-black text-2xl font-bold leading-9 max-md:max-w-full">
                  A message from our founder...
                </h2>
                <p className="justify-center text-black text-xl font-bold leading-7 mt-1 max-md:max-w-full">
                  "As the founder of Compound, I've seen firsthand the
                  life-changing impact of financial literacy. Understanding
                  money isn't just about dollars and cents; it's about
                  empowerment, security, and creating a brighter future. That's
                  why we're dedicated to bringing this knowledge to those who
                  need it most. With the right education, we can break barriers,
                  build wealth, and thrive. Together, let's embark on this
                  journey to financial freedom."
                  <br />
                  -Amanda, founder at Compound
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-neutral-400 self-stretch flex min-h-[182px] w-full flex-col max-md:max-w-full" />
    </main>
  );
}

export default FinancialLiteracyComponent;
