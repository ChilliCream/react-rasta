import {InterpolationValue} from "styled-components";

export default (interpolations: InterpolationValue[]): string => {
  return interpolations.join("");
};
