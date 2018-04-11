import { PropertyValue } from "../BreakpointValue";

export default interface RenderProvider {
  [key: string]: (value?: PropertyValue) => string;
}
