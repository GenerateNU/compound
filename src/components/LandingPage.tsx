import * as React from "react";
import learningDiagram from "../assets/learning_diagram.png";
import founderMessage from "../assets/founder_message.png";
import Image from "next/image";
import { useRouter } from "next/router";
import landing_pic from "../assets/landing_pic.png";

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

function LandingPage(props: any) {
  const router = useRouter();
  return (
    <main className="bg-white flex flex-col">
      <div className="bg-blue-700 flex items-center justify-between gap-5 px-9 py-6 max-md:flex-wrap max-md:px-5">
        <div className="items-stretch flex gap-3.5 my-auto pr-6 max-md:pr-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
            className="aspect-[0.96] object-contain object-center w-[46px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-gray-100 text-3xl font-extrabold leading-10 self-center grow whitespace-nowrap my-auto">
            Compound
          </div>
        </div>
        <button
          onClick={() => router.push("/account")}
          className="justify-center items-stretch bg-gray-100 self-stretch flex basis-[0%] flex-col rounded-lg"
        >
          <div className="text-blue-700 text-center text-xl font-extrabold leading-7 whitespace-nowrap items-stretch bg-gray-200 justify-center px-12 py-3.5 max-md:px-5 rounded">
            Log in
          </div>
        </button>
      </div>
      <section className="self-center w-full max-w-[1409px] mt-48 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[59%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
              <div className="flex flex-col max-md:max-w-full max-md:pl-5">
                <h2 className="text-black text-6xl font-bold ml-4 max-md:max-w-full max-md:text-4xl">
                  Financial Literacy for All
                </h2>
                <p
                  className="text-black text-2xl font-semibold leading-8 w-[509px] ml-4 mt-8 max-md:max-w-full"
                  style={{ width: "650px" }}
                >
                  We're here to bridge the knowledge gap and level the playing
                  field, one lesson at a time.
                </p>
              </div>
              <div className="w-[449px] max-w-full mt-5 px-5 self-start max-md:mt-10">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <button
                    className="flex items-center justify-center text-zinc-200 text-center text-2xl font-extrabold leading-8 whitespace-nowrap bg-blue-700 mt-14 pl-14 pr-14 py-4 max-md:max-w-full max-md:mt-10 max-md:pl-8 max-md:pr-5 rounded-lg"
                    onClick={() => router.push("/account")}
                  >
                    Get started now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="pl-10 flex flex-col items-stretch w-full ml-5 max-md:w-full max-md:ml-0"
            style={{ transform: "translate(50px, -50px)" }}
          >
            <Image src={landing_pic} alt={""}></Image>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
