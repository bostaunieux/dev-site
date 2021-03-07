import React from "react";
import { AppProps } from "next/app";
import ThemeProvider from "components/theme/ThemeProvider";
import Header from "components/core/Header";
import Footer from "components/core/Footer";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps): React.ReactNode => {
  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
};

export default MyApp;
