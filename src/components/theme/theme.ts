import { createMuiTheme, ThemeOptions } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      // main: "#6886c5",
      main: "#1976d2",
    },
    secondary: {
      main: "#ffe0ac",
    },
    error: {
      main: "#E44C65",
    },
    background: {
      default: "#f9f9f9",
    },
    text: {
      primary: "#353535",
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    // primary: blue,
    primary: {
      // ...blue,
      main: "#333",
      contrastText: "#fff",
      //   // main: "#0f4c75",
    },
    secondary: {
      main: "#3282b8",
    },
    error: {
      main: "#E44C65",
    },
    background: {
      default: "#212121",
      // default: "#1b262c",
    },
    text: {
      primary: "#bbdefb",
      // primary: "#90caf9",

      // primary: "#bbe1fa",
    },
  },
});
