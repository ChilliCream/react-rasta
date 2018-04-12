import Theme from "./Theme";

export default (theme?: Theme) => {
  const gutterWidth = theme!.gutterWidth || 30;

  return gutterWidth / 2;
};
