import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    /* 폰트정의/미지원시,고딕체 */
    font-family: 'Pretendard', sans-serif;
    /* ThemeProvider props 불러오기 */
    background-color: ${(props: any) => props.theme.colors.background};
    color: ${(props: any) => props.theme.colors.text};
  }
  * {
    box-sizing: border-box;
  } 
`;

export default GlobalStyle;
