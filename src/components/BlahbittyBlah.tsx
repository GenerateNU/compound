import * as React from "react";

export default function Bruh(props: any) {
  return (
    <div className="shadow-lg bg-white flex w-1/2 flex-col pb-5 rounded-2xl relative">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a206bdb8dd86f9cb1a6f9fab56944cbe5b71e1a01fc788b1574227235331eec?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
        className="aspect-[8.17] object-contain object-center w-full fill-emerald-200 overflow-hidden self-stretch"
      />
      <div className="text-blue-700 text-xl font-extrabold leading-7 self-center whitespace-nowrap mt-4">
        Module 2: Budgeting
      </div>
      <div className="text-blue-950 text-sm font-bold leading-5 tracking-wide self-center mt-3">
        Sudmodule 3: Something something
      </div>
      <div className="mb-5 text-gray-100 text-center text-xl font-extrabold leading-7 whitespace-nowrap justify-center items-center bg-blue-700 self-center mt-8 px-16 py-4 rounded-lg max-md:px-5">
        Continue
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6 text-blue-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
