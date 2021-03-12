import React from "react";
import { ToggleThemeContext } from "components/theme/ThemeProvider";
import NextJsLogo from "components/icons/nextjs.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  const { isDark } = React.useContext(ToggleThemeContext);
  return (
    <footer className={styles.footer}>
      Built by Damien Angelos using
      <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
        <NextJsLogo style={{ fill: isDark ? "#fff" : "#000" }} />
      </a>
    </footer>
  );
};

export default Footer;
