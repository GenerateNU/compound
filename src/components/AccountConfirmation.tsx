import Link from "next/link";
import React from "react";

function SkipSection() {
  return (
    <div className="w-2/3 flex flex-col">
      <div className="flex flex-row">
        <div className="bg-zinc-300 w-2/3">INSERT IMAGE HERE</div>
        <div className="p-6 w-2/3">
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
      <button className="w-1/4 mt-6 ml-96 p-2 bg-slate-600 text-white text-center font-semibold rounded-lg border-2 border-solid max-md:px-0.5">
        Let's get started!
      </button>
      <Link href="" className="underline py-4 text-center">Complete Later</Link>
    </div>
  );
}

export default SkipSection;
