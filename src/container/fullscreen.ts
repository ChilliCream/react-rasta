import {createGlobalStyle} from "../theme/StyledComponents";

const FullscreenStyles = createGlobalStyle`
  html,
  body,
  body > div {
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
  }
`;

export default FullscreenStyles;
