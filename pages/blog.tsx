import Head from 'next/head';
import { NextPage } from 'next';
import { css } from '@emotion/react';
import CardLink from 'components/module/cardLink';
import { buildClient } from 'libs/contentful';
import { motion } from 'framer-motion';

const client = buildClient();

const Blog: NextPage = ({ products }: any) => {
  return (
    <>
      <Head>
        <title>cupmen4800-portfolio</title>
      </Head>
      <motion.h1
        css={css`
          font-size: 2rem;
          font-weight: 700;
          font-family: futura-pt, sans-serif;
          width: 100vw;
          text-align: center;
        `}
        initial={{ opacity: 0, y: 10 }} // 初期状態
        animate={{ opacity: 1, y: 0 }} // マウント時
        exit={{ opacity: 0, y: 10 }} // アンマウント時
        transition={{
          duration: 0.25,
        }}
      >
        Blog
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
        {products.articleData.map(
          ({
            sys,
            fields,
          }: {
            sys: any;
            fields: {
              title: string;
              contents: string;
              sumnail: any;
              slug: string;
              category: string;
              detail: string;
            };
          }) => (
            <CardLink
              key={sys.id}
              title={fields.title}
              link={`https://leeks.dev/article/${fields.slug}`}
              image={fields.sumnail.fields.file.url}
            />
          )
        )}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await client.getEntries({
    content_type: 'article',
  });

  return {
    props: {
      products: {
        articleData: data.items,
      },
    },
  };
};

export default Blog;
