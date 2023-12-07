import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import avatar1 from "../assets/avatars/avatar1.png";
import avatar2 from "../assets/avatars/avatar2.png";
import avatar3 from "../assets/avatars/avatar3.png";
import avatar4 from "../assets/avatars/avatar4.png";
import avatar5 from "../assets/avatars/avatar5.png";

import avatar1S from "../assets/avatars/selected/avatar1.png";
import avatar2S from "../assets/avatars/selected/avatar2.png";
import avatar3S from "../assets/avatars/selected/avatar3.png";
import avatar4S from "../assets/avatars/selected/avatar4.png";
import avatar5S from "../assets/avatars/selected/avatar5.png";
import { useRouter } from "next/router";

function FinancialInterestSelector(props: {
  selected: boolean;
  name: string;
  color: string;
  onClick: any;
}) {
  if (props.selected) {
    return (
      <button
        className="items-stretch border-[color:var(--Blue-Bold,#0057DA)] bg-gray-100 flex justify-between gap-3.5 pl-4 pr-16 py-3 rounded-lg border-[3px] border-solid max-md:pr-5 w-64"
        onClick={props.onClick}
      >
        <div
          style={{ backgroundColor: props.color }}
          className="justify-center items-center bg-red-400 flex w-10 shrink-0 h-10 flex-col rounded-[47px]"
        />
        <div className="text-blue-950 text-base font-bold leading-6 tracking-wide self-center grow whitespace-nowrap my-auto text-center">
          {props.name}
        </div>
      </button>
    );
  } else {
    return (
      <button
        className="items-stretch bg-gray-100 flex justify-between gap-3.5 pl-4 pr-16 py-3 rounded-lg max-md:pr-5 w-64"
        onClick={props.onClick}
      >
        <div
          style={{ backgroundColor: props.color }}
          className="justify-center items-center flex w-10 shrink-0 h-10 flex-col rounded-[47px]"
        />
        <div className="text-blue-950 text-base font-bold leading-6 tracking-wide self-center grow whitespace-nowrap my-auto">
          {props.name}
        </div>
      </button>
    );
  }
}

function Avatar(props: {
  selected: boolean;
  index: number;
  setAvatarIndex: any;
}) {
  let avatar;
  switch (props.index) {
    case 1:
      if (props.selected) {
        avatar = (
          <Image
            src={avatar1S}
            alt={""}
            className="rounded-full shadow-2xl"
            width={120}
            height={120}
          ></Image>
        );
      } else {
        avatar = (
          <Image
            src={avatar1}
            alt={""}
            className="rounded-full shadow-2xl"
            width={100}
            height={100}
          ></Image>
        );
      }
      break;
    case 2:
      if (props.selected) {
        avatar = (
          <Image
            src={avatar2S}
            alt={""}
            className="rounded-full shadow-2xl"
            width={120}
            height={120}
          ></Image>
        );
      } else {
        avatar = (
          <Image
            src={avatar2}
            alt={""}
            className="rounded-full shadow-2xl"
            width={100}
            height={100}
          ></Image>
        );
      }
      break;
    case 3:
      if (props.selected) {
        avatar = (
          <Image
            src={avatar3S}
            alt={""}
            className="rounded-full shadow-2xl"
            width={120}
            height={120}
          ></Image>
        );
      } else {
        avatar = (
          <Image
            src={avatar3}
            alt={""}
            className="rounded-full shadow-2xl"
            width={100}
            height={100}
          ></Image>
        );
      }
      break;
    case 4:
      if (props.selected) {
        avatar = (
          <Image
            src={avatar4S}
            alt={""}
            className="rounded-full shadow-2xl"
            width={120}
            height={120}
          ></Image>
        );
      } else {
        avatar = (
          <Image
            src={avatar4}
            alt={""}
            className="rounded-full shadow-2xl"
            width={100}
            height={100}
          ></Image>
        );
      }
      break;
    case 5:
      if (props.selected) {
        avatar = (
          <Image
            src={avatar5S}
            alt={""}
            className="rounded-full shadow-2xl"
            width={120}
            height={120}
          ></Image>
        );
      } else {
        avatar = (
          <Image
            src={avatar5}
            alt={""}
            className="rounded-full shadow-2xl"
            width={100}
            height={100}
          ></Image>
        );
      }
      break;
    default:
      avatar = (
        <Image
          src={avatar1}
          alt={""}
          className="rounded-full shadow-2xl"
          width={100}
          height={100}
        ></Image>
      );
  }

  return (
    <button onClick={() => props.setAvatarIndex(props.index)}>{avatar}</button>
  );
}

export function OnboardingIntro() {
  const [displayName, setDisplayName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [avatar, setAvatar] = useState(1);

  const [interest1, setInterest1] = useState(false);
  const [interest2, setInterest2] = useState(false);
  const [interest3, setInterest3] = useState(false);
  const [interest4, setInterest4] = useState(false);
  const [interest5, setInterest5] = useState(false);
  const [interest6, setInterest6] = useState(false);

  const interests = [
    "Real estate",
    "Loans",
    "Saving",
    "Spending",
    "Budgeting",
    "Retirement",
    "Credit",
  ];

  const router = useRouter();

  const pushNamesToLocalStorage = () => {
    localStorage.setItem("displayName", displayName);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
  };

  async function handlePersonalization() {
    const email = localStorage.getItem("email");
    const interestsArray: string[] = [];

    if (interest1) {
      interestsArray.push(interests[0]);
    }

    if (interest2) {
      interestsArray.push(interests[1]);
    }

    if (interest3) {
      interestsArray.push(interests[2]);
    }

    if (interest4) {
      interestsArray.push(interests[3]);
    }

    if (interest5) {
      interestsArray.push(interests[4]);
    }

    if (interest6) {
      interestsArray.push(interests[5]);
    }

    const body = {
      email: email,
      financialInterests: interestsArray,
      firstName: firstName ?? "Blah",
      lastName: lastName ?? "Blah",
      avatar: avatar ?? 1,
    };

    console.log(body);

    const res = await fetch("/api/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    router.push("/dashboard");
  }

  return (
    <section className="self-center w-full max-w-[1274px] mt-5 max-md:max-w-full max-md:my-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 justify-center">
        <div className="flex flex-col items-stretch w-[70%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
            <h1 className="font-bold text-black text-center text-5xl max-md:text-4xl">
              Time to personalize!
            </h1>
            <h2 className="text-black text-xl mt-4 max-md:max-w-full max-md:mt-10 text-center mb-10">
              Everyone's financial education journey is unique so let's
              personalize your experience.
            </h2>
            <div className="flex space-x-4 mx-auto gap-30 mt-10">
              <div>
                <h1>First Name</h1>
                <Input
                  placeholder="What is your first name?"
                  borderRadius="md"
                  bg="#EEF0F2"
                  onChange={(e) => setFirstName(e.target.value)}
                  w="250px"
                ></Input>
              </div>
              <div>
                <h1>Last Name</h1>
                <Input
                  placeholder="What is your last name?"
                  borderRadius="md"
                  bg="#EEF0F2"
                  onChange={(e) => setLastName(e.target.value)}
                  w="250px"
                ></Input>
              </div>
            </div>
            <div className="mt-10 text-center">Select your avatar.</div>
            <div className="mt-5 flex justify-center space-x-10">
              {[1, 2, 3, 4, 5].map((index) => (
                <Avatar
                  key={index}
                  setAvatarIndex={() => setAvatar(index)}
                  selected={avatar === index}
                  index={index}
                ></Avatar>
              ))}
            </div>
            <div className="mt-10 text-center">Select your interests.</div>
            <div className="mt-5 flex justify-center space-x-2">
              <FinancialInterestSelector
                selected={interest1}
                name={interests[0]}
                color={"#F9A8BA"}
                onClick={() => setInterest1(!interest1)}
              />
              <FinancialInterestSelector
                selected={interest2}
                name={interests[1]}
                color={"#FF0000"}
                onClick={() => setInterest2(!interest2)}
              />
              <FinancialInterestSelector
                selected={interest3}
                name={interests[2]}
                color={"#800080"}
                onClick={() => setInterest3(!interest3)}
              />
            </div>
            <div className="mt-10 flex justify-center space-x-2">
              <FinancialInterestSelector
                selected={interest4}
                name={interests[4]}
                color={"#008000"}
                onClick={() => setInterest4(!interest4)}
              />
              <FinancialInterestSelector
                selected={interest5}
                name={interests[5]}
                color={"#FFA500"}
                onClick={() => setInterest5(!interest5)}
              />
              <FinancialInterestSelector
                selected={interest6}
                name={interests[6]}
                color={"#008080"}
                onClick={() => setInterest6(!interest6)}
              />
            </div>
            <div className="flex w-full justify-center items-center">
              <div className="flex w-[400px] max-w-full items-center justify-center gap-5 mt-20 max-md:flex-wrap max-md:mt-10">
                <button
                  onClick={() => {
                    handlePersonalization();
                  }}
                  className="justify-center items-center bg-blue-600 self-stretch flex w-[339px] max-w-full flex-col grow shrink-0 basis-auto px-5 py-6 rounded-lg"
                >
                  <div className="text-white text-center text-2xl font-semibold leading-[100%] self-center">
                    <a
                      aria-label="Let’s Get Started!"
                      onClick={() => pushNamesToLocalStorage()}
                    >
                      Lets Get Started!
                    </a>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
