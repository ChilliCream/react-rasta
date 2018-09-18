export default (width?: number): string => {
  // the next expression is for JS projects
  // tslint:disable-next-line:strict-type-predicates
  if (width != null && typeof width === "number") {
    return `max-width: ${width}px;`;
  }

  return "";
};
