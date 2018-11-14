import {createGlobalStyle} from "../theme/StyledComponents";

const BootstrapStyles = createGlobalStyle`
  @viewport {
    width: device-width;
  }

  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;

export default BootstrapStyles;
