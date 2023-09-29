export function InputText({ darkMode, text, value, onChange }) {
    return (
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`m-4 p-2 rounded-lg w-1/4 outline-none   ${
            darkMode ? "bg-box-dark" : "bg-box-light"
          }  hover:border-2 `}
          placeholder={text}
        ></input>
      </div>
    );
  }