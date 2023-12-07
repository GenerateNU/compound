export function OnboardingProgress() {
  return (
    <section className="self-center flex w-full max-w-[1268px] items-start justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
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
  );
}
