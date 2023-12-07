import { useState } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";

import React from "react";
import { useRouter } from "next/router";
import avatar1 from "../assets/avatars/avatar1.png";
import avatar2 from "../assets/avatars/avatar2.png";
import avatar3 from "../assets/avatars/avatar3.png";
import avatar4 from "../assets/avatars/avatar4.png";
import avatar5 from "../assets/avatars/avatar5.png";

const Profile: any = (props: { username: string; src: string }) => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Image height="50" width="50" src={props.src} alt={""}></Image>
        <span className="ml-2 text-lg font-bold">{props.username}</span>
      </div>
      <button
        className="focus:outline-none"
        onClick={() => {
          localStorage.setItem("email", "");
          router.push("/");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          ></path>
        </svg>
      </button>
    </div>
  );
};

const NavigationButton = ({
  name,
  imageSrc,
  alt,
  isActive,
  onClick,
  href,
}: any) => {
  return (
    <a
      href={href}
      onClick={() => onClick(name)}
      className={`flex items-center justify-between gap-3 p-3 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg mb-4 ${
        isActive ? "bg-blue-500" : ""
      }`}
    >
      <img loading="lazy" src={imageSrc} alt={alt} className="w-6" />
      <span
        className={`text-lg font-semibold leading-5 tracking-wide grow whitespace-nowrap self-start ${
          isActive ? "text-white" : "text-blue-500"
        }`}
      >
        {name}
      </span>
    </a>
  );
};

const Sidebar = (props: { name: string; avatarIndex: number }) => {
  const [activeButton, setActiveButton] = useState("Dashboard");

  const avatarUrls = [avatar1, avatar2, avatar3, avatar4, avatar5];

  const menuItems = [
    {
      name: "Dashboard",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/323e6bd4-41f9-441a-a6ec-2f261eaa7530?apiKey=af7b8d767d8745b3a433de5edc8cf82c&",
      alt: "Dashboard",
      href: "/dashboard",
    },
    {
      name: "Curriculum",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/50304736-f900-45c0-8ec4-b8688c0f6fa3?apiKey=af7b8d767d8745b3a433de5edc8cf82c&",
      alt: "Curriculum",
      href: "/curriculum",
    },
    {
      name: "Achievements",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/15a23448-9344-4525-8775-7abc98b97fa6?apiKey=af7b8d767d8745b3a433de5edc8cf82c&",
      alt: "Achievements",
      href: "achievements",
    },
    {
      name: "Settings",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/899f0a1f-0364-4caf-b4eb-a94632a014cd?apiKey=af7b8d767d8745b3a433de5edc8cf82c&",
      alt: "More",
      href: "/postDashboard",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-stretch w-[19%] max-md:w-full max-md:ml-0">
      <header className="bg- flex w-full grow flex-col mx-auto pl-10 pr-8 py-11 max-md:mt-7 max-md:px-5">
        <div className="justify-start items-stretch flex w-[300px] max-w-full gap-3.5 max-md:ml-2.5 pb-5">
          <a href="/" className="flex">
            <Image src={logo} alt={"temp"} width={200}></Image>
          </a>
        </div>
        <div
          style={{
            border: "1px solid #FFF",
            borderRadius: "10px",
            marginTop: "50px",
          }}
          className="pl-2 bg-zinc-100"
        >
          {menuItems.map((item) => (
            <NavigationButton
              key={item.name}
              name={item.name}
              imageSrc={item.imageSrc}
              alt={item.alt}
              isActive={activeButton === item.name}
              onClick={() => {
                !(item.name === "Dashboard")
                  ? alert("Coming soon!")
                  : setActiveButton(item.name);
              }}
            />
          ))}
        </div>
        <div className="mt-auto">
          <Profile
            username={props.name ?? ""}
            src={avatarUrls[props.avatarIndex]}
          ></Profile>
        </div>
      </header>
    </section>
  );
};

export default Sidebar;
