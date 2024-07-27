// The sample color palette below ("darkPalette") is generated using "Tailwind Shades"
// vscode extension. Highlight the initial color base (i.e. #187bcd in this case)
// and then hit ; "ctrl+k ctrl+g".
// ------------------------------------------------------------------

export const darkPalette = {
  grey: {
    50: "#f6f6f6", // manually inserted
    100: "#e7e7e7",
    200: "#cecece",
    300: "#b6b6b6",
    400: "#9d9d9d",
    500: "#858585", // base
    600: "#6a6a6a",
    700: "#505050",
    800: "#353535",
    900: "#1b1b1b",
  },
  primary: {
    // BLUE
    50: "#cfdce6", // manually inserted
    100: "#a4d0f4",
    200: "#3295e7",
    300: "#187ccd",
    400: "#1360a0",
    500: "#0f4e83", // base
    600: "#0c3e69",
    700: "#092f4f",
    800: "#061f34",
    900: "#03101a",
  },
  secondary: {
    // YELLOW
    50: "#faf3cc", // manually inserted
    100: "#faf3cc",
    200: "#fff099",
    300: "#ffe44d",
    400: "#ffd900",
    500: "#e6c300", // base
    600: "#ccad00",
    700: "#8a7500",
    800: "#5c4e00",
    900: "#2e2700",
  },
};

// Shade keys array;  [50, 100, 200, ...]
const greyKeys = Object.keys(darkPalette["grey"]);
const primaryKeys = Object.keys(darkPalette["primary"]);
const secondaryKeys = Object.keys(darkPalette["secondary"]);
// Hex colors values array (but in reverse order);  ["#1b1b1b", "#353535", ...]
const greyColorsReversed = Object.values(darkPalette["grey"]).reverse();
const primaryColorsReversed = Object.values(darkPalette["primary"]).reverse();
const secondaryColorsReversed = Object.values(
  darkPalette["secondary"]
).reverse();

const reversedColorsObj = (keysArr, colorsArr) => {
  const length = keysArr.length;
  const colorsObj = {};
  for (let i = 0; i < length; i++) {
    colorsObj[keysArr[i]] = colorsArr[i];
  }
  return colorsObj;
};

// Color arrangement in total reverse of "darkPalette" object.
export const lightPalette = {
  grey: reversedColorsObj(greyKeys, greyColorsReversed),
  primary: reversedColorsObj(primaryKeys, primaryColorsReversed),
  secondary: reversedColorsObj(secondaryKeys, secondaryColorsReversed),
};

// ALTERNATIVELY, "lightPalette" object can be generated using the function
// below. The code is more succinct but there is a nested loop involved
// (a 'for' loop nested inside the 'forEach' function) therefore causing
// an O(n*m) time complexity.
// ---------------------------------------------------------------------
// function reverseTokens(darkPalette) {
//   const reversedTokens = {};
//   Object.entries(darkPalette).forEach(([key, val]) => {
//     const keys = Object.keys(val); // [50, 100, 200, ...]
//     const values = Object.values(val); // ["#f6f6f6", "#e7e7e7", ...]
//     const length = keys.length;
//     const reversedObj = {};
//     for (let i = 0; i < length; i++) {
//       reversedObj[keys[i]] = values[length - i - 1];
//     }
//     reversedTokens[key] = reversedObj;
//   });
//   return reversedTokens;
// }
// export const lightPalette = reverseTokens(darkPalette);

// mui theme settings
// https://mui.com/material-ui/customization/palette/
// NOTE: Material-UI theme object have a number of properties
//       that can be included (i.e. palette, typography, spacing,
//       shape, components, etc.)
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      // Ternary operator on palette selection (either dark or light mode)
      ...(mode === "dark"
        ? {
            // Palette values for dark mode
            primary: {
              ...darkPalette.primary,
              main: darkPalette.primary[500],
              light: darkPalette.primary[400],
              dark: darkPalette.primary[600],
              contrastText: darkPalette.grey[50],
            },
            secondary: {
              ...darkPalette.secondary,
              main: darkPalette.secondary[500],
              light: darkPalette.secondary[400],
              dark: darkPalette.secondary[600],
            },
            neutral: {
              ...darkPalette.grey,
              main: darkPalette.grey[500],
            },
          }
        : {
            // Palette values for light mode
            primary: {
              ...lightPalette.primary,
              main: lightPalette.primary[500],
              light: lightPalette.primary[400],
              dark: lightPalette.primary[600],
              contrastText: lightPalette.grey[50],
            },
            secondary: {
              ...lightPalette.secondary,
              main: lightPalette.secondary[500],
              light: lightPalette.secondary[400],
              dark: lightPalette.secondary[600],
            },
            neutral: {
              ...lightPalette.grey,
              main: lightPalette.grey[500],
            },
          }),
    },
    typography: {
      fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Roboto Condensed", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
