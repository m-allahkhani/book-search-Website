import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { BookItemSmall } from "./BookItemSmall";
import { Main } from "./Main";

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
    <Page darkMode={darkMode}>
      <Header
        userBooks={userBooks}
        darkMode={darkMode}
        onClick={handleToggle}
        homeButHandler={goToHome}
      />
      <Main darkMode={darkMode} section={section} setSection={setSection} />
      <Footer
        darkMode={darkMode}
        section={section}
        userButHandler={goToUser}
        searchButHandler={goToSearch}
        homeButHandler={goToHome}
      />
    </Page>
  );
}

function Page({ children, darkMode }) {
  return (
    <div
      className={`container mx-auto pb-20 ${
        darkMode ? "bg-background-dark" : "bg-background-light"
      } min-h-screen `}
    >
      {children}
    </div>
  );
}
