import * as React from "react";
import { useEffect, useState } from "react";
import Sidebar from "./SideBar";
import Utils from "../utils";
import styled, { keyframes } from "styled-components";
import ModuleRecommendations from "./ModuleReccomendations";
import ModuleProgressIcon from "./ModuleProgressIcon";
import Bruh from "./BlahbittyBlah";
import Achievment from "./Achievment";

// Card.jsx - Base card component
const Card = ({ title, children }: any) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 m-2 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-gray-800 text-lg font-semibold mb-4">{title}</h2>
        {children}
      </div>
      <a
        href="#"
        className="text-zinc-600 text-center text-base font-medium leading-6 justify-center bg-white mt-4 px-5 py-2.5 rounded-lg border-2 border-solid border-zinc-600 self-center"
      >
        Start now
      </a>
    </div>
  );
};

const ProgressBar = ({ xp }: any) => {
  return (
    <div className="items-stretch self-stretch flex flex-col pt-1">
      <section
        style={{ backgroundColor: "var(--color-light-red)" }}
        className="bg-neutral-400 flex w-full flex-col items-stretch rounded-3xl"
      >
        <div
          style={{ backgroundColor: "var(--color-red)", width: `${xp % 100}%` }}
          className="flex min-h-[35px] flex-col rounded-3xl"
          role="presentation"
          aria-label="Content"
        />
      </section>
    </div>
  );
};

const ProgressMessage = ({ xp }: any) => {
  return (
    <div className="text- text-sm font-semibold leading-5 tracking-wide self-center grow whitespace-nowrap my-auto">
      {100 - (xp % 100)} xp to next level
    </div>
  );
};

const TotalXP = ({ xp }: any) => {
  return (
    <div
      style={{ backgroundColor: "var(--color-red)" }}
      className="items-stretch content-center flex-wrap bg-zinc-300 self-stretch flex basis-[0%] flex-col p-2 rounded-2xl min-w-fit"
    >
      <div className="justify-between items-stretch flex gap-2 shrink-0">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d524a991-3ace-4f4c-98ab-ec2e6f8d1f7f?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
          className="aspect-square object-contain object-center w-5 fill-zinc-600 overflow-hidden shrink-0 max-w-full"
          alt="XP Icon"
        />
        <div className="text-white text-sm font-semibold leading-5 tracking-wide grow whitespace-nowrap flex-shrink">
          {" "}
          {xp} XP
        </div>
      </div>
    </div>
  );
};

const OtherToolsCard = ({ title, description, buttonName }: any) => {
  return (
    <div
      className="relative flex flex-col items-stretch w-fullmax-md:w-full max-md:ml-0"
      style={{ width: "300px" }}
    >
      <div
        className="w-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-10 rounded-t-xl"
        style={{ backgroundColor: "var(--color-mint)" }}
      />
      <div className="items-stretch self-stretch bg-white flex grow flex-col w-full mx-auto px-7 py-6 rounded-2xl max-md:mt-6 max-md:px-5">
        <h2 className="mt-5 text-black text-xl font-bold leading-7 whitespace-nowrap">
          {title}
        </h2>
        <p className="text-zinc-900 text-base font-medium leading-6 mt-6">
          {description}
        </p>
        <div className="h-10"></div>
        <div className="h-10"></div>
        <button
          onClick={() => alert("Coming soon!")}
          className="mt-auto text-zinc-600 text-center text-base font-medium leading-6 whitespace-nowrap justify-center items-stretch bg-white mt-7 px-5 py-2.5 rounded-lg border-2 border-solid border-zinc-600 max-md:pr-px"
        >
          {buttonName}
        </button>
      </div>
    </div>
  );
};

// SmartSavingCard.jsx
const SmartSavingCard = () => {
  return (
    <Card title="Smart Saving">
      <div className="flex items-center mt-2">
        <span className="text-gray-500 text-sm">Experience</span>
        <div className="flex items-center ml-2">
          <div className="bg-gray-300 rounded-full h-2 w-2 mr-1"></div>
          <div className="bg-gray-300 rounded-full h-2 w-2 mr-1"></div>
          <div className="bg-gray-300 rounded-full h-2 w-2 mr-1"></div>
          <div className="bg-gray-500 rounded-full h-2 w-2"></div>
        </div>
      </div>
    </Card>
  );
};

// SpendingCard.jsx
const SpendingCard = () => {
  return (
    <Card title="Spending">
      <div className="flex items-center mt-2">
        <span className="text-gray-500 text-sm">Experience</span>
        <div className="flex items-center ml-2">
          <div className="bg-gray-300 rounded-full h-2 w-2 mr-1"></div>
          <div className="bg-gray-500 rounded-full h-2 w-2 mr-1"></div>
          <div className="bg-gray-300 rounded-full h-2 w-2 mr-1"></div>
          <div className="bg-gray-300 rounded-full h-2 w-2"></div>
        </div>
      </div>
    </Card>
  );
};

const Welcome = (props: { firstName: string }) => {
  return (
    <div className="mt-10 bg-white border border-white rounded-xl text-blue-500 p-4">
      <h1 className="text-2xl font-bold text-blue-600">
        Good morning, {props.firstName ?? ""}!
      </h1>
      <h2 className="text-lg mt-2">
        Begin your week preparing for your financial future.
      </h2>
    </div>
  );
};

const Progress = (props: { xp: number }) => {
  return (
    <div className="items-stretch self-stretch bg-white flex flex-col mt-8 pt-5 pb-6 px-8 rounded-2xl max-md:max-w-full max-md:px-5">
      <h1 className="mb-5 font-bold text-black text-2xl">Progress</h1>
      <div className="justify-between items-center content-center gap-y-4 flex-wrap flex w-full gap-5">
        <div className="items-stretch flex justify-between gap-5 my-auto">
          <div className="items-stretch flex justify-between gap-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/16993279-b005-418e-836d-384db9c4a73a?apiKey=af7b8d767d8745b3a433de5edc8cf82c&"
              className="aspect-[1.07] object-contain object-center w-[30px] fill-black overflow-hidden shrink-0 max-w-full"
              alt="Level Icon"
            />
            <div className="text-blue-500 text-xl font-bold leading-7 grow whitespace-nowrap">
              Level {Math.floor(props.xp / 100) + 1}
            </div>
          </div>
          <ProgressMessage xp={props.xp} />
        </div>
        <TotalXP xp={props.xp} />
      </div>
      <ProgressBar xp={props.xp} />
      <div className="justify-between items-stretch content-center gap-y-2 flex-wrap flex gap-5 mt-12 max-md:mt-10">
        <h2 className="text-black text-xl font-bold leading-7">Achievements</h2>
        <a
          href="/achievements"
          className="text-zinc-500 text-right text-sm font-semibold leading-5 tracking-wide self-center whitespace-nowrap my-auto"
        >
          View all
        </a>
      </div>
      <div className="justify-between items-stretch content-start flex-wrap flex gap-5 mt-6 p-4 max-md:justify-center">
        {props.xp >= 0 && <Achievment name="Ready to go!" />}
        {props.xp >= 100 && <Achievment name="Baby steps" />}
        {props.xp >= 200 && <Achievment name="Persistence" />}
        {props.xp >= 300 && <Achievment name="Financial guru" />}
      </div>
    </div>
  );
};

export default function UpdatedComponent(props: any) {
  const [xp, setXp] = useState(0);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [lastHovered, setLastHovered] = useState(2);

  const [rec1, setRec1] = useState("Creating a budget");
  const [rec2, setRec2] = useState("Credit 101");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [avatarIndex, setAvatarIndex] = useState(0);

  const handleMouseEnter = (hoverNumber: number) => {
    setLastHovered(hoverNumber);
    if (hoverNumber === 1) setHover1(true);
    else if (hoverNumber === 2) setHover2(true);
    else if (hoverNumber === 3) setHover3(true);
  };

  const handleMouseLeave = (hoverNumber: number) => {
    if (hoverNumber === 1) setHover1(false);
    else if (hoverNumber === 2) setHover2(false);
    else if (hoverNumber === 3) setHover3(false);
  };

  const [module1Progress, setModule1Progress] = useState(0);
  const [module2Progress, setModule2Progress] = useState(0);
  const [module3Progress, setModule3Progress] = useState(0);

  const module1Lessons = [
    "Understanding Credit Scores",
    "Building and Improving Credit",
    "Dealing with Credit Card Debt",
    "Module Exam",
    "",
  ];
  const module2Lessons = [
    "Creating a Personal Budget",
    "Effective Expense Tracking",
    "Adapting Budgets for Life Changes",
    "Module Exam",
    "",
  ];
  const module3Lessons = [
    "Types of Investments",
    "How to Think About Risk",
    "Long term vs. Short term Investing",
    "Module Exam",
    "",
  ];

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(
        `/api/users?email=${encodeURIComponent(
          localStorage.getItem("email") ?? ""
        )}`,
        {}
      );

      if (res.ok) {
        const data = await res.json();

        // set xp based on module progress
        setXp(
          data.module1Progress + data.module2Progress + data.module3Progress
        );

        if (data.financialInterests.length > 1) {
          const randomIndex1 = Math.floor(
            Math.random() * data.financialInterests.length
          );
          let randomIndex2;
          do {
            randomIndex2 = Math.floor(
              Math.random() * data.financialInterests.length
            );
          } while (randomIndex2 === randomIndex1);

          setRec1(data.financialInterests[randomIndex1]);
          setRec2(data.financialInterests[randomIndex2]);
        }

        setFirstName(data.firstName);
        setLastName(data.lastName);

        setAvatarIndex(data.avatar);

        setModule1Progress(data.module1Progress);
        setModule2Progress(data.module2Progress);
        setModule3Progress(data.module3Progress);
      } else {
        console.log("error updating user");
      }
    };
    fetchUser();
  }, []);

  async function moveToNextLesson(moduleNumber: number) {
    const body = {
      email: localStorage.getItem("email"),
      module1Progress: module1Progress + (moduleNumber === 1 ? 25 : 0),
      module2Progress: module2Progress + (moduleNumber === 2 ? 25 : 0),
      module3Progress: module3Progress + (moduleNumber === 3 ? 25 : 0),
    };

    const res = await fetch("/api/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const temp = await res.json();

    setModule1Progress(temp.module1Progress);
    setModule2Progress(temp.module2Progress);
    setModule3Progress(temp.module3Progress);

    alert("simulating learning...");

    window.location.reload();
  }

  return (
    <main className="bg-white">
      <section className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <Sidebar name={firstName + " " + lastName} avatarIndex={avatarIndex} />
        <section className="bg-zinc-100 flex flex-col px-6 rounded-3xl max-md:px-5 pl-10">
          <Welcome firstName={firstName}></Welcome>
          <Progress xp={xp} />

          <div className="self-stretch mt-10 mb-6 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <OtherToolsCard
                title="Financial Tools"
                description="Access financial calculators to practice topics such as budgeting."
                buttonName="Try now"
              />
              <OtherToolsCard
                title="Mentor Market"
                description="Match with a financial assistant to further your future goals."
                buttonName="Find a mentor"
              />
            </div>
          </div>
        </section>
        <section className="bg-zinc-100 flex flex-col px-10 rounded-3xl w-full">
          <div className="mt-10 rounded-xl text-blue-500 p-4">
            <div style={{ height: "100px" }} />
          </div>
          <div className="items-stretch bg-white flex flex-col px-6 py-4 rounded-lg max-md:px-5">
            <div className="justify-between items-stretch content-center gap-y-2 flex-wrap flex gap-5 mt-2 pl-3">
              <h1 className="mb-5 font-bold text-black text-2xl">
                Learning Station
              </h1>
              <a
                href="/curriculum"
                className="text-zinc-500 text-right text-sm font-semibold leading-5 tracking-wide self-center whitespace-nowrap my-auto"
              >
                View full curriculum
              </a>
            </div>
            <div
              className=""
              style={{ display: "flex", justifyContent: "center" }}
            >
              {lastHovered === 1 ? (
                <Bruh
                  moduleName="Module 1: Credit"
                  moduleDescription="All about borrowing."
                  offsetHorizontal={-150}
                  offsetVertical={0}
                  arrow="left"
                  nextLesson={module1Lessons[module1Progress / 25]}
                  handleProgress={() => {
                    moveToNextLesson(1);
                  }}
                />
              ) : lastHovered === 2 ? (
                <Bruh
                  moduleName="Module 2: Budgeting"
                  moduleDescription="All about managing expenses."
                  offsetHorizontal={0}
                  offsetVertical={0}
                  arrow="middle"
                  nextLesson={module2Lessons[module2Progress / 25]}
                  handleProgress={() => {
                    moveToNextLesson(2);
                  }}
                />
              ) : lastHovered === 3 ? (
                <Bruh
                  moduleName="Module 3: Investing"
                  moduleDescription="All about growing your money."
                  offsetHorizontal={150}
                  offsetVertical={-50}
                  arrow="right"
                  nextLesson={module3Lessons[module3Progress / 25]}
                  handleProgress={() => {
                    moveToNextLesson(3);
                  }}
                />
              ) : (
                <div style={{ height: "245px" }} />
              )}
            </div>
            <div className="relative flex justify-between">
              <svg
                className="absolute top-5 left-20 w-45 h-full z-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,50 C50,10 150,90 200,50"
                  stroke="blue"
                  fill="transparent"
                  strokeWidth="5"
                />
              </svg>
              <svg
                style={{ left: "342px", transform: "rotate(-5deg)" }}
                className="absolute top-5 w-45 h-full z-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,50 C50,10 150,90 200,50"
                  stroke="blue"
                  fill="transparent"
                  strokeWidth="5"
                />
              </svg>
              <div
                className="translate-y-[20px]"
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={() => handleMouseLeave(1)}
              >
                <ModuleProgressIcon percentage={module1Progress} />
              </div>
              <div
                className="translate-y-[0px]"
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={() => handleMouseLeave(2)}
              >
                <ModuleProgressIcon percentage={module2Progress} />
              </div>
              <div
                className="translate-y-[-50px]"
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={() => handleMouseLeave(3)}
              >
                <ModuleProgressIcon percentage={module3Progress} />
              </div>
            </div>
            <div style={{ height: "20px" }} />
          </div>
          <ModuleRecommendations rec1={rec1} rec2={rec2} />
        </section>
      </section>
    </main>
  );
}
