import { PropertyValue } from "../media";

export default interface RenderProvider {
  [key: string]: (value?: PropertyValue) => string;
}
