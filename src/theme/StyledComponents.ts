import {ComponentClass, StatelessComponent} from "react";
import * as styledComponents from "styled-components";
import {ThemedStyledComponentsModule} from "styled-components";
import Theme from "./Theme";

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export default styled;
export {css, injectGlobal, keyframes, ThemeProvider};
