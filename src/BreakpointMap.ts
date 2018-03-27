export default interface BreakpointMap {
  [key: string]: number;
}

export const defaultBreakpoints: BreakpointMap = {
  'xs': 0,
  'sm': 576, // 540
  'md': 768, // 720
  'lg': 992, // 960
  'xl': 1200 // 1140
};