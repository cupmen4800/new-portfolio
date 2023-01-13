import Head from 'next/head';
import { NextPage } from 'next';
import { css } from '@emotion/react';
import CardLink from 'components/module/cardLink';
import { buildClient } from 'libs/contentful';
import { motion } from 'framer-motion';

const client = buildClient();

const Blog: NextPage = ({ articleData }: any) => {
  // rss feed の内容が json として表示される
  console.log(articleData);
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
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 25px;
          margin-bottom: 25px;
          width: 690px;
        `}
      >
        {articleData.items.length === 0 && (
          <h2
            css={css`
              font-size: 5rem;
              font-family: futura-pt, sans-serif;
              font-weight: 700;
              font-style: italic;
              text-align: center;
              width: 100%;
              display: inline-block;
              margin-top: 50px;
              margin-bottom: 50px;
            `}
          >
            No Articles
          </h2>
        )}
        {articleData.items.map(
          ({
            title,
            link,
            pubData,
          }: {
            title: string;
            link: string;
            pubData: string;
          }) => (
            <CardLink key={pubData} title={title} link={link} width="100%" />
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
  const zennUrl = 'https://zenn.dev/cupmen4800/feed';
  const daTa = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=${zennUrl}`
  );

  return {
    props: {
      articleData: await daTa.json(),
    },
  };
};

export default Blog;
