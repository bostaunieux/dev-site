import React from "react";
import { CssBaseline, MuiThemeProvider, Theme, useMediaQuery } from "@material-ui/core";
import { lightTheme, darkTheme } from "./theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

type ThemeName = "light" | "dark";

const themesByName: Map<ThemeName, Theme> = new Map([
  ["light", lightTheme],
  ["dark", darkTheme],
]);

export const ToggleThemeContext = React.createContext({
  toggleTheme: () => {},
  isDark: false,
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  const [themeName, setThemeName] = React.useState<ThemeName>("dark");

  React.useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setThemeName("light");
    }
  }, []);

  const toggleTheme = React.useCallback(() => {
    if (themeName === "dark") {
      setThemeName("light");
      localStorage.setItem("theme", "light");
    } else {
      setThemeName("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [themeName, setThemeName]);

  // TODO: get typescript to understand the map will always return a theme
  const muiTheme: Theme = themesByName.get(themeName) ?? darkTheme;

  return (
    <ToggleThemeContext.Provider value={{ toggleTheme, isDark: themeName === "dark" }}>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ToggleThemeContext.Provider>
  );
};

export default ThemeProvider;
