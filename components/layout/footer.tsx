import { css } from '@emotion/react';

const Footer = () => {
  return (
    <footer
      css={css`
        padding: 1rem;
        width: 100%;
        height: 4rem;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <span
        css={css`
          color: #646464;
        `}
      >
        © 2022 cupmen4800 All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
