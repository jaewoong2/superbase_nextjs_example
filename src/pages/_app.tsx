import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/globals.css";

import { Layout } from "@components/index";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@styles/theme";
import { UserProvider } from "context/user";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </UserProvider>
    </React.Fragment>
  );
}

export default MyApp;
