import {BreakpointValues} from "../media";
import ContainerProperties from "./ContainerProperties";
import defaultWidth from "./defaultWidth";

export default (props?: ContainerProperties): BreakpointValues<number> =>
  (props && (props.width || (props.theme && props.theme.containerWidth))) ||
  defaultWidth;
