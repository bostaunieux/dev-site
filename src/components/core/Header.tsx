import NextLink from "next/link";
import { AppBar, Button, Link as MuiLink, Toolbar } from "@material-ui/core";
import { LinkedIn as LinkedInIcon, GitHub as GitHubIcon } from "@material-ui/icons";
import ThemeToggle from "components/core/ThemeToggle";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <AppBar position="static" className={styles.container}>
      <Toolbar>
        <NextLink href="/" passHref>
          <Button component="a" color="inherit">
            dangelos.dev
          </Button>
        </NextLink>

        <div className={styles.siteLinks}>
          <NextLink href="/util/uuid" passHref>
            <MuiLink component="a" color="inherit">
              UUID Generator
            </MuiLink>
          </NextLink>
        </div>
        <div className={styles.externalLinks}>
          <NextLink href="https://github.com/bostaunieux" passHref>
            <MuiLink component="a" color="inherit" className={styles.link}>
              <GitHubIcon fontSize="small" /> GitHub
            </MuiLink>
          </NextLink>
          <NextLink href="https://www.linkedin.com/in/damienangelos" passHref>
            <MuiLink component="a" color="inherit" className={styles.link}>
              <LinkedInIcon fontSize="small" /> LinkedIn
            </MuiLink>
          </NextLink>
          <ThemeToggle />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
