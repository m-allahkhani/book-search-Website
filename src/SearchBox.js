import { useState } from "react";
import { InputText } from "./InputText";

export function SearchBox({ mode, setSection, setResults, setError, error }) {
  const [author, setAuthor] = useState("");
  const [title, setTiltle] = useState("");
  const [isbn, setIsbn] = useState("");
  const resultNum = 10;
  const apiKey = "AIzaSyA5PZL32JJkihizj4a7jnRqRn8Xua0-c4U";
  async function searchQuery() {
    try {
      setError("loading")
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(
          title
        )}+inauthor:${encodeURIComponent(author)}+isbn:${encodeURIComponent(
          isbn
        )}&maxResults=${resultNum}&key=${apiKey}`
      );

      const data = await response.json();
      setError("");
      setResults(data.items);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  }
  function handelSearch(e) {
    e.preventDefault();
    searchQuery();
    error === "" && setSection("result");
    setAuthor("");
    setIsbn("");
    setTiltle("");
  }
  return (
    <form className="text-center" onSubmit={handelSearch}>
      <InputText
        darkMode={mode}
        text={`Author`}
        value={author}
        onChange={setAuthor}
      />
      <InputText
        darkMode={mode}
        text={`Title`}
        value={title}
        onChange={setTiltle}
      />
      <InputText
        darkMode={mode}
        text={`ISBN`}
        value={isbn}
        onChange={setIsbn}
      />
      <button
        className={`${
          mode ? "bg-details-dark " : "bg-details-light"
        } w-1/6 rounded-lg h-12`}
      >
        Search
      </button>
    </form>
  );
}
