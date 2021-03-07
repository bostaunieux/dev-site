import React from "react";
import { AppProps } from "next/app";
import ThemeProvider from "components/theme/ThemeProvider";
import Header from "components/core/Header";
import Footer from "components/core/Footer";
import "../styles/globals.css";
import styles from "./App.module.css";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return (
    <ThemeProvider>
      <div className={styles.container}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default MyApp;
