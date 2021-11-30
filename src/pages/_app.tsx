import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { Layout } from 'components/shared/layout/';
import Theme from 'css/theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  );
};

export default App;
