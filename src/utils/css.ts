import flatten from "./flatten";
import { css } from "../theming/StyledComponents";
import { SimpleInterpolation } from "styled-components";

export default (
  strings: TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): string => {
  return flatten(css(strings, ...interpolations));
};
