import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const globalStyle = css`
  ${reset};
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  body {
    font-family: Montserrat, sans-serif;
  }
`;
const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;
export default GlobalStyle;
