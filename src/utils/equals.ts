export default (a: string | undefined, b: string[]) => {
  return a != null && b.indexOf(a) > -1;
};
