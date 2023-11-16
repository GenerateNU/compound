import React, { useState } from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import graycircle from "./circle_gray.png";
import Image from "next/image";

const WheelControls: KeenSliderPlugin = (slider) => {
  let touchTimeout: ReturnType<typeof setTimeout>;
  let position: {
    x: number;
    y: number;
  };
  let wheelActive: boolean;

  function dispatch(e: WheelEvent, name: string) {
    position.x -= e.deltaX;
    position.y -= e.deltaY;
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      })
    );
  }

  function wheelStart(e: WheelEvent) {
    position = {
      x: e.pageX,
      y: e.pageY,
    };
    dispatch(e, "ksDragStart");
  }

  function wheel(e: WheelEvent) {
    dispatch(e, "ksDrag");
  }

  function wheelEnd(e: WheelEvent) {
    dispatch(e, "ksDragEnd");
  }

  function eventWheel(e: WheelEvent) {
    e.preventDefault();
    if (!wheelActive) {
      wheelStart(e);
      wheelActive = true;
    }
    wheel(e);
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
      wheelActive = false;
      wheelEnd(e);
    }, 50);
  }

  slider.on("created", () => {
    slider.container.addEventListener("wheel", eventWheel, {
      passive: false,
    });
  });
};

function Wheel() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: false,
      rubberband: false,
      vertical: false,
      slides: {
        origin: "center",
        perView: 2,
        spacing: 15,
      },
    },
    [WheelControls]
  );

  return (
    <div ref={sliderRef} className="keen-slider" style={{ height: 200 }}>
      <div className="keen-slider__slide number-slide1">
        <div className="flex flex-col items-stretch w-4/5 max-md:w-full max-md:ml-0">
          <div className="shadow-sm bg-white flex grow flex-col w-full mx-auto pl-11 pr-14 pt-4 pb-14 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="flex w-[203px] max-w-full items-stretch justify-between gap-5"></div>
            <Image
              src={graycircle}
              alt="graycircle"
              width={100}
              height={100}
              className="absolute top-0 left-0"
            />
            <div className="text-black text-xl font-semibold leading-8 w-[564px] max-w-full mt-2 self-end pl-24">
              "Super easy and clear! I can not recommend it enough Super easy
              and clear! I can not recommend it enough."
            </div>
            <p className="text-black text-xl font-semibold leading-8 w-[564px] text-right pr-32">
              -Aisha
            </p>
          </div>
        </div>
      </div>
      <div className="keen-slider__slide number-slide2">
        <div className="flex flex-col items-stretch w-4/5 max-md:w-full max-md:ml-0">
          <div className="shadow-sm bg-white flex grow flex-col w-full mx-auto pl-11 pr-14 pt-4 pb-14 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="flex w-[203px] max-w-full items-stretch justify-between gap-5"></div>
            <Image
              src={graycircle}
              alt="graycircle"
              width={100}
              height={100}
              className="absolute top-0 left-0"
            />
            <div className="text-black text-xl font-semibold leading-8 w-[564px] max-w-full mt-2 self-end pl-24">
              "Super easy and clear! I can not recommend it enough Super easy
              and clear! I can not recommend it enough."
            </div>
            <p className="text-black text-xl font-semibold leading-8 w-[564px] text-right pr-32">
              -Aisha
            </p>
          </div>
        </div>
      </div>
      <div className="keen-slider__slide number-slide3">
        <div className="flex flex-col items-stretch w-4/5 max-md:w-full max-md:ml-0">
          <div className="shadow-sm bg-white flex grow flex-col w-full mx-auto pl-11 pr-14 pt-4 pb-14 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="flex w-[203px] max-w-full items-stretch justify-between gap-5"></div>
            <Image
              src={graycircle}
              alt="graycircle"
              width={100}
              height={100}
              className="absolute top-0 left-0"
            />
            <div className="text-black text-xl font-semibold leading-8 w-[564px] max-w-full mt-2 self-end pl-24">
              "Super easy and clear! I can not recommend it enough Super easy
              and clear! I can not recommend it enough."
            </div>
            <p className="text-black text-xl font-semibold leading-8 w-[564px] text-right pr-32">
              -Aisha
            </p>
          </div>
        </div>
      </div>
      <div className="keen-slider__slide number-slide4">
        <div className="flex flex-col items-stretch w-4/5 max-md:w-full max-md:ml-0">
          <div className="shadow-sm bg-white flex grow flex-col w-full mx-auto pl-11 pr-14 pt-4 pb-14 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="flex w-[203px] max-w-full items-stretch justify-between gap-5"></div>
            <Image
              src={graycircle}
              alt="graycircle"
              width={100}
              height={100}
              className="absolute top-0 left-0"
            />
            <div className="text-black text-xl font-semibold leading-8 w-[564px] max-w-full mt-2 self-end pl-24">
              "Super easy and clear! I can not recommend it enough Super easy
              and clear! I can not recommend it enough."
            </div>
            <p className="text-black text-xl font-semibold leading-8 w-[564px] text-right pr-32">
              -Aisha
            </p>
          </div>
        </div>
      </div>
      <div className="keen-slider__slide number-slide5">
        <div className="flex flex-col items-stretch w-4/5 max-md:w-full max-md:ml-0">
          <div className="shadow-sm bg-white flex grow flex-col w-full mx-auto pl-11 pr-14 pt-4 pb-14 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="flex w-[203px] max-w-full items-stretch justify-between gap-5"></div>
            <Image
              src={graycircle}
              alt="graycircle"
              width={100}
              height={100}
              className="absolute top-0 left-0"
            />
            <div className="text-black text-xl font-semibold leading-8 w-[564px] max-w-full mt-2 self-end pl-24">
              "Super easy and clear! I can not recommend it enough Super easy
              and clear! I can not recommend it enough."
            </div>
            <p className="text-black text-xl font-semibold leading-8 w-[564px] text-right pr-32">
              -Aisha
            </p>
          </div>
        </div>
      </div>
      <div className="keen-slider__slide number-slide6">
        <div className="flex flex-col items-stretch w-4/5 max-md:w-full max-md:ml-0">
          <div className="shadow-sm bg-white flex grow flex-col w-full mx-auto pl-11 pr-14 pt-4 pb-14 max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="flex w-[203px] max-w-full items-stretch justify-between gap-5"></div>
            <Image
              src={graycircle}
              alt="graycircle"
              width={100}
              height={100}
              className="absolute top-0 left-0"
            />
            <div className="text-black text-xl font-semibold leading-8 w-[564px] max-w-full mt-2 self-end pl-24">
              "Super easy and clear! I can not recommend it enough Super easy
              and clear! I can not recommend it enough."
            </div>
            <p className="text-black text-xl font-semibold leading-8 w-[564px] text-right pr-32">
              -Aisha
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Wheel;
