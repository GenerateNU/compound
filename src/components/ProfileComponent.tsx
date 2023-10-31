import React from "react";

function ProfileComponent() {
  return (
    <main className="bg-white flex flex-col px-5">
      <section className="self-center flex w-full max-w-[1268px] items-start justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
        <div className="flex flex-col">
          <div className="text-gray-500 text-center text-base font-semibold leading-[100%] self-center justify-center items-center bg-white w-10 max-w-full px-4 py-3 rounded-lg border-2 border-solid border-zinc-500">
            1
          </div>
          <div className="text-zinc-500 text-xl font-semibold leading-[160%] self-stretch mt-6">
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
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4b4ca0c-2841-49b6-8dc3-0ce74b0e1ac4?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4b4ca0c-2841-49b6-8dc3-0ce74b0e1ac4?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4b4ca0c-2841-49b6-8dc3-0ce74b0e1ac4?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4b4ca0c-2841-49b6-8dc3-0ce74b0e1ac4?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4b4ca0c-2841-49b6-8dc3-0ce74b0e1ac4?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4b4ca0c-2841-49b6-8dc3-0ce74b0e1ac4?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4b4ca0c-2841-49b6-8dc3-0ce74b0e1ac4?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4b4ca0c-2841-49b6-8dc3-0ce74b0e1ac4?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
              className="aspect-square object-cover object-center w-full overflow-hidden self-stretch grow"
            />
          </div>
          <div className="text-zinc-500 text-xl font-semibold leading-[160%] self-stretch mt-6">
            Earn Your Badge!
          </div>
        </div>
      </section>
      <section className="self-center w-full max-w-[1274px] mt-32 mb-48 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
            <div className="items-start border-[color:var(--Medium-gray,#B2B9C0)] flex grow flex-col w-full mx-auto border-2 border-solid max-md:max-w-full max-md:mt-10">
              <div className="flex-col self-stretch stroke-[2px] stroke-gray-400 overflow-hidden relative flex min-h-[442px] grow max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a8854205-cc18-470d-a5c3-94b3438dc39e?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8854205-cc18-470d-a5c3-94b3438dc39e?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8854205-cc18-470d-a5c3-94b3438dc39e?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8854205-cc18-470d-a5c3-94b3438dc39e?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8854205-cc18-470d-a5c3-94b3438dc39e?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8854205-cc18-470d-a5c3-94b3438dc39e?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8854205-cc18-470d-a5c3-94b3438dc39e?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a8854205-cc18-470d-a5c3-94b3438dc39e?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                />
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3d430ef3-d5bd-44dc-a994-778f5357df26?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d430ef3-d5bd-44dc-a994-778f5357df26?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d430ef3-d5bd-44dc-a994-778f5357df26?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d430ef3-d5bd-44dc-a994-778f5357df26?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d430ef3-d5bd-44dc-a994-778f5357df26?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d430ef3-d5bd-44dc-a994-778f5357df26?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d430ef3-d5bd-44dc-a994-778f5357df26?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d430ef3-d5bd-44dc-a994-778f5357df26?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                  className="aspect-[1.36] object-cover object-center w-full self-stretch stroke-[2px] stroke-gray-400 overflow-hidden grow max-md:max-w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
              <h1 className="text-black text-center text-5xl max-md:text-4xl">
                You’re All Set, Jane!
              </h1>
              <p className="text-black text-xl max-w-[568px] mt-14 max-md:max-w-full max-md:mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="flex w-[568px] max-w-full items-start justify-between gap-5 mt-28 max-md:flex-wrap max-md:mt-10">
                <div className="justify-center text-black text-center text-xl font-semibold leading-[100%] underline my-auto">
                  <a href="#" aria-label="Complete Later">
                    Complete Later
                  </a>
                </div>
                <div className="justify-center items-center bg-zinc-600 self-stretch flex w-[339px] max-w-full flex-col grow shrink-0 basis-auto px-5 py-6 rounded-lg">
                  <div className="text-white text-center text-2xl font-semibold leading-[100%] self-center">
                    <a href="#" aria-label="Let’s Get Started!">
                      Let’s Get Started!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProfileComponent;
