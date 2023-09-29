import { useState } from "react";
import { BooksList } from "./BooksList";
import { Title } from "./Title";
import { BookItem } from "./BookItem";
import { SearchBox } from "./SearchBox";

export function Main({ darkMode, section, setSection }) {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("hi");

  return (
    <main className="">
      {error !== "" &&
        (error === "loading" ? (
          <div className="text-center">
            <button
              type="button"
              className="bg-red-300 text-center w-40 h-30"
              disabled
            >
              <svg
                className="animate-spin h-5 w-5 mr-3"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ></svg>
              Loading...
            </button>
          </div>
        ) : (
          <Warning
            error={error}
            message={"No results found"}
            setError={setError}
            darkMode={darkMode}
          />
        ))}

      {section === "home" && <BooksList mode={darkMode} />}
      {section === "search" && (
        <SearchBox
          mode={darkMode}
          setSection={setSection}
          setResults={setResults}
          setError={setError}
          error={error}
        />
      )}
      {section === "result" && results && results.length > 0 && (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 ">
          {results.map((book) => (
            <BookItem key={book.id} item={book} mode={darkMode} />
          ))}
        </div>
      )}
    </main>
  );
}

function Warning({ error, darkMode, message, setError }) {
  return (
    <div
      className={`w-80 h-30 mx-auto text-center rounded-lg ${
        darkMode ? "bg-details-dark" : "bg-details-light"
      }`}
    >
      <h1 className="text-center lg:text-xl md:text-lg lg:font-extrabold md:font-bold ">
        {message}
      </h1>
      <h2 className=" mt-2 text-center lg:text-xl md:text-lg lg:font-bold md:font-semibold">
        {error}
      </h2>
      <button className="mt-3 text-lg font-medium" onClick={() => setError("")}>
        OK
      </button>
    </div>
  );
}
