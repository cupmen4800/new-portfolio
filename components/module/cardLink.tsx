import Link from 'next/link';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

const CardLink = (props: { title: any; link: any; image: any }) => {
  return (
    <Link href={props.link}>
      <motion.a
        css={css`
          border-radius: 0.25rem;
          width: 35%;
          padding: 50px 30px 50px 30px;
          background: #f7f7f7;
          transition: all 0.5s 0s ease;
          &:hover {
            background: #242430;
            color: white;
          }
          animation-name: fadeInAnime;
          animation-duration: 1s;
          animation-fill-mode: forwards;
          opacity: 0;
          @media (prefers-color-scheme: dark) {
            background: #2e2e33;
            &:hover {
              background: #3c3c42;
            }
          }
        `}
        initial={{ opacity: 0, y: 10 }} // 初期状態
        animate={{ opacity: 1, y: 0 }} // マウント時
        exit={{ opacity: 0, y: 10 }} // アンマウント時
        transition={{
          duration: 0.25,
        }}
      >
        <img
          css={css`
            border-radius: 0.25rem;
            width: 100%;
            aspect-ratio: 1;
            position: relative;
            object-fit: cover;
          `}
          src={props.image}
          alt=""
        />
        <h2
          css={css`
            font-size: 1.25rem;
            font-weight: 700;
            padding: 10px;
            text-align: center;
          `}
        >
          {props.title}
        </h2>
      </motion.a>
    </Link>
  );
};

export default CardLink;
