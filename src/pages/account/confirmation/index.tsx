import { OnboardingIntro } from "@/components/OnboardingIntro";
import { OnboardingProgress } from "@/components/OnboardingProgress";
import { useState } from "react";

export default function Home() {
  const [avatar, setAvatar] = useState(0);
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Smith");
  const [financialInterests, setFinancialInterests] = useState([
    "Creating a budget",
    "Real estate",
  ]);

  async function createUser() {}

  return (
    <div>
      <main className="bg-white flex flex-col px-5">
        <div className="ml-5 mt-5 items-stretch flex gap-3.5 my-auto pr-6 max-md:pr-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/24c425e5ddf2fda8026a664fda6c0ff6d698fdef222fe9425f9e7659891f2baa?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
            className="aspect-[0.96] object-contain object-center w-[46px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="text-black-100 text-3xl font-extrabold leading-10 self-center grow whitespace-nowrap my-auto">
            Compound
          </div>
        </div>
        <OnboardingIntro />
      </main>
    </div>
  );
}
