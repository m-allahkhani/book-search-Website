// function Button({ children, onClick, color }) {
//   return (
//     <button
//       onClick={onClick}
//       className={`w-10 h-10 rounded-full bg-${color} absolute -right-5 bottom-2 flex items-center justify-center`}
//     >
//       {children}
//     </button>
//   );
// }
export function Button({ children, onClick, style }) {
  return (
    <button
      onClick={onClick}
      className={` rounded-full  ${style} flex items-center justify-center`}
    >
      {children}
    </button>
  );
}
