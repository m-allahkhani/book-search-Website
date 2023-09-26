import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BooksList } from "./BooksList";
import { Title } from "./Title";
import { Footer } from "./Footer";
import { Header } from "./Header";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [userBooks, setUserBooks] = useState([]); // continues later after using local storage!
  const [section, setSection] = useState("home");
  const handleToggle = () => {
    setDarkMode((prevState) => !prevState);
  };

  function goToSearch() {
    setSection("search");
  }
  function goToHome() {
    setSection("home");
  }
  function goToUser() {
    setSection("user");
  }
  return (
    <div
      className={`${
        darkMode ? "bg-background-dark" : "bg-background-light"
      } min-h-screen`}
    >
      <Header
        userBooks={userBooks}
        darkMode={darkMode}
        onClick={handleToggle}
        homeButHandler={goToHome}
      />
      <Main darkMode={darkMode} section={section} />
      <Footer
        darkMode={darkMode}
        section={section}
        userButHandler={goToUser}
        searchButHandler={goToSearch}
        homeButHandler={goToHome}
      />
    </div>
  );
}

function Main({ darkMode, section }) {
  return (
    <main className="">
      <Title mode={darkMode} section={section} />
      {section === "home" && <BooksList mode={darkMode} />}
      {section === "search" && <SearchBox mode={darkMode} />}
    </main>
  );
}

function SearchBox({ mode }) {
  return (
    <div className="text-center">
      <InputText darkMode={mode} text={`Author`} />
      <InputText darkMode={mode} text={`Title`} />
      <InputText darkMode={mode} text={`ISBN`} />
    </div>
  );
}

function InputText({ darkMode, text }) {
  return (
    <div>
      <input
        type="text"
        className={`m-4 p-2 rounded-lg w-1/4 outline-none ${
          darkMode ? "bg-box-dark" : "bg-box-light" 
        } hover:border hover:transition hover:delay-100`}
        placeholder={text}
      ></input>
    </div>
  );
}
