import vazirFont from "@/constants/localFonts";
import "../globals.css";
import { Toaster } from "react-hot-toast";
import Header from "../Header";
import Image from "next/image";

export const metadata = {
  title: "Next Shop Panel",
  description: "Next.js Course Fronthooks Course",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        suppressHydrationWarning={true}
        className={`${vazirFont.variable} font-sans bg-gray-100`}
      >
        <Toaster />
        <Header />
        <div className="container xl:max-w-screen-xl">{children}</div>
        <footer className="bg-custom pb-2 max-w-md m-auto">
          <div className="flex justify-between">
            <svg
              width="112"
              height="9"
              viewBox="0 0 112 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.51466 3.06889C0.0384917 2.24741 0.621716 0 2.31107 0H112V9H2.31107C0.621716 9 0.0384908 6.75259 1.51466 5.93111C2.63649 5.30681 2.63649 3.69319 1.51466 3.06889Z"
                fill="#23282E"
              />
            </svg>
            <p className="text-primary-400 text-xs">
              طراحی و اجرا شده توسط تیم اسکانو
            </p>
            <svg
              width="111"
              height="9"
              viewBox="0 0 111 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M109.485 3.06889C110.962 2.24741 110.378 0 108.689 0H-1V9H108.689C110.378 9 110.962 6.75259 109.485 5.93111C108.364 5.30681 108.364 3.69319 109.485 3.06889Z"
                fill="#23282E"
              />
            </svg>
          </div>
          <div className="w-full flex justify-center">
            <Image src={`/images/Eskano.png`} width="54" height="24" />
          </div>
        </footer>
      </body>
    </html>
  );
}
