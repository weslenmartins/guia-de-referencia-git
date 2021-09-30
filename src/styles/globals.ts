import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
  v2.0 | 20110126
  License: none (public domain)
  */
 :root {
    --bg-color: #1A1A20;
    --color-white: hsl(0, 0%, 100%);
    --color-content: hsl(0, 0%, 100%);
    --color-content-soft: hsla(0, 0%, 100%, .6);
    --color-theme: hsl(10, 86%, 57%);
    --color-theme-light: hsl(10, 86%, 67%);
    --border-color: hsla(0, 0%, 100%, .1);
    --font-weight-extra-light: 200;
    --font-weight-light: 300;
    --font-weight-semi-bold: 600;
    /* --font-weight-extrabold: 800; */
    --font-family: 'Inter', sans-serif;
    --zindex-default: 1;
    --zindex-overlay: 6;
    --zindex-header: 10;
    --border-radius: 4px;
    --transition-in: all .4s ease;
    --transition-out: all .6s ease;
  }

  ::selection {
    background: var(--color-theme-light);
  }

  ::-webkit-input-placeholder {
    color: rgba(122,122,122,.75);
  }

  :-ms-input-placeholder {
    color: rgba(122,122,122,.75);
  }

  ::placeholder {
    color: rgba(122,122,122,.75);
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }
  html {
    font-size: 16px;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    scroll-behavior: auto;
  }
  body {
    line-height: 1;
    font-size: 16px;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: var(--bg-color);
    color: var(--color-content);
    font-family: 'Inter', sans-serif;
    font-weight: var(--font-weight-light);

    @media (min-width: 768px) {
      background: url(/images/bg-hero.jpg?ver=1) no-repeat center top var(--bg-color);
    }
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  a {
    color: var(--color-white);
    text-decoration: none;

    &:hover, &:focus {
      color: var(--color-theme-light);
    }
  }

  strong {
    font-weight: var(--font-weight-semi-bold);
  }

  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }

  @media (min-width: 1920px) {
    .container {
      max-width: 1345px;
    }
  }
`

export default GlobalStyles
