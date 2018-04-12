import defaultWidth from "./defaultWidth";
import ContainerProperties from "./ContainerProperties";
import { BreakpointValues } from "../media";

export default (props?: ContainerProperties): BreakpointValues<number> => {
  return props!.width || props!.theme!.containerWidth || defaultWidth;
};
