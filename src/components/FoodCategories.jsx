"use client";
import { CategoriesData } from "../constants";

const FoodCategories = () => {
  return (
    <div className="px-5">
      <div className="flex items-center">
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
      <div className="grid grid-cols-2 gap-4 mt-5">
        {CategoriesData.map((category) => {
          return (
            <div
              key={category._id}
              className="col-span-1 bg-primary-500 h-44 border rounded-3xl flex flex-col justify-between items-center border-primary-900 shadow-md"
            >
              <div className="flex justify-center items-center text-center flex-1">
                {category.image}
              </div>
              <h2 className="font-bold h-9 bg-primary-800 rounded-tr-md rounded-tl-md w-full border border-primary-800 text-center flex justify-center items-center rounded-br-3xl rounded-bl-3xl">
                {category.title}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodCategories;
