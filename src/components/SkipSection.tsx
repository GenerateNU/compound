import React from "react";
function SkipSection() {
  return (
    <div
      className="flex justify-center flex-col mt-60 font-normal font-body"
      style={{ width: "773px", height: "466px" }}
    >
      <div className="shadow-[0px_4px_10px_4px_rgba(0,0,0,0.25)] bg-white flex flex-col px-5 rounded-[30px]">
        <h1 className="text-black text-center text-5xl self-center max-w-[684px] mt-20 max-md:text-4xl max-md:mt-10">
          Skip this section? <br />
        </h1>
        <p className="justify-center text-black text-xl self-center max-w-[606px] mt-20 max-md:max-w-full max-md:mt-10
        font-['Inter']">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris.
        </p>
        <div className="self-center flex w-[422px] max-w-full items-start justify-between gap-5 ml-4 mt-24 mb-16 max-md:flex-wrap max-md:my-10">
          <button className="text-zinc-600 text-center text-base font-semibold leading-[100%] self-stretch justify-center items-center border-[color:var(--Dark-gray,#495057)] flex-1 px-5 py-3 rounded-lg border-2 border-solid max-md:px-0.5">
            Keep Customizing
          </button>
          <a
            href="#"
            className="justify-center items-center bg-zinc-600 flex flex-col flex-1 px-5 py-3 rounded-lg"
          >
            <div className="text-white text-center text-base font-semibold leading-[100%] self-center">
              Skip Section
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default SkipSection;