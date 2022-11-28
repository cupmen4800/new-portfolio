import { css } from '@emotion/react';
import CardLink from 'components/module/cardLink';
import { motion } from 'framer-motion';
import { microCMSclient } from 'libs/microcms';

const Works = ({ products }: any) => {
  return (
    <>
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
        Works
      </motion.h1>
      <div
        css={css`
          margin-left: auto;
          margin-right: auto;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        `}
      >
        {products.map(
          (products: {
            title: string;
            description: string;
            image: any;
            createdAt: string;
            link: string;
            tech: string;
          }) => (
            <CardLink
              key={products.createdAt}
              title={products.title}
              link={products.link}
              image={products.image.url}
            />
          )
        )}
      </div>
    </>
  );
};
export default Works;

export const getStaticProps = async () => {
  const data = await microCMSclient.get({ endpoint: 'portfolio' });

  return {
    props: {
      products: data.contents,
    },
  };
};
