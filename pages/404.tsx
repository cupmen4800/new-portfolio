import { NextPage } from 'next';
import Image from 'next/image';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

const NotFound: NextPage = () => {
  return (
    <>
      <motion.span
        css={css`
          font-size: 10rem;
          font-family: futura-pt, sans-serif;
          font-weight: 700;
          font-style: italic;
          text-align: center;
          width: 100%;
          display: inline-block;
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
