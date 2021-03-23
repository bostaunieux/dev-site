import { createMuiTheme, ThemeOptions } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";

export const lightTheme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#fff",
      },
    },
    MuiToolbar: {
      root: {
        color: "#353535",
      },
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#2e73ab",
    },
    secondary: {
      main: "#ffe0ac",
    },
    error: {
      main: "#E44C65",
    },
    background: {
      default: "#F9F9FA",
    },
    text: {
      primary: "#353535",
    },
  },
});

export const darkTheme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: "#323233",
      },
    },
    MuiToolbar: {
      root: {
        color: "#fff",
      },
    },
  },
  palette: {
    type: "dark",
    primary: {
      // ...blue,
      main: "#3C3C3C",
      contrastText: "#fff",
      //   // main: "#0f4c75",
    },
    secondary: {
      main: "#2B2A2D",
    },
    error: {
      main: "#E44C65",
    },
    background: {
      default: "#2B2A2D",
      // default: "#1b262c",
    },
    text: {
      primary: "#F9F9FA",
      // primary: "#90caf9",

      // primary: "#bbe1fa",
    },
  },
});
