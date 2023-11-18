import * as React from "react";
import Dropdown from "./DropDownMenu";
import CircleButtonChoice from "@/components/CircleButtonChoice";



function ProfileCustomization(props: any) {
    const handleSelect = (selectedOption: any) => {
    console.log('Selected option:', selectedOption);
    // Handle the selected option here, such as updating state or making API calls.
  };

  return (
    <main className="bg-white flex flex-col items-center px-5">
      <section className="flex w-full max-w-[1281px] flex-col mt-16 mb-16 max-md:max-w-full max-md:my-10">
        <div className="self-stretch flex items-start justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="flex grow basis-[0%] flex-col items-center self-start">
          </div>
          <div className="flex grow basis-[0%] flex-col items-center self-start">
          </div>
          <div className="flex grow basis-[0%] flex-col items-center self-start">
          </div>
          <div className="self-stretch flex grow basis-[0%] flex-col items-center">

          </div>
        </div>
        <h1 className="justify-center text-black text-center text-3xl leading-10 self-center max-w-[999px] mt-20 max-md:max-w-full max-md:mt-10">
          Let's help you customize your content!
        </h1>
        <div className="self-stretch flex items-stretch justify-between gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className="flex grow basis-[0%] flex-col items-stretch">
            <div className="flex items-stretch justify-between gap-5">
              <div className="text-zinc-600 text-center text-base font-semibold leading-4 whitespace-nowrap justify-center items-stretch bg-white aspect-[1.0344827586206897] px-2.5 py-2 rounded-lg border-2 border-solid border-zinc-600">
                1
              </div>
              <h2 className="justify-center text-black text-center text-2xl leading-8 self-center grow shrink basis-auto my-auto">
                Financial Information
              </h2>
            </div>
            <div className="flex flex-col mt-12 pl-12 max-md:mt-10 max-md:pl-5">
              <label htmlFor="employment-status" className="text-zinc-600 text-xs font-semibold leading-4 self-stretch whitespace-nowrap">
                Employment Status
              </label>
              <div className="items-stretch rounded border-[color:var(--Medium-gray,#B2B9C0)] bg-white self-stretch flex justify-between gap-4 mt-4 pl-4 pr-5 py-2 border-2 border-solid">
                <div className="text-zinc-600 text-base leading-6">Select</div>
                <Dropdown></Dropdown>
              </div>
              <label htmlFor="income" className="text-zinc-600 text-xs font-semibold leading-4 self-stretch whitespace-nowrap mt-12 max-md:mt-10">
                Income
              </label>
              <div className="items-stretch rounded border-[color:var(--Medium-gray,#B2B9C0)] bg-white self-stretch flex justify-between gap-4 mt-4 pl-4 pr-5 py-2 border-2 border-solid">
                <div className="text-zinc-600 text-base leading-6">Select</div>
                  <Dropdown></Dropdown>
              </div>
              <label htmlFor="relationship-status" className="text-zinc-600 text-xs font-semibold leading-4 self-stretch whitespace-nowrap mt-12 max-md:mt-10">
                Relationship Status
              </label>
              <div className="pt-12">
             <CircleButtonChoice onSelect={handleSelect} />
             </div>
            </div>
          </div>
          
          <div className="flex grow basis-[0%] flex-col items-stretch mt-2 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/87d715be-efa3-4cde-9b3b-8424e82c5235?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
              className="aspect-[2.69] object-contain object-center w-full items-start overflow-hidden max-md:max-w-full"
              alt="Compound Information"
            />
            <div className="justify-center text-black text-2xl leading-8 mt-16 max-md:max-w-full max-md:mt-10">
              How does Compound use this information?
            </div>
            <div className="justify-center text-black text-xl leading-6 mt-11 max-md:max-w-full max-md:mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
            </div>
          </div>
        </div>
        <div className="flex w-[422px] max-w-full items-stretch justify-between gap-5 mt-32 self-end max-md:flex-wrap max-md:mt-10">
          <a href="#" className="text-zinc-600 text-center text-base font-semibold leading-4 whitespace-nowrap justify-center items-center border-[color:var(--Dark-gray,#495057)] grow px-5 py-3 rounded-lg border-2 border-solid">
            Skip
          </a>
          <a href="#" className="text-white text-center text-base font-semibold leading-4 whitespace-nowrap justify-center items-center bg-zinc-600 grow px-5 py-3 rounded-lg">
            Save and Continue
          </a>
        </div>
      </section>
    </main>
  );
}

export default ProfileCustomization;