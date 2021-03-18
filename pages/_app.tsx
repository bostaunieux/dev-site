import React from "react";
import { AppProps } from "next/app";
import { Container } from "@material-ui/core";
import ThemeProvider from "components/theme/ThemeProvider";
import Header from "components/core/Header";
import Footer from "components/core/Footer";

import "../styles/globals.css";
import styles from "./_app.module.css";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactNode => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <ThemeProvider>
      <div className={styles.container}>
        <Header />
        <Container maxWidth="md">
          <Component {...pageProps} />
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default MyApp;
