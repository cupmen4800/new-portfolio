import type { NextPage } from 'next';
import Head from 'next/head';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { useLocale } from 'components/hooks/lang';

const Resume: NextPage = () => {
  const { t } = useLocale();
  return (
    <>
      <Head>
        <title>cupmen4800 - Resume</title>
      </Head>
      <div>
        <div
          css={css`
            margin-bottom: 100px;
          `}
        >
          <motion.h1
            css={css`
              font-size: 2rem;
              font-weight: 700;
              font-family: futura-pt, sans-serif;
              width: 100%;
              text-align: center;
            `}
            initial={{ opacity: 0, y: 10 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // マウント時
            exit={{ opacity: 0, y: 10 }} // アンマウント時
            transition={{
              duration: 0.25,
            }}
          >
            Experience
          </motion.h1>
          <motion.div
            css={css`
              width: 300px;
              margin: auto;
            `}
            initial={{ opacity: 0, y: 10 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // マウント時
            exit={{ opacity: 0, y: 10 }} // アンマウント時
            transition={{
              duration: 0.25,
            }}
          >
            <div
              css={css`
                display: flex;
                gap: 12px;
                font-size: 1.2rem;
              `}
            >
              <span
                css={css`
                  font-weight: bold;
                `}
              >
                2008
              </span>
              <span>Born in Japan.</span>
            </div>
            <div
              css={css`
                display: flex;
                gap: 12px;
                font-size: 1.2rem;
              `}
            >
              <span
                css={css`
                  font-weight: bold;
                `}
              >
                2022
              </span>
              <span>EXA KIDS最優秀賞受賞</span>
            </div>
          </motion.div>
        </div>
      </div>
      <div>
        <div
          css={css`
            margin-bottom: 100px;
          `}
        >
          <motion.h1
            css={css`
              font-size: 2rem;
              font-weight: 700;
              font-family: futura-pt, sans-serif;
              width: 100%;
              text-align: center;
              transition: all 0.2s 0s ease;
              animation-name: fadeInAnime;
              animation-duration: 1s;
              animation-fill-mode: forwards;
              opacity: 0;
            `}
            initial={{ opacity: 0, y: 10 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // マウント時
            exit={{ opacity: 0, y: 10 }} // アンマウント時
            transition={{
              duration: 0.25,
            }}
          >
            Skills and Tech Stack
          </motion.h1>
          <motion.div
            css={css`
              width: 400px;
              margin: auto;
              transition: all 0.2s 0s ease;
              animation-name: fadeInAnime;
              animation-duration: 1s;
              animation-fill-mode: forwards;
              opacity: 0;
              @media (max-width: 640px) {
                padding-left: 2rem;
                padding-right: 2rem;
                width: 100%;
              }
            `}
            initial={{ opacity: 0, y: 10 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // マウント時
            exit={{ opacity: 0, y: 10 }} // アンマウント時
            transition={{
              duration: 0.25,
            }}
          >
            <ul
              css={css`
                list-style: circle;
              `}
              dangerouslySetInnerHTML={{ __html: t.resume.skills }}
            ></ul>
          </motion.div>
        </div>
        <div>
          <motion.h1
            css={css`
              font-size: 2rem;
              font-weight: 700;
              font-family: futura-pt, sans-serif;
              width: 100%;
              text-align: center;
              transition: all 0.4s 0s ease;
              animation-name: fadeInAnime;
              animation-duration: 1s;
              animation-fill-mode: forwards;
            `}
            initial={{ opacity: 0, y: 10 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // マウント時
            exit={{ opacity: 0, y: 10 }} // アンマウント時
            transition={{
              duration: 0.25,
            }}
          >
            Contact Info
          </motion.h1>
          <motion.div
            css={css`
              width: 400px;
              margin: auto;
              transition: all 0.4s 0s ease;
              animation-name: fadeInAnime;
              animation-duration: 1s;
              animation-fill-mode: forwards;
              opacity: 0;
              @media (max-width: 640px) {
                padding-left: 2rem;
                padding-right: 2rem;
                width: 100%;
              }
            `}
            initial={{ opacity: 0, y: 10 }} // 初期状態
            animate={{ opacity: 1, y: 0 }} // マウント時
            exit={{ opacity: 0, y: 10 }} // アンマウント時
            transition={{
              duration: 0.25,
            }}
          >
            <ul
              css={css`
                list-style: circle;
              `}
            >
              <li>Email: noodle4800@gmail.com</li>
              {/* <li>
                Twitter:{' '}
                <a
                  href="https://twitter.com/cupmen4800_en"
                  target="_blank"
                  rel="noreferrer"
                >
                  @cupmen4800_en
                </a>
              </li> */}
              <li>
                Twitter:{' '}
                <a
                  href="https://twitter.com/cupmen4800"
                  target="_blank"
                  rel="noreferrer"
                >
                  @cupmen4800
                </a>
              </li>
              <li>
                Github:{' '}
                <a
                  href="https://github.com/cupmen4800"
                  target="_blank"
                  rel="noreferrer"
                >
                  @cupmen4800
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Resume;
