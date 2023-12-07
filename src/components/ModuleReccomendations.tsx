import * as React from "react";

export default function ModuleReccomendations(props: {rec1: string, rec2: string}) {
  return (
    <div className="items-stretch bg-white flex flex-col px-6 py-4 rounded-lg max-md:px-5">
      <div className="text-blue-950 text-xl font-extrabold leading-7 whitespace-nowrap max-md:max-w-full">
        Modules you may be interested in...
      </div>
      <div className="content-start flex-wrap bg-white mt-6 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="items-stretch bg-gray-100 flex w-full grow flex-col mx-auto pl-3 pr-6 py-6 rounded-xl max-md:mt-6 max-md:pr-5">
              <div className="justify-between items-center flex gap-5">
                <div className="items-center flex aspect-square flex-col justify-center my-auto">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f64551e41eae8b1e66e31dadb2afe65b7c6a01355556fc92c83205c8506ecf5f?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f64551e41eae8b1e66e31dadb2afe65b7c6a01355556fc92c83205c8506ecf5f?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f64551e41eae8b1e66e31dadb2afe65b7c6a01355556fc92c83205c8506ecf5f?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f64551e41eae8b1e66e31dadb2afe65b7c6a01355556fc92c83205c8506ecf5f?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f64551e41eae8b1e66e31dadb2afe65b7c6a01355556fc92c83205c8506ecf5f?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f64551e41eae8b1e66e31dadb2afe65b7c6a01355556fc92c83205c8506ecf5f?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f64551e41eae8b1e66e31dadb2afe65b7c6a01355556fc92c83205c8506ecf5f?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f64551e41eae8b1e66e31dadb2afe65b7c6a01355556fc92c83205c8506ecf5f?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                    className="aspect-square object-contain object-center w-14 overflow-hidden rounded-lg"
                  />
                </div>
                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                  <div className="text-blue-950 text-xl font-extrabold leading-7 whitespace-nowrap">
                    {props.rec1 ?? "Creating a budget"}
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  alert("simulating learning...");
                }}
                className="text-blue-700 text-center text-base font-bold leading-6 whitespace-nowrap justify-center items-center border border-[color:var(--Blue-Bold,#0057DA)] bg-white mt-8 px-16 py-3 rounded-md border-solid max-md:px-5"
              >
                Start now
              </button>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="justify-between items-stretch bg-gray-100 flex w-full grow flex-col mx-auto pl-3 pr-6 py-6 rounded-xl max-md:mt-6 max-md:pr-5">
              <div className="justify-between items-center flex gap-5">
                <div className="items-center flex aspect-square flex-col justify-center my-auto">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c207b23504f9a844f2b9ca243bd685d17155897742f3153162716784db521663?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c207b23504f9a844f2b9ca243bd685d17155897742f3153162716784db521663?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c207b23504f9a844f2b9ca243bd685d17155897742f3153162716784db521663?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c207b23504f9a844f2b9ca243bd685d17155897742f3153162716784db521663?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c207b23504f9a844f2b9ca243bd685d17155897742f3153162716784db521663?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c207b23504f9a844f2b9ca243bd685d17155897742f3153162716784db521663?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c207b23504f9a844f2b9ca243bd685d17155897742f3153162716784db521663?apiKey=af7b8d767d8745b3a433de5edc8cf82c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c207b23504f9a844f2b9ca243bd685d17155897742f3153162716784db521663?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
                    className="aspect-square object-contain object-center w-14 overflow-hidden rounded-lg"
                  />
                </div>
                <div className="justify-center items-stretch self-stretch flex grow basis-[0%] flex-col">
                  <div className="text-blue-950 text-xl font-extrabold leading-7 whitespace-nowrap">
                    {props.rec1 ?? "Credit 101"}
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  alert("simulating learning...");
                }}
                className="text-blue-700 text-center text-base font-bold leading-6 whitespace-nowrap justify-center items-center border border-[color:var(--Blue-Bold,#0057DA)] bg-white mt-8 px-16 py-3 rounded-md border-solid max-md:px-5"
              >
                Start now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
