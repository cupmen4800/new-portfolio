import { NextPage } from 'next';
import Image from 'next/image';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

const NotFound: NextPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }} // 初期状態
        animate={{ opacity: 1, y: 0 }} // マウント時
        exit={{ opacity: 0, y: 10 }} // アンマウント時
        transition={{
          duration: 0.25,
        }}
        css={css`
          width: 100vw;
          height: 50vh;
          position: relative;
        `}
      >
        <Image src="/404.svg" alt="" layout="fill" />
      </motion.div>
      <motion.span
        css={css`
          font-size: 10rem;
          font-family: futura-pt, sans-serif;
          font-weight: 700;
          font-style: italic;
        `}
        initial={{ opacity: 0, y: 10 }} // 初期状態
        animate={{ opacity: 1, y: 0 }} // マウント時
        exit={{ opacity: 0, y: 10 }} // アンマウント時
        transition={{
          duration: 0.25,
        }}
      >
        404
      </motion.span>
    </>
  );
};

export default NotFound;
