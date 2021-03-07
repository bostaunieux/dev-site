import React from "react";
import { MuiThemeProvider, CssBaseline, useMediaQuery } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import { lightTheme, darkTheme } from "./theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ToggleThemeContext = React.createContext({
  toggleTheme: () => {},
  isDark: false,
});

interface CurrentTheme {
  themeName: string;
  muiTheme: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  // TODO: Does this work
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [selectedTheme, setCurrentTheme] = React.useState<CurrentTheme>({
    muiTheme: darkTheme,
    themeName: "dark",
  });
  console.log("Prefers dark mode: %s", prefersDarkMode ? "dark" : "light");

  React.useEffect(() => {
    if (!localStorage.getItem("theme")) {
      const updatedTheme = prefersDarkMode
        ? {
            muiTheme: darkTheme,
            themeName: "dark",
          }
        : {
            muiTheme: lightTheme,
            themeName: "light",
          };
      setCurrentTheme(updatedTheme);
    }
  }, [prefersDarkMode]);

  React.useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme && theme === "light") {
      setCurrentTheme({ muiTheme: lightTheme, themeName: "light" });
    }
  }, []);

  const toggleTheme = React.useCallback(() => {
    if (!selectedTheme || selectedTheme.themeName === "dark") {
      setCurrentTheme({ muiTheme: lightTheme, themeName: "light" });
      localStorage.setItem("theme", "light");
    } else {
      setCurrentTheme({ muiTheme: darkTheme, themeName: "dark" });
      localStorage.setItem("theme", "dark");
    }
  }, [selectedTheme, setCurrentTheme]);

  return (
    <ToggleThemeContext.Provider value={{ toggleTheme, isDark: selectedTheme.themeName === "dark" }}>
      <MuiThemeProvider theme={selectedTheme.muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ToggleThemeContext.Provider>
  );
};

export default ThemeProvider;
