"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { IoAddCircle } from "react-icons/io5";
import { ServiceData } from "../constants";
import Image from "next/image";

const ActiveSlider = () => {
  return (
    <div>
      <div className="flex items-center px-5 mt-10">
        <svg
          width="17"
          height="39"
          viewBox="0 0 17 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.3455 6.27683C-0.491138 3.62391 1.40763 0 4.63427 0H17V39H4.63427C1.40763 39 -0.491136 35.3761 1.3455 32.7232L8.92373 21.7768C9.87204 20.4071 9.87204 18.5929 8.92373 17.2232L1.3455 6.27683Z"
            fill="url(#paint0_linear_6966_6755)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_6966_6755"
              x1="32"
              y1="-1.73153e-05"
              x2="32"
              y2="39"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF9E2C" />
              <stop offset="1" stop-color="#FF6F58" />
            </linearGradient>
          </defs>
        </svg>
        <p className="font-bold mr-3">دسته بندی غذا ها</p>
      </div>
      <div className="flex items-center justify-center flex-col h-[280px] relative">
        <div className="absolute inset-0 bg-gradiant-slider my-auto" />

        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            576: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[95%]"
        >
          {ServiceData.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="flex flex-col group relative shadow-lg  rounded-xl px-2 py-2 h-[205px] w-[145px] overflow-hidden cursor-pointer bg-white text-slate-950">
                <Image
                  src={`/images/${item.backgroundImage}.png`}
                  width="130"
                  height="130"
                />
                <div className="relative  text-slate-950 flex justify-between items-end mt-2">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-[12px] text-primary-700">
                      {item.title}
                    </h1>
                    <p className="text-[12px] font-bold mb-3">{item.price}</p>
                  </div>
                  <IoAddCircle className="text-primary-900 group-hover:text-primary-800 w-[32px] h-[32px] " />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ActiveSlider;
