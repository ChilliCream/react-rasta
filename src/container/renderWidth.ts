export default (width?: number): string => {
  if (width != null && typeof width === "number") {
    return `max-width: ${width}px;`;
  }

  return "";
};
