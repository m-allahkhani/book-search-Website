import { Button } from "./Button";


export function BookItem({ item, mode }) {
  let widthClass = "w-48";
  if (item.slidesToShow === 2) {
    widthClass = "w-35";
  } else if (item.slidesToShow === 1) {
    widthClass = "w-75";
  }
  return (
    <div className={`flex justify-center mx-auto ${widthClass}`}>
      <div
        className={`lg:mt-10 sm:mt-8 mt-6 relative rounded-lg rounded-br-3xl ${
          mode ? "bg-box-dark" : "bg-box-light"
        } min-h-max mx-auto`}
      >
        <img
          className="absolute lg:-top-12 sm:-top-16 -top-4 mb-10 lg:w-20 lg:h-20 sm:w-20 w-14 sm:h-24 rounded-sm  h-10 left-1/2 transform -translate-x-1/2"
          src={item.volumeInfo.imageLinks.thumbnail}
          alt="Book cover img"
        />
        <h2 className="p-2 pt-8 text-center lg:font-bold lg:text-lg sm:text-sm text-xs ">
          {item.volumeInfo.title}
        </h2>
        <h3
          className={`text-center ${
            mode ? "text-details-dark " : "text-details-light"
          } lg:font-bold lg:text-lg sm:text-sm text-xs p-2 pb-5`}
        >
          {item.volumeInfo.authors}
        </h3>

        <div className="relative">
          <Button style="absolute -right-5 bottom-2 w-10 h-10 bg-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
