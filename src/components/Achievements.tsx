import * as React from "react";
import Sidebar from "./SideBar";

interface ModuleData {
  title: string;
  status: string;
  imageUrl: string;
}

interface CardData {
  title: string;
  imageUrl: string;
  message: string;
  status: string;
}

const modules: ModuleData[] = [
  {
    title: "Completed Module 1",
    status: "2/3",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0c183228-fa44-4dc8-b027-8462831d3a81?apiKey=af7b8d767d8745b3a433de5edc8cf82c&",
  },
  {
    title: "Completed Module 2",
    status: "1/3",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0c183228-fa44-4dc8-b027-8462831d3a81?apiKey=af7b8d767d8745b3a433de5edc8cf82c&",
  },
  {
    title: "Completed Module 3",
    status: "0/3",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0c183228-fa44-4dc8-b027-8462831d3a81?apiKey=af7b8d767d8745b3a433de5edc8cf82c&",
  },
  {
    title: "Completed Module 4",
    status: "3/3",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0c183228-fa44-4dc8-b027-8462831d3a81?apiKey=af7b8d767d8745b3a433de5edc8cf82c&",
  },
  {
    title: "Completed Module 5",
    status: "0/3",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0c183228-fa44-4dc8-b027-8462831d3a81?apiKey=af7b8d767d8745b3a433de5edc8cf82c&",
  },
  {
    title: "Completed Module 6",
    status: "0/3",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0c183228-fa44-4dc8-b027-8462831d3a81?apiKey=af7b8d767d8745b3a433de5edc8cf82c&",
  },
];

const cards: CardData[] = [
  {
    title: "Card Title 1",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9b1ec7d6-551e-4f09-acd6-a7b5f1b317a0?apiKey=af7b8d767d8745b3a433de5edc8cf82c&",
    message: "You completed your first lesson.",
    status: "Completed",
  },
  {
    title: "Card Title 1",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9b1ec7d6-551e-4f09-acd6-a7b5f1b317a0?apiKey=af7b8d767d8745b3a433de5edc8cf82c&",
    message: "You completed your first lesson.",
    status: "Completed",
  },
  {
    title: "Card Title 1",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9b1ec7d6-551e-4f09-acd6-a7b5f1b317a0?apiKey=af7b8d767d8745b3a433de5edc8cf82c&",
    message: "You completed your first lesson.",
    status: "Completed",
  },
  {
    title: "Card Title 1",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9b1ec7d6-551e-4f09-acd6-a7b5f1b317a0?apiKey=af7b8d767d8745b3a433de5edc8cf82c&",
    message: "You completed your first lesson.",
    status: "Completed",
  },
  {
    title: "Card Title 1",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9b1ec7d6-551e-4f09-acd6-a7b5f1b317a0?apiKey=af7b8d767d8745b3a433de5edc8cf82c&",
    message: "You completed your first lesson.",
    status: "Completed",
  },
];

const Module: React.FC<{ module: ModuleData }> = ({ module }) => {
  const widthMap = {
    "0/3": "w-0",
    "1/3": "w-1/3",
    "2/3": "w-2/3",
    "3/3": "w-full",
  };

  return (
    <div className="px-8 max-md:max-w-full mt-4 max-md:mt-10">
      <section className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <section className="flex flex-col items-stretch w-[28%] max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            src={module.imageUrl}
            className="aspect-[0.9] object-contain object-center w-[152px] overflow-hidden shrink-0 max-w-full grow"
          />
        </section>
        <section className="flex flex-col items-stretch w-[72%] ml-5 max-md:w-full max-md:ml-0">
          <div className="justify-center items-stretch self-stretch flex flex-col my-auto max-md:mt-5">
            <h3 className="text-black text-xl font-bold leading-7 whitespace-nowrap">
              {module.title}
            </h3>
            <p className="text-zinc-500 text-sm font-semibold leading-5 tracking-wide whitespace-nowrap mt-3">
              Status: Lesson {module.status}
            </p>
            <div className="bg-neutral-400 flex shrink-0 h-[35px] flex-col mt-4 rounded-3xl">
              <div
                className={
                  "bg-zinc-600 flex min-h-[35px] flex-col rounded-3xl " +
                  widthMap[module.status]
                }
                role="presentation"
                aria-label="Content"
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

const Card: React.FC<{ card: CardData }> = ({ card }) => {
  return (
    <div className="items-center border flex  flex-col px-4 rounded-md border-solid border-gray-200">
      <div className="text-black text-center text-xl font-bold leading-7 self-stretch">
        {card.title}
      </div>
      <img
        loading="lazy"
        src={card.imageUrl}
        className="aspect-square object-contain object-center w-20 overflow-hidden self-center max-w-full mt-4"
      />
      <div className="text-black text-center text-sm font-semibold leading-5 tracking-wide self-stretch mt-4">
        {card.message}
      </div>
      <div className="text-neutral-600 text-center text-xs font-medium leading-4 tracking-wide self-stretch mt-4 pb-2">
        Status: {card.status}
      </div>
    </div>
  );
};

const CardsList: React.FC = () => {
  return (
    <div className="max-h-[28rem] my-4 px-4 grid grid-cols-2 gap-4 overflow-y-scroll custom-scrollbar">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};
const CardBadges: React.FC = () => {
  return (
    <section className=" flex flex-col items-stretch w-[42%] ml-5 max-md:w-full max-md:ml-0">
      <div className="flex grow flex-col items-stretch w-full mx-auto pt-0.5 pb-5 rounded-3xl bg-zinc-100 border-[19px] border-solid border-zinc-100 max-md:max-w-full max-md:mt-10">
        <h2 className="text-black text-xl font-bold px-5 pt-4 pb-6 max-md:max-w-full max-md:pl-1">
          One Hit Wonders
        </h2>
        <div className="self-center flex bg-white max-h-auto max-w-full justify-between gap-5 rounded px-2">
          <CardsList />
        </div>
      </div>
    </section>
  );
};

const ModuleBadges: React.FC = () => {
  return (
    <section className="flex flex-col items-stretch w-[58%] max-md:w-full max-md:ml-0">
      <div className=" flex grow flex-col items-stretch w-full mx-auto pt-0.5 pb-5 rounded-3xl bg-zinc-100 border-[19px] border-solid border-zinc-100 max-md:max-w-full max-md:mt-10">
        <h2 className="text-black text-xl font-bold px-5 pt-4 pb-6 max-md:max-w-full max-md:pl-1">
          Module Badges
        </h2>

        <div className="bg-white flex px-2 max-md:max-w-full ">
          <ModulesList />
        </div>
      </div>
    </section>
  );
};

const ModulesList: React.FC = () => {
  return (
    <div className="max-h-[28rem] w-full my-4 overflow-y-scroll custom-scrollbar">
      {modules.map((module, index) => (
        <Module key={index} module={module} />
      ))}
    </div>
  );
};

export default function AchievementsComponent(props: any) {
  return (
    <main className="h-full">
      <section className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Sidebar />

        <section className="flex flex-col items-stretch w-[81%] ml-5 max-md:w-full max-md:ml-0">
          <header className="flex flex-col items-stretch mt-8 px-5 max-md:max-w-full max-md:mt-10">
            <h1 className="text-black text-4xl font-extrabold leading-[51px] w-[555px] max-w-full self-start">
              Achievements
            </h1>
            <p className="text-black text-base font-medium leading-6 mt-5 max-md:max-w-full">
              Some body text here blah blah blah, probably a one liner.
            </p>
            <div className="-mr-5 mt-12 pr-9 max-md:max-w-full max-md:mt-10 max-md:pr-5">
              <section className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <ModuleBadges />
                <CardBadges />
              </section>
            </div>
          </header>
        </section>
      </section>
    </main>
  );
}
