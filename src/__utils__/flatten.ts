export default (source?: string) => {
  if (source == null) {
    return "";
  } else {
    return source.replace(/\n|\r|\s|\t/gi, "");
  }
};
