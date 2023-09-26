import { useState } from "react";

export function BooksBasket({ darkMode, userBooks }) {
  const [isOpen, setIsOpen] = useState(false);
  function showList() {
    setIsOpen((s) => !s);
  }
  const notif = true;
  return (
    <div
      className={`lg:w-16 lg:mt-10 sm:mt-8 mt-6 relative sm:w-12 w-6 rounded-lg mr-8 bg-white  ${
        isOpen ? "lg:h-32 sm:h-20 h-10" : "lg:h-20 sm:h-16 h-12"
      } ${darkMode ? "bg-white" : "bg-sky-200"}`}
    >
      <button //can use Button for this botton :)
        className="rounded-full absolute lg:-top-6 sm:-top-4 -top-2 bg-black lg:w-10 lg:h-10 sm:w-6 sm:h-6 w-4 h-4 flex items-center justify-center left-1/2 transform -translate-x-1/2"
        onClick={showList}
      >
        {notif && (
          <span
            className={`absolute top-0 right-0 lg:h-2 lg:w-2 h-1 w-1 ${
              darkMode ? "bg-details-dark " : "bg-details-light"
            }  rounded-full`}
          ></span>
        )}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="lg:w-8 lg:h-8 sm:w-6 sm:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
      </button>

      <h2 className="text-center lg:font-bold mt-2 sm:font-semibold font-thin lg:text-lg sm:text-sm text-xs">
        {userBooks.length}
      </h2>
      <h2 className="text-center lg:font-bold sm:font-semibold font-thin lg:text-lg sm:text-sm text-xs">
        Books
      </h2>
    </div>
  );
}
