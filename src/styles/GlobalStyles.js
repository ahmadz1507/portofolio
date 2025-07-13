// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* CSS Reset Dasar */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Font Global */
  body {
    font-family: 'Montserrat', sans-serif; /* Font utama */
    background-color: #000000; /* Warna dasar hitam */
    color: #F0F0F0; /* Warna teks terang */
    line-height: 1.6;
    overflow-x: hidden; /* Mencegah scroll horizontal yang tidak diinginkan */
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif; /* Font untuk heading */
    color: #E0E0E0;
    margin-bottom: 0.5em;
  }

  a {
    color: #4CAF50; /* Warna hijau aksen untuk link */
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  /* Scrollbar Kustom (Opsional, untuk tampilan yang lebih mulus) */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #1a1a1a;
  }
  ::-webkit-scrollbar-thumb {
    background: #4CAF50;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #388E3C;
  }
`;

export default GlobalStyles;