import {SimpleInterpolation} from "styled-components";
import {css} from "../theme/StyledComponents";
import flatten from "./flatten";

export default (
  strings: TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
): string => flatten(css(strings, ...interpolations));
