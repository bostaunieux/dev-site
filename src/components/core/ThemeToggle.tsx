import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import SunIcon from "@material-ui/icons/Brightness7";
import MoonIcon from "@material-ui/icons/Brightness4";
import { ToggleThemeContext } from "components/theme/ThemeProvider";

const ThemeToggle = (): React.ReactElement => {
  const { toggleTheme, isDark } = React.useContext(ToggleThemeContext);

  return (
    <Tooltip title="Toggle Theme">
      <IconButton size="small" color="inherit" onClick={toggleTheme} aria-label="Toggle theme">
        {isDark ? <SunIcon /> : <MoonIcon />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
