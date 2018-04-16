import breakpoints from "./breakpoints";
import { Theme } from "../theme";

export default (theme?: Theme): string | null => {
  const breakpointMap = breakpoints(theme);

  for (let key in breakpointMap) {
    if (breakpointMap[key] === 0) {
      return key;
    }
  }

  return null;
};
