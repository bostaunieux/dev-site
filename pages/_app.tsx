import React from "react";
import { AppProps } from "next/app";
import { Container } from "@material-ui/core";
import ThemeProvider from "components/theme/ThemeProvider";
import Header from "components/core/Header";
import Footer from "components/core/Footer";

import "../styles/globals.css";
import styles from "./_app.module.css";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return (
    <ThemeProvider>
      <Container maxWidth="md">
        <div className={styles.container}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default MyApp;
