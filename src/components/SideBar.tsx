import { useState } from "react";
import logo from "../assets/logo.png";
import Image from "next/image";

import React from "react";

interface ProfileProps {
  username: string;
  imageUrl: string;
}

const Profile: React.FC<ProfileProps> = ({ username, imageUrl }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <img src={imageUrl} alt="Profile" className="w-12 h-12 rounded-full" />
        <span className="ml-2 text-lg font-bold">{username}</span>
      </div>
      <button className="focus:outline-none">
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
            d="M12 6v0m0 6v0m0 6v0"
          />
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
        className={`text-md font-semibold leading-5 tracking-wide grow whitespace-nowrap self-start ${
          isActive ? "text-white" : "text-blue-500"
        }`}
      >
        {name}
      </span>
    </a>
  );
};

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState("Dashboard");

  const menuItems = [
    {
      name: "Dashboard",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/323e6bd4-41f9-441a-a6ec-2f261eaa7530?apiKey=af7b8d767d8745b3a433de5edc8cf82c&",
      alt: "Dashboard",
      href: "/postDashboard",
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
      name: "Profile",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dbb19464-dd76-437e-97e8-bf4a62e2851a?apiKey=af7b8d767d8745b3a433de5edc8cf82c&",
      alt: "Profile",
      href: "/profile",
    },
    {
      name: "More",
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/899f0a1f-0364-4caf-b4eb-a94632a014cd?apiKey=af7b8d767d8745b3a433de5edc8cf82c&",
      alt: "More",
      href: "/more",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-stretch w-[19%] max-md:w-full max-md:ml-0">
      <header className="bg- flex w-full grow flex-col mx-auto pl-10 pr-16 py-11 max-md:mt-7 max-md:px-5">
        <div className="justify-center items-stretch flex w-[200px] max-w-full gap-3.5 max-md:ml-2.5 pb-5">
          <a href="/" className="flex">
            <Image src={logo} alt={"temp"}></Image>
          </a>
        </div>
        <div
          style={{
            border: "1px solid #FFF",
            borderRadius: "10px",
            marginTop: "50px",
          }}
          className="bg-zinc-100"
        >
          {menuItems.map((item) => (
            <NavigationButton
              key={item.name}
              name={item.name}
              imageSrc={item.imageSrc}
              alt={item.alt}
              isActive={activeButton === item.name}
              onClick={setActiveButton}
              href={item.href}
            />
          ))}
        </div>
        <div className="mt-auto">
          <Profile
            username="John Smith"
            imageUrl="https://api.dicebear.com/7.x/adventurer/svg?seed=Mittens"
          ></Profile>
        </div>
      </header>
    </section>
  );
};

export default Sidebar;
