import {Theme} from "../theme";
import breakpoints from "./breakpoints";

export default (theme?: Theme): string | null => {
  const breakpointMap = breakpoints(theme);

  for (const key in breakpointMap) {
    if (breakpointMap[key] === 0) {
      return key;
    }
  }

  return null;
};
