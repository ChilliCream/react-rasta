import {ComponentClass, StatelessComponent} from "react";
import * as styledComponents from "styled-components";
import Theme from "./Theme";

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export default styled;
export {css, injectGlobal, keyframes, ThemeProvider};
