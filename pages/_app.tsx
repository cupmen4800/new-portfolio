import '@unocss/reset/tailwind.css';
import 'styles/globals.css';
import type { AppProps } from 'next/app';
import Header from 'components/layout/header';
import Footer from 'components/layout/footer';
import { css, ThemeProvider } from '@emotion/react';
import { motion, AnimatePresence } from 'framer-motion';
import { theme, darkTheme } from 'components/theme';
import Image from 'next/image';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
      <ThemeProvider theme={theme}>
        <div
          id="A"
          data-theme="dark"
          css={css`
            min-height: 100vh;
            position: relative;
            box-sizing: border-box;
            padding-bottom: 4rem;
            @media (prefers-color-scheme: dark) {
              background: ${darkTheme.colors.backgroundColor};
              color: ${darkTheme.colors.textColor};
            }
            @media (max-width: 640px) {
              width: 100%;
            }
          `}
        >
          <Header />
          <main
            css={css`
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              margin-left: 14rem;
              margin-right: 14rem;
              padding-top: 4rem;
              padding-bottom: 4rem;
              @media (max-width: 640px) {
                padding-left: 4rem;
                padding-right: 4rem;
                width: 100%;
              }
            `}
          >
            <div>
              <div
                css={css`
                  width: 100%;
                  display: flex;
                  justify-content: center;
                  flex-wrap: wrap;
                  margin-bottom: 2rem;
                `}
              >
                <div
                  css={css`
                    margin: auto;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    width: 690px;
                    @media (max-width: 640px) {
                      width: 100%;
                    }
                  `}
                >
                  <div
                    css={css`
                      width: 8rem;
                      height: 8rem;
                      position: relative;
                      background: #fff;
                      border-radius: 100%;
                      border: solid 2px #dadada;
                      @media (prefers-color-scheme: dark) {
                        border: solid 2px #3e3e3e;
                      }
                    `}
                  >
                    <Image
                      src="/profile_icon.jpg"
                      alt="profile icon"
                      layout="fill"
                      objectFit="cover"
                      css={css`
                        border-radius: 100%;
                      `}
                    />
                  </div>
                  <h2
                    css={css`
                      font-size: 5rem;
                      font-weight: 700;
                      font-family: Montserrat Alternates, sans-serif;
                      @media (max-width: 640px) {
                        font-size: 2rem;
                      }
                    `}
                  >
                    cupmen
                    <span
                      css={css`
                        font-weight: 200;
                      `}
                    >
                      4800
                    </span>
                  </h2>
                </div>
              </div>
              <Component {...pageProps} />
            </div>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
