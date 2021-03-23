import React from "react";
import NextLink from "next/link";
import { AppBar, Button, Hidden, Link as MuiLink, Toolbar } from "@material-ui/core";
import { LinkedIn as LinkedInIcon, GitHub as GitHubIcon } from "@material-ui/icons";
import SiteLogo from "components/icons/dangelos-dev.svg";
import ThemeToggle from "components/core/ThemeToggle";
import { ToggleThemeContext } from "components/theme/ThemeProvider";
import UtilitiesLinks from "./UtilitiesLinks";
import routes from "./routes";
import styles from "./Header.module.css";

const Header = () => {
  const { isDark } = React.useContext(ToggleThemeContext);
  return (
    <AppBar position="static" className={styles.container}>
      <Toolbar>
        <NextLink href={routes.HOME} passHref>
          <Button component="a" color="inherit">
            <SiteLogo className={styles.logo} style={{ fill: isDark ? "#fff" : "#222" }} />
          </Button>
        </NextLink>

        <div className={styles.siteLinks}>
          <UtilitiesLinks />
        </div>
        <div className={styles.externalLinks}>
          <NextLink href="https://github.com/bostaunieux" passHref>
            <MuiLink component="a" color="inherit" className={styles.link}>
              <GitHubIcon fontSize="small" /> <Hidden only="xs">GitHub</Hidden>
            </MuiLink>
          </NextLink>
          <NextLink href="https://www.linkedin.com/in/damienangelos" passHref>
            <MuiLink component="a" color="inherit" className={styles.link}>
              <LinkedInIcon fontSize="small" /> <Hidden only="xs">LinkedIn</Hidden>
            </MuiLink>
          </NextLink>
          <ThemeToggle />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
