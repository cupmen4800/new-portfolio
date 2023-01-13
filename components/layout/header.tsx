import Link from 'next/link';
import { css } from '@emotion/react';
import { useState } from 'react';
import { VscThreeBars } from 'react-icons/vsc';
import { theme, darkTheme } from '../theme';
const header = css`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 690px;
  @media (max-width: 640px) {
    width: 100%;
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

export const siteTitle = css`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: Montserrat Alternates, sans-serif;
  cursor: pointer;
  @media (max-width: 640px) {
    font-size: 2rem;
  }
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

const drawerLink = css`
  font-size: 18px;
  font-weight: 300;
  padding: 5px 5px;
`;

const Header = () => {
  const [drawerState, setDrawer] = useState(false);
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
          <li>
            <Link href="/blog">
              <a css={navLinkStyle}>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div
        css={css`
          @media (min-width: 200px) {
            z-index: 9999;
            position: relative;
            cursor: pointer;
            display: inline-block;
            left: 0px;
            &:hover .description3 {
              display: flex;
              flex-direction: column;
              gap: 12px;
              top: 35px;
              left: -180px;
            }
          }
          @media (min-width: 640px) {
            display: none;
          }
        `}
      >
        <button
          css={css`
            font-size: 1.2rem;
            width: 25px;
            height: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
          onClick={() => {
            setDrawer(!drawerState);
          }}
        >
          <VscThreeBars />
        </button>
        {drawerState ? (
          <div
            className="description3"
            css={css`
              display: none;
              position: absolute;
              padding: 10px;
              font-size: 12px;
              line-height: 1.6em;
              color: #fff;
              border-radius: 5px;
              background: ${theme.colors.backgroundColor};
              width: 200px;
              @media (prefers-color-scheme: dark) {
                background: #242427;
              } ;
            `}
          >
            <Link href="/">
              <a css={drawerLink}>About</a>
            </Link>
            <Link href="/works">
              <a css={drawerLink}>Works</a>
            </Link>
            <Link href="/resume">
              <a css={drawerLink}>Resume</a>
            </Link>
            <Link href="/blog">
              <a css={drawerLink}>Blog</a>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default Header;
