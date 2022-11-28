import type { NextPage } from 'next';
import Head from 'next/head';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';
import { useLocale } from 'components/hooks/lang';

const Home: NextPage = () => {
  const { t } = useLocale();
  return (
    <>
      <Head>
        <title>cupmen4800</title>
      </Head>
      <motion.div
        css={css`
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          width: 100%;
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
        <div
          css={css`
            width: 690px;
            margin-top: 1rem;
            margin-bottom: 1rem;
            color: #2b2b2b;
            @media (prefers-color-scheme: dark) {
              color: #d3d3d3;
            }
            @media (max-width: 640px) {
              width: 100%;
            }
          `}
          dangerouslySetInnerHTML={{ __html: t.about.about }}
        />
      </motion.div>
    </>
  );
};

export default Home;
