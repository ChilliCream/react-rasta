import {SimpleInterpolation} from "styled-components";
import {BreakpointMap} from "../media";
import _css from "./css";

export default (breakpoints: BreakpointMap, key: string) => {
  return (
    strings: TemplateStringsArray,
    // note: work-a-round -> tslint is expecting trailing comma here but this is a bug
    // tslint:disable-next-line:trailing-comma
    ...interpolations: SimpleInterpolation[]
  ): string => {
    const minWidth = breakpoints[key];
    const mediaBody = _css(strings, ...interpolations);

    if (minWidth && mediaBody.match(/\S/g)) {
      return _css`
        @media (min-width: ${minWidth}px) {
          ${mediaBody}
        }
      `;
    }

    return mediaBody;
  };
};
