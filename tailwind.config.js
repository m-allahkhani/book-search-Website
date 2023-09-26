/** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         details: "#E6A500",
//         pink: "#f87171",
//         blueSky: "#38bdf8",
//         matn: {
//           dark: "#FFFFFF",
//           light: "#FFFFFF",
//         },
//         box: {
//           dark: "#545C81",
//         },
//         background: {
//           light: "#FFFFFF",
//           dark: "#101530",
//         },
//       },
//     },
//   },
//   plugins: [],
// };
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        details: {
          light: "#38bdf8",
          dark: "#E6A500",
        },
        pink: "#f87171",
        titles: {
          dark: "#FFFFFF",
          light: "#00000",
        },
        box: {
          dark: "#545C81",
          light: "#e0f2fe",
        },
        background: {
          light: "#FFFFFF",
          dark: "#101530",
        },
      },
    },
  },
  plugins: [],
};
