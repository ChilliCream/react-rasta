import {InterpolationValue} from "styled-components";

export default (interpolations: InterpolationValue[]): string =>
  interpolations.join("");
