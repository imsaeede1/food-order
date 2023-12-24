"use client";

function Header() {
  return (
    <header className="bg-custom max-w-md m-auto p-4 border-b border-primary-700">
      <nav className="flex justify-between">
        <div className="text-gray-900">.</div>
        <form>
          <div class="flex">
            <label
              for="search-dropdown"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Your Email
            </label>

            <div class="relative max-w-64 rounded-full h-10">
              <input
                type="search"
                id="search-dropdown"
                class="block p-2.5 w-full h-10 z-20 bg-white text-sm text-gray-900 rounded-full border-2 
                 border-primary-900 focus:ring-primary-900 focus:ring-0 focus:outline-none  focus:border-primary-900"
                placeholder=""
                required
              />
              <button
                type="submit"
                class="absolute top-0 end-0 p-2 text-sm font-medium text-white bg-primary-900 h-10 w-10 rounded-full border-1 border-primary-900 hover:bg-primary-900 focus:ring-0 focus:outline-none focus:ring-primary-900"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 22L20 20"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>
        <div class="flex justify-center items-center">
          <div class="relative py-2 bg-primary-800 p-2 rounded-full">
            <div class="-mt-3 absolute left-7">
              <p class="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                ۲
              </p>
            </div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 8H21"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
