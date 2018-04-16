import ContainerProperties from "./ContainerProperties";
import defaultWidth from "./defaultWidth";
import { BreakpointValues } from "../media";

export default (props?: ContainerProperties): BreakpointValues<number> => {
  return (
    (props &&
      (props!.width || (props.theme && props!.theme!.containerWidth))) ||
    defaultWidth
  );
};
