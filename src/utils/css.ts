import {SimpleInterpolation} from "styled-components";
import {css} from "../theme/StyledComponents";
import flatten from "./flatten";

export default (
  strings: TemplateStringsArray,
  // note: work-a-round -> tslint is expecting trailing comma here but this is a bug
  // tslint:disable-next-line:trailing-comma
  ...interpolations: SimpleInterpolation[]
): string => {
  return flatten(css(strings, ...interpolations));
};
