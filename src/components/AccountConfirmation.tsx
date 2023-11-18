import React from "react";

function SkipSection() {
  return (
    <div>
      <div className="flex flex-row">
        <div className="m-3 bg-zinc-500 w-1/3">IMAGE</div>
        <div className="w-1/3 h-1/3">
          <h1 className="text-black text-center text-5xl ">
            You're all set, Jane!
          </h1>
          <br />
          <p className="text-black text-center text-2l">
            Thank you for creating an account with Compound. Click on the button
            below to begin your financial literacy journey!
          </p>
        </div>
      </div>
      <div className="mx-3 w-1/3">
        <button className="my-6 p-2 bg-slate-600 text-white text-center text-base font-semibold leading-[100%] justify-center flex-1 rounded-lg border-2 border-solid max-md:px-0.5">
          Let's get started!
        </button>
        <p>Complete Later</p>
      </div>
    </div>
  );
}

export default SkipSection;
