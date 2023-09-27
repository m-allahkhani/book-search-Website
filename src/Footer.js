import { Button } from "./Button";

export function Footer({
  darkMode,
  section,
  userButHandler,
  searchButHandler,
  homeButHandler,
}) {
  return (
    <footer className="flex justify-center gap-4 mt-10">
      <span className="text-center">
        <Button
          onClick={homeButHandler}
          style={`${
            darkMode ? "bg-white" : "bg-box-light"
          } lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 relative  `}
        >
          {section === "home" && (
            <span
              className={`absolute -top-5  lg:h-2 lg:w-2 h-2 w-2 ${
                darkMode ? "bg-details-dark " : "bg-details-light"
              } rounded-full`}
            ></span>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={
              section === "home" ? (darkMode ? "orange" : "blue") : "black"
            }
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </Button>
        <p
          className={
            section === "home"
              ? darkMode
                ? "text-details-dark "
                : "text-details-light"
              : darkMode
              ? "text-white"
              : "text-black"
          }
        >
          Home
        </p>
      </span>
      <span className="text-center">
        <Button
          onClick={searchButHandler}
          style={`${
            darkMode ? "bg-white" : "bg-box-light"
          } lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 relative `}
        >
          {section === "search" && (
            <span
              className={`absolute -top-5  lg:h-2 lg:w-2 h-2 w-2 ${
                darkMode ? "bg-details-dark " : "bg-details-light"
              }  rounded-full`}
            ></span>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={
              section === "search" ? (darkMode ? "orange" : "blue") : "black"
            }
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </Button>
        <p
          className={
            (section === "search" || section === "result")
              ? darkMode
                ? "text-details-dark "
                : "text-details-light"
              : darkMode
              ? "text-white"
              : "text-black"
          }
        >
          Search
        </p>
      </span>
      <span className="text-center">
        <Button
          onClick={userButHandler}
          style={`${
            darkMode ? "bg-white" : "bg-box-light"
          } lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 relative `}
        >
          {section === "user" && (
            <span
              className={`absolute -top-5  lg:h-2 lg:w-2 h-2 w-2 ${
                darkMode ? "bg-details-dark " : "bg-details-light"
              }  rounded-full`}
            ></span>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={
              section === "user" ? (darkMode ? "orange" : "blue") : "black"
            }
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
        </Button>
        <p
          className={
            section === "user"
              ? darkMode
                ? "text-details-dark "
                : "text-details-light"
              : darkMode
              ? "text-white"
              : "text-black"
          }
        >
          My books
        </p>
      </span>
    </footer>
  );
}
