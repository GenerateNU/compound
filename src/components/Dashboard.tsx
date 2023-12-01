import * as React from "react";
import learningDiagram from "../assets/learning_diagram.png";
import founderMessage from "../assets/founder_message.png";
import Image from "next/image";

export function LearningComponent(props: any) {
  return (
    <div className="flex flex-col items-center px-5">
      <h1 className="text-black text-5xl font-extrabold leading-[68.6px] whitespace-nowrap max-md:text-4xl">
        How you'll learn
      </h1>
      <div className="h-20"></div>
      <div className="h-20"></div>
      <Image
        src={learningDiagram}
        alt="Learning Image"
        layout="responsive"
        width={1000}
        height={625}
      />
      <div className="h-20"></div>
    </div>
  );
}

function Dashboard(props: any) {
  return (
    <main className="bg-white flex flex-col">
      <header className="bg-zinc-300 bg-opacity-30 self-stretch flex w-full justify-between gap-5 pl-16 pr-10 py-8 max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <h1 className="text-black text-2xl font-bold mt-5">Compound</h1>
        <a
          href="account"
          className="justify-center text-black text-center text-xl font-bold max-w-sm leading-7 grow items-center pt-5 pb-3 px-5 rounded-[50px] border-[3px] border-solid border-neutral-400"
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
                      href="postDashboard"
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
      <div className="self-stretch min-h-[1px] w-full mt-64 max-md:max-w-full max-md:mt-10" />
      <section className="self-stretch flex w-full flex-col items-stretch mt-24 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex justify-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e94d25b6-00f7-4363-be43-8976a59637df?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
            className="aspect-[0.95] object-contain object-center w-[127px] fill-black overflow-hidden max-w-full self-end"
          />
        </div>
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-20"></div>
      <div className="flex items-center justify-between gap-10 mt-9 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mr-1">
        <div className="self-stretch flex grow basis-[0%] flex-col items-stretch pl-6 pr-14 py-7 rounded-[33px] max-md:px-5 ml-10">
          <div className="justify-center text-black text-5xl font-extrabold leading-[68.6px] max-md:text-4xl">
            30%
          </div>
          <div className="justify-center text-black text-xl font-bold leading-7 mt-8">
            of Black Americans are financially literate compared to 55% of white
            Americans
          </div>
        </div>
        <div className="self-stretch flex grow basis-[0%] flex-col items-stretch mt-1 pl-8 pr-10 pt-7 pb-2.5 rounded-[35px] max-md:px-5">
          <div className="justify-center text-black text-5xl font-extrabold leading-[68.6px] max-md:text-4xl">
            35%
          </div>
          <div className="justify-center text-black text-xl font-bold leading-7 mt-7">
            of women could answer four or five basic financial literacy
            questions correctly, compared to 55% of men
          </div>
        </div>
        <div className="self-stretch flex grow basis-[0%] flex-col items-stretch mt-1 pl-7 pr-12 pt-7 pb-9 rounded-[33px] max-md:px-5 mr-10">
          <div className="justify-center text-black text-5xl font-extrabold leading-[68.6px] max-md:text-4xl">
            17
          </div>
          <div className="justify-center text-black text-xl font-bold leading-7">
            states in the United States require high school students to take a
            course in personal finance
          </div>
        </div>
      </div>
      <div className="h-20"></div>
      <div className="h-20"></div>
      <LearningComponent />
      <section className="self-stretch flex w-full flex-col items-center mt-32 pl-20 pt-14 pb-20 max-md:max-w-full max-md:mt-10 max-md:pl-5">
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
          <div className="h-20"></div>
          <div className="h-20"></div>
          <div className="h-20"></div>
          <div className="h-20"></div>
        </div>
      </section>
      <section className="flex w-full flex-col items-center pb-32 px-5 max-md:max-w-full max-md:pb-24">
        <Image
          src={founderMessage}
          alt="Learning Image"
          layout="responsive"
          width={1000}
          height={625}
        />
      </section>
      <div className="bg-neutral-400 self-stretch flex min-h-[182px] w-full flex-col max-md:max-w-full" />
    </main>
  );
}

export default Dashboard;
