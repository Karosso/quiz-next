import React from 'react';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from 'next/head';
import { db } from '../db';
import { QuizProvider } from '../src/context/QuizContext';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const theme = db.theme;

interface IAppProps {
  Component: any,
  pageProps: any
}

const App: React.FC<IAppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>The Simpsons Quiz</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />

        <meta property="og:url" content="https://quiz-next.karosso.vercel.app/" key="siteOgUrl" />
        <meta property="og:site_name" content="https://quiz-next.karosso.vercel.app/" key="siteName" />
        <meta property="og:title" content="THE SIMPSONS QUIZ" key="siteTitle" />
        <meta property="og:description"
          content="Test your knowledge of the most loved family on the screens!"
          key="siteDescription"
        />
        <meta property="og:image" itemProp="image" content="https://quiz-next.karosso.vercel.app/homer.jpg" key="siteImg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="420" />
        <meta property="og:image:height" content="372" />
        <meta property="og:type" content="website" key="siteType" />
      </Head>
      <ThemeProvider theme={theme}>
        <QuizProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </QuizProvider>
      </ThemeProvider>
    </>
  );
}

export default App