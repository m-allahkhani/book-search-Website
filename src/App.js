import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [userBooks, setUserBooks] = useState([]); // continues later after using local storage!
  const [section, setSection] = useState("home");
  const handleToggle = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-background-dark" : "bg-background-light"
      } min-h-screen`}
    >
      <header className="flex items-start justify-between">
        <Brand darkMode={darkMode} />
        <ModeButt onClick={handleToggle} darkMode={darkMode} />
        <BooksBasket darkMode={darkMode} userBooks={userBooks} />
      </header>
      <main className="">
        <Title mode={darkMode} section={section} />
        <BooksList />
      </main>
    </div>
  );
}

function Brand({ darkMode }) {
  return (
    <div className="flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={darkMode ? "white" : "black"}
        className="lg:w-12 sm:w-8 w-6 p-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>

      <h1
        className={`${
          darkMode ? "text-titles-dark" : "text-titles-light"
        } lg:text-3xl font-extrabold font-serif mt-1`}
      >
        E-Library
      </h1>
    </div>
  );
}
function ModeButt({ onClick, darkMode }) {
  return (
    <button
      onClick={onClick}
      className={darkMode ? "text-white mt-2" : "text-black mt-2"}
    >
      <div
        className={`lg:w-9 lg:h-5 w-7 h-4 rounded-lg border border-red-600 ${
          darkMode ? " border-white" : " border-black"
        }`}
      >
        <div
          className={`transition  rounded-full border align-middle  lg:w-4 lg:h-4 p-1 w-3 h-3 ${
            darkMode ? "float-left border-white" : "float-right border-black"
          } `}
        ></div>
      </div>
      <p className="lg:text-base sm:text-sm text-xs">
        {darkMode ? "light" : "dark"}
      </p>
    </button>
  );
}

function BooksBasket({ darkMode, userBooks }) {
  const [isOpen, setIsOpen] = useState(false);
  function showList() {
    setIsOpen((s) => !s);
  }
  const notif = true;
  return (
    <div
      className={`lg:w-16 lg:mt-10 sm:mt-8 mt-6 relative sm:w-12 w-6 rounded-lg mr-8 bg-white  ${
        isOpen ? "lg:h-32 sm:h-20 h-10" : "lg:h-20 sm:h-16 h-12"
      } ${darkMode ? "bg-white" : "bg-slate-100 "}`}
    >
      <button
        className="rounded-full absolute lg:-top-6 sm:-top-4 -top-2 bg-black lg:w-10 lg:h-10 sm:w-6 sm:h-6 w-4 h-4 flex items-center justify-center left-1/2 transform -translate-x-1/2"
        onClick={showList}
      >
        {notif && (
          <span className="absolute top-0 right-0 lg:h-2 lg:w-2 h-1 w-1 bg-orange-500 rounded-full"></span>
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

function Title({ mode, section }) {
  return (
    <div className="ml-10">
      {section === "home" && (
        <>
          <h1
            className={`${
              mode ? "text-titles-dark" : "text-titles-light"
            } font-bold lg:text-3xl sm:text-xl font-serif text-sm`}
          >
            Books
          </h1>
          <h2 className="text-details font-bold lg:text-xl sm:text-lg font-serif text-sx">
            offers
          </h2>
        </>
      )}
    </div>
  );
}

function BooksList({}) {
  const myArray = [...Array(10)].map((_, index) => index + 1);

  return (
    <div className="flex">
      {myArray.map((b) => (
        <div>
          <p>b</p>
        </div>
      ))}
    </div>
  );
}
