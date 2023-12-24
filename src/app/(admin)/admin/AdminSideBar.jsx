"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiUsers } from "react-icons/hi2";
import { FaMoneyBill } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";
import { BsListCheck } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { CiPercent } from "react-icons/ci";

const AdminSideBar = () => {
  const pathname = usePathname();
  return (
    <div>
      <div className="flex flex-col justify-center items-center pb-5 mt-3">
        <div>
          <svg
            width="144"
            height="122"
            viewBox="0 0 144 122"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.41232 57.8192C-2.55866 71.6756 0.451285 82.5606 14.3026 89.3518C23.646 93.9327 37.6521 100.338 63.7718 103.317C96.4214 107.041 110.273 96.8 125.114 78.1793C139.954 59.5585 116.849 30.1196 103.347 11.1446C93.7308 -2.36995 80.5349 -0.687102 45.6391 1.43146C14.9683 3.29353 11.3298 39.4457 3.41232 57.8192Z"
              fill="url(#paint0_linear_6989_1976)"
            />
            <path
              d="M122.133 18.0731C119.288 3.25542 91.2299 5.18412 83.2896 6.03899C76.3428 7.32874 56.947 13.6704 34.9375 28.719C7.42563 47.5297 5.22384 63.7781 8.99132 86.536C12.7588 109.294 54.4569 110.656 79.0441 119.144C103.631 127.632 116.711 109.043 136.754 86.536C157.096 63.6941 125.244 34.2765 122.133 18.0731Z"
              fill="url(#paint1_linear_6989_1976)"
            />
            <ellipse
              cx="72.049"
              cy="58.5946"
              rx="50.48"
              ry="50.3954"
              transform="rotate(-90 72.049 58.5946)"
              fill="url(#paint2_linear_6989_1976)"
            />
            <ellipse
              cx="72.0489"
              cy="58.283"
              rx="42.0666"
              ry="41.6851"
              transform="rotate(-90 72.0489 58.283)"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6989_1976"
                x1="64.6998"
                y1="-2.70808"
                x2="64.6998"
                y2="104.076"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF9F19" />
                <stop offset="1" stop-color="#FF9F19" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_6989_1976"
                x1="119.176"
                y1="103.484"
                x2="74.6466"
                y2="47.8458"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF6243" />
                <stop offset="1" stop-color="#FF6243" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_6989_1976"
                x1="72.049"
                y1="8.19924"
                x2="72.049"
                y2="108.99"
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
      <ul className="flex flex-col space-y-8">
        <li
          className={pathname === "/admin/orders" ? "active rounded-2xl" : ""}
        >
          <Link
            href="/admin/orders"
            className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-secondary-900"
          >
            <BsListCheck className="text-secondary-100 w-6 h-6" />
            سفارش‌ها
          </Link>
        </li>
        <li className={pathname === "/admin/users" ? "active rounded-2xl" : ""}>
          <Link
            href="/admin/products"
            className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-secondary-900"
          >
            <HiUsers className="w-6 h-6" />
            لیست مشتریان
          </Link>
        </li>
        <li
          className={pathname === "/admin/payments" ? "active rounded-2xl" : ""}
        >
          <Link
            href="/admin/payments"
            className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-secondary-900"
          >
            <FaMoneyBill className="w-6 h-6" />
            منتظر پرداخت
          </Link>
        </li>
        <li
          className={
            pathname === "/admin/orders-history" ? "active rounded-2xl" : ""
          }
        >
          <Link
            href="/admin/orders-history"
            className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-secondary-900"
          >
            <IoTimerOutline className="w-6 h-6" />
            تاریخچه‌ی سفارش‌ها
          </Link>
        </li>{" "}
        <li
          className={pathname === "/admin/coupon" ? "active rounded-2xl" : ""}
        >
          <Link
            href="/admin/coupon"
            className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-secondary-900"
          >
            <CiPercent className="w-6 h-6" />
            کد تخفیف
          </Link>
        </li>
        <li
          className={pathname === "/admin/setting" ? "active rounded-2xl" : ""}
        >
          <Link
            href="/admin/setting"
            className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-secondary-900"
          >
            <FiSettings className="w-6 h-6" />
            تنظیمات
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminSideBar;
