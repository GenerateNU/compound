import * as React from "react";

function UpdatedComponent(props: any) {
  return (
    <main className="bg-white flex flex-col items-stretch">
      <header className="bg-zinc-300 bg-opacity-30 flex w-full items-center justify-between gap-5 pl-10 pr-10 py-8 max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <h1 className="text-black text-2xl font-bold mt-5">Compound</h1>
        <nav className="flex justify-between gap-5 my-auto max-md:justify-center">
          <a href="#" className="text-black text-base font-medium">
            Notifications
          </a>
          <a href="#" className="text-black text-base font-medium self-stretch">
            Settings
          </a>
          <a
            href="#"
            className="text-black text-base font-medium self-stretch whitespace-nowrap"
          >
            Privacy & Terms
          </a>
        </nav>
        <button className="justify-center text-black text-center text-xl whitespace-nowrap items-center px-5 py-4 rounded-[50px] border-[3px] border-solid border-neutral-400 self-start">
          Sign out
        </button>
      </header>
      <section className="flex w-full items-stretch justify-between gap-0 px-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
        <aside className="bg-zinc-100 flex basis-[0%] flex-col items-stretch pt-11 pb-[657px] px-10 max-md:pb-24 max-md:px-5">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d8c6589d-7ad6-4e5c-ac66-331f0fd157dd?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8c6589d-7ad6-4e5c-ac66-331f0fd157dd?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8c6589d-7ad6-4e5c-ac66-331f0fd157dd?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8c6589d-7ad6-4e5c-ac66-331f0fd157dd?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8c6589d-7ad6-4e5c-ac66-331f0fd157dd?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8c6589d-7ad6-4e5c-ac66-331f0fd157dd?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8c6589d-7ad6-4e5c-ac66-331f0fd157dd?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d8c6589d-7ad6-4e5c-ac66-331f0fd157dd?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
            className="aspect-[0.96] object-contain object-center w-[52px] overflow-hidden rounded-xl"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/352f3720-29de-4d70-9e82-e2d8eadf60ce?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
            className="aspect-square object-contain object-center w-[26px] fill-black overflow-hidden self-center max-w-full mt-9"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cb360b8-efd2-4bf5-b09f-491390feb872?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
            className="aspect-[1.18] object-contain object-center w-[26px] fill-black overflow-hidden self-center mb-0 max-w-full mt-9 max-md:mb-2.5"
          />
        </aside>
        <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto max-md:max-w-full">
          <div className="z-[1] flex flex-col items-stretch pl-9 pr-20 max-md:max-w-full max-md:px-5">
            <h2 className="text-black text-3xl font-medium">
              Welcome back, Jyaleen!
            </h2>
            <p className="text-black text-base font-medium mt-4">
              Some text here
            </p>
          </div>
          <div className="bg-white flex flex-col pt-9 pb-4 px-5 max-md:max-w-full">
            <div className="bg-stone-300 flex items-center justify-between gap-5 pl-5 pr-3.5 py-5 max-md:max-w-full max-md:flex-wrap max-md:pl-5">
              <h3 className="text-black text-xl font-bold my-auto">Profile</h3>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/75c52695-df1f-4033-87cb-4352bfbd1439?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                className="aspect-[1.05] object-contain object-center w-[43px] overflow-hidden self-stretch shrink-0 max-w-full"
              />
            </div>
            <form className="flex w-[445px] max-w-full flex-col items-stretch mt-6 px-7 self-start max-md:px-5">
              <div className="flex items-stretch justify-between gap-2 max-md:justify-center">
                <div className="flex basis-[0%] flex-col items-center w-[94px] max-w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c32b2bdd-ebc8-40eb-a041-84fd654bc188?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                    className="aspect-[1.08] object-contain object-center w-full fill-black overflow-hidden self-stretch"
                  />
                  <label className="text-black text-base font-medium whitespace-nowrap mt-10">
                    XP
                  </label>
                  <p className="text-black text-base font-light self-stretch whitespace-nowrap mt-3.5">
                    128 points
                  </p>
                </div>
                <div className="bg-black w-px shrink-0 h-[47px] mt-32 self-end max-md:mt-10" />
                <div className="flex grow basis-[0%] flex-col items-stretch mt-2 self-start">
                  <h4 className="text-black text-xl font-bold whitespace-nowrap">
                    Jyaleen Wu
                  </h4>
                  <p className="text-black text-base font-light whitespace-nowrap mt-5">
                    Salt Lake City, Utah
                  </p>
                  <p className="text-black text-base font-light whitespace-nowrap mt-4">
                    xxxxxx
                  </p>
                  <div className="flex items-stretch justify-between gap-5 mt-9 max-md:justify-center">
                    <div className="flex grow basis-[0%] flex-col items-center mt-1.5 self-start">
                      <label className="text-black text-base font-medium whitespace-nowrap">
                        XP
                      </label>
                      <p className="text-black text-base font-light self-stretch whitespace-nowrap mt-3.5">
                        128 points
                      </p>
                    </div>
                    <div className="bg-black w-px shrink-0 h-[47px]" />
                    <div className="flex grow basis-[0%] flex-col items-center self-start">
                      <label className="text-black text-base font-medium whitespace-nowrap">
                        XP
                      </label>
                      <p className="text-black text-base font-light self-stretch whitespace-nowrap mt-4">
                        128 points
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="flex items-stretch justify-between gap-5 mt-8">
              <p className="text-black text-center text-base font-semibold">
                Recently completed
              </p>
              <p className="text-zinc-500 text-base whitespace-nowrap self-start">
                See all
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="shadow-sm bg-white flex grow flex-col items-stretch w-full mx-auto pl-4 pr-4 pt-5 pb-8 rounded-2xl max-md:mt-8">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c4100a7-815f-4021-957d-1ac83f9f310a?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-[0.9] object-contain object-center w-[111px] overflow-hidden"
                />
                <p className="text-black text-base font-semibold whitespace-nowrap mt-5">
                  Lesson Title
                </p>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="shadow-sm bg-white flex grow flex-col items-stretch w-full mx-auto pl-4 pr-4 pt-5 pb-8 rounded-2xl max-md:mt-8">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c927777c-bddb-49f4-940f-22f41977a0a6?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-[0.9] object-contain object-center w-[111px] overflow-hidden"
                />
                <p className="text-black text-base font-semibold whitespace-nowrap mt-5">
                  Lesson Title
                </p>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="shadow-sm bg-white flex grow flex-col items-stretch w-full mx-auto pl-4 pr-4 pt-5 pb-8 rounded-2xl max-md:mt-8">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/683fe866-7a8a-44ac-8f91-bb54324d7664?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-[0.9] object-contain object-center w-[111px] overflow-hidden"
                />
                <p className="text-black text-base font-semibold mt-5">
                  Lesson Title
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[445px] max-w-full flex-col items-stretch mt-8 pl-7 pr-6 self-start max-md:px-5">
          <div className="flex items-stretch justify-between gap-5">
            <p className="text-black text-center text-base font-semibold">
              Achievements
            </p>
            <p className="text-zinc-500 text-base whitespace-nowrap">See all</p>
          </div>
          <div className="flex items-stretch justify-between gap-5 mt-5 max-md:justify-center">
            <div className="bg-white flex w-[72px] shrink-0 h-[59px] flex-col" />
            <div className="bg-white flex w-[72px] shrink-0 h-[59px] flex-col" />
            <div className="bg-white flex w-[72px] shrink-0 h-[59px] flex-col" />
            <div className="bg-white flex w-[72px] shrink-0 h-[59px] flex-col" />
          </div>
        </div>
      </section>
      <section className="flex grow basis-[0%] flex-col items-stretch mt-36 self-start max-md:max-w-full max-md:mt-10">
        <div className="bg-zinc-100 pl-4 pr-6 py-8 max-md:max-w-full max-md:pr-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch max-md:mt-10">
                <h2 className="text-black text-2xl font-bold whitespace-nowrap">
                  Jump back in!
                </h2>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3a3a67d-27ae-4838-90ff-7db5fdcc051d?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-square object-contain object-center w-[115px] overflow-hidden max-w-full ml-4 mt-52 self-start max-md:ml-2.5 max-md:mt-10"
                />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch my-auto max-md:mt-10">
                <div className="shadow-sm bg-white flex flex-col pl-4 pr-5 py-7 rounded-2xl">
                  <h3 className="text-black text-base font-semibold self-stretch whitespace-nowrap">
                    Lesson Title
                  </h3>
                  <p className="text-black text-base font-light self-stretch whitespace-nowrap mt-4">
                    Short description
                  </p>
                  <button className="text-white text-center text-base font-semibold leading-4 whitespace-nowrap justify-center bg-zinc-600 w-[105px] max-w-full mt-10 px-5 py-2.5 rounded-lg max-md:mt-10 max-md:pl-0.5">
                    Resume
                  </button>
                </div>
                <div className="text-black text-2xl font-bold whitespace-nowrap self-center w-[115px] max-w-full items-center mt-11 px-5 py-12 rounded-[50%] max-md:mt-10">
                  3/5
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[22%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col items-stretch mt-28 max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cdd8b73-1e4b-4378-95e1-1847d2b7747c?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-[1.21] object-contain object-center w-[139px] overflow-hidden"
                />
                <p className="text-zinc-600 text-base whitespace-nowrap mt-36 self-end max-md:mt-10">
                  View all
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-black text-2xl font-bold whitespace-nowrap mt-7 max-md:max-w-full">
        Financial Wellness
      </section>
      <section className="mt-7 pr-7 max-md:max-w-full max-md:pr-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="items-stretch border-[color:var(--Medium-gray,#B2B9C0)] bg-white flex grow flex-col w-full mx-auto pt-6 pb-4 px-6 border-2 border-solid max-md:mt-9 max-md:px-5">
              <h2 className="text-zinc-600 text-xl font-semibold leading-8">
                My Mentors
              </h2>
              <p className="text-zinc-900 text-base leading-6 mt-2">
                This is a product description.
              </p>
              <button className="text-white text-center text-base font-semibold leading-4 whitespace-nowrap justify-center items-center bg-zinc-600 mt-7 px-5 py-3 rounded-lg">
                Let’s go
              </button>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch border-[color:var(--Medium-gray,#B2B9C0)] bg-white flex grow flex-col w-full mx-auto pt-6 pb-4 px-6 border-2 border-solid max-md:mt-9 max-md:px-5">
              <h2 className="text-zinc-600 text-xl font-semibold leading-8">
                Financial Tools
              </h2>
              <p className="text-zinc-900 text-base leading-6 mt-2">
                This is a product description.
              </p>
              <button className="text-white text-center text-base font-semibold leading-4 whitespace-nowrap justify-center items-center bg-zinc-600 mt-7 px-5 py-3 rounded-lg">
                Let’s go
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default UpdatedComponent;
