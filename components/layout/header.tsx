import Link from 'next/link';
import { css } from '@emotion/react';

const header = css`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 690px;
  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const siteTitle = css`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: Montserrat Alternates, sans-serif;
  cursor: pointer;
`;

const navLinkStyle = css`
  position: relative;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
  &::after {
    position: absolute;
    bottom: -6px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: #1a3eeb;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
  }
  &:hover::after {
    bottom: -2px;
    opacity: 1;
    visibility: visible;
  }
  @media (prefers-color-scheme: dark) {
    color: white;
    &::after {
      background: #698cff;
    }
  }
`;

const Header = () => {
  return (
    <header css={header}>
      <Link href="/">
        <a css={siteTitle}>
          cupmen
          <span
            css={css`
              font-weight: 200;
            `}
          >
            4800
          </span>
        </a>
      </Link>
      <nav css={css``}>
        <ul
          css={css`
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            @media (max-width: 640px) {
              display: none;
            }
          `}
        >
          <li>
            <Link href="/works">
              <a css={navLinkStyle}>Works</a>
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <a css={navLinkStyle}>Resume</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
