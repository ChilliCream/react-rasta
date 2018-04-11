// These imports are needed for declaration files
import * as _React from "react";
import * as styledComponents from "styled-components";
// -------------------------------------------------------------------
import { ThemedStyledComponentsModule } from "styled-components";
import Theme from "./Theme";

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  withTheme,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export default styled;
export { css, injectGlobal, keyframes, withTheme, ThemeProvider };
