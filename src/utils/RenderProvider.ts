import { PropertyValue } from "../media";

interface RenderProvider {
  [key: string]: (value?: PropertyValue) => string;
}

export default RenderProvider;
