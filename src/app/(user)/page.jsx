import FoodCategories from "@/components/FoodCategories";
import dynamic from "next/dynamic";
const ActiveSlider = dynamic(() => import("@/components/ActiveSlider"));

const Home = () => {
  return (
    <div className="bg-custom bg-group max-w-md h-full mx-auto py-5 relative">
      <div className="flex flex-col justify-center items-center pb-5 mt-3">
        <div>
          <svg
            width="230"
            height="195"
            viewBox="0 0 230 195"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.68416 92.9959C-4.91953 115.282 -0.078353 132.79 22.2 143.713C37.2278 151.081 59.7551 161.383 101.766 166.175C154.279 172.165 176.558 155.692 200.427 125.743C224.297 95.7935 187.134 48.4441 165.418 17.9249C149.952 -3.81181 128.727 -1.10513 72.6014 2.30235C23.2706 5.29728 17.4186 63.4441 4.68416 92.9959Z"
              fill="url(#paint0_linear_5175_2216)"
            />
            <path
              d="M195.634 29.0686C191.058 5.23598 145.929 8.33807 133.158 9.71305C121.985 11.7875 90.7889 21.9873 55.389 46.1913C11.1391 76.4464 7.5978 102.58 13.6574 139.184C19.7169 175.787 86.7839 177.979 126.33 191.63C165.876 205.282 186.912 175.385 219.15 139.184C251.867 102.445 200.637 55.13 195.634 29.0686Z"
              fill="url(#paint1_linear_5175_2216)"
            />
            <ellipse
              cx="115.079"
              cy="94.243"
              rx="81.1915"
              ry="81.0555"
              transform="rotate(-90 115.079 94.243)"
              fill="url(#paint2_linear_5175_2216)"
            />
            <ellipse
              cx="115.079"
              cy="93.7418"
              rx="67.6596"
              ry="67.0459"
              transform="rotate(-90 115.079 93.7418)"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5175_2216"
                x1="103.258"
                y1="-4.35566"
                x2="103.258"
                y2="167.395"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF9F19" />
                <stop offset="1" stop-color="#FF9F19" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_5175_2216"
                x1="190.877"
                y1="166.443"
                x2="119.257"
                y2="76.9547"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF6243" />
                <stop offset="1" stop-color="#FF6243" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_5175_2216"
                x1="115.079"
                y1="13.1875"
                x2="115.079"
                y2="175.299"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF6A3E" />
                <stop offset="0.0001" stop-color="#FF5F45" />
                <stop offset="1" stop-color="#FF9F19" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-6 mt-4">نام رستوران</h1>
      </div>
      <FoodCategories />
      <ActiveSlider />
      <div className="bg-primary-900 rounded-full absolute -bottom-8 right-5 flex flex-col p-2 h-16 w-16 justify-between items-center">
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.97329 26.7667C10.0666 25.5934 11.7333 25.6867 12.6933 26.9667L14.04 28.7667C15.12 30.1934 16.8666 30.1934 17.9466 28.7667L19.2933 26.9667C20.2533 25.6867 21.92 25.5934 23.0133 26.7667C25.3866 29.3 27.32 28.46 27.32 24.9134V9.88669C27.3333 4.51335 26.08 3.16669 21.04 3.16669H10.96C5.91996 3.16669 4.66663 4.51335 4.66663 9.88669V24.9C4.66663 28.46 6.61329 29.2867 8.97329 26.7667Z"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.7947 15.1667H10.8067"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.5312 15.1667H21.8646"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.7947 9.83335H10.8067"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.5312 9.83331H21.8646"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p children="text-xs mt-1">رسید</p>
      </div>
    </div>
  );
};

export default Home;
