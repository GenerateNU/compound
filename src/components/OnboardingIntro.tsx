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

  const pushNamesToLocalStorage = () => {
    localStorage.setItem("displayName", displayName);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
  };
  return (
    <section className="self-center w-full max-w-[1274px] mt-16 mb-48 max-md:max-w-full max-md:my-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 justify-center">
        <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
            <h1 className="text-black text-center text-5xl max-md:text-4xl">
              Time to personalize!
            </h1>
            <p className="text-black text-xl  mt-14 max-md:max-w-full max-md:mt-10">
              Everyone's financial education journey is unique so let's
              personalize your experience.
            </p>
            <FormControl
              mt="16"
              maxW="60%"
              maxH="50%"
              className="self-center justify-center"
            >
              <FormLabel>First Name</FormLabel>
              <Input
                placeholder="What is your first name?"
                borderRadius="md"
                bg="#EEF0F2"
                onChange={(e) => setFirstName(e.target.value)}
              ></Input>
              <FormLabel mt="5">Last Name</FormLabel>
              <Input
                placeholder="What is your last name?"
                borderRadius="md"
                bg="#EEF0F2"
                onChange={(e) => setLastName(e.target.value)}
              ></Input>
            </FormControl>
            <div className="mt-10 flex justify-center space-x-10">
              {[1, 2, 3, 4, 5].map((index) => (
                <Avatar
                  key={index}
                  setAvatarIndex={() => setAvatar(index)}
                  selected={avatar === index}
                  index={index}
                ></Avatar>
              ))}
            </div>
            <div className="flex w-[568px] max-w-full items-center justify-center gap-5 mt-20 max-md:flex-wrap max-md:mt-10">
              <div className="justify-center items-center bg-zinc-600 self-stretch flex w-[339px] max-w-full flex-col grow shrink-0 basis-auto px-5 py-6 rounded-lg">
                <div className="text-white text-center text-2xl font-semibold leading-[100%] self-center">
                  <a
                    href="profileUnfilled"
                    aria-label="Let’s Get Started!"
                    onClick={() => pushNamesToLocalStorage()}
                  >
                    Let’s Get Started!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
