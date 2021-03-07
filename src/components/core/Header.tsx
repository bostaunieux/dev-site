import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { LinkedIn as LinkedInIcon, GitHub as GitHubIcon } from "@material-ui/icons";
import Link from "components/core/Link";
import ThemeToggle from "components/core/ThemeToggle";

import styles from "./Header.module.css";

const Header = ({}) => {
  return (
    <>
      <AppBar position="static" className={styles.container}>
        <Toolbar>
          <Link href="/" color="inherit" variant="h6">
            dangelos.dev
          </Link>

          <div className={styles.siteLinks}>
            <Link href="/util/uuid" color="inherit" variant="body1">
              UUID Generator
            </Link>
          </div>
          <div className={styles.externalLinks}>
            <Link
              className={styles.link}
              href="https://github.com/bostaunieux"
              color="inherit"
              variant="body1"
              startIcon={<GitHubIcon fontSize="small" />}
            >
              <GitHubIcon fontSize="small" /> Github
            </Link>
            <Link
              className={styles.link}
              href="https://www.linkedin.com/in/damienangelos"
              color="inherit"
              variant="body1"
            >
              <LinkedInIcon fontSize="small" /> LinkedIn
            </Link>
            <ThemeToggle />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
