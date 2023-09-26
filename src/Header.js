import { BooksBasket } from "./BooksBasket";
import { ModeButt } from "./ModeButt";
import { Brand } from "./Brand";

export function Header({ userBooks, darkMode, onClick,homeButHandler }) {
  return (
    <header className="flex items-start justify-between">
      <button onClick={homeButHandler}>
        <Brand darkMode={darkMode} />
      </button>
      <ModeButt onClick={onClick} darkMode={darkMode} />
      <BooksBasket darkMode={darkMode} userBooks={userBooks} />
    </header>
  );
}
