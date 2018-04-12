import { SimpleInterpolation } from "styled-components";
import flatten from "./flatten";
import { css } from "../theme/StyledComponents";

export default (
  strings: TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): string => {
  return flatten(css(strings, ...interpolations));
};
