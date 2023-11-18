import { useState } from "react";

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
        isActive ? "bg-zinc-300" : ""
      }`}
    >
      <img loading="lazy" src={imageSrc} alt={alt} className="w-6" />
      <span className="text-black text-sm font-semibold leading-5 tracking-wide grow whitespace-nowrap self-start">
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
    <section className="flex flex-col items-stretch w-[19%] max-md:w-full max-md:ml-0">
      <header className="bg-zinc-100 flex w-full grow flex-col mx-auto pl-10 pr-16 py-11 max-md:mt-7 max-md:px-5">
        <div className="justify-center items-stretch flex w-[161px] max-w-full gap-3.5 ml-3 max-md:ml-2.5 pb-5">
          <a href="/" className="flex">
            <div className="bg-stone-300 flex w-[51px] shrink-0 h-[53px] flex-col rounded-[67px]" />
          </a>
          <a href="/" className="flex">
            <h1 className="text-black text-lg font-extrabold leading-6 tracking-tight self-center grow whitespace-nowrap my-auto">
              Compound
            </h1>
          </a>
        </div>
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
      </header>
    </section>
  );
};

export default Sidebar;
