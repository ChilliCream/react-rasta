import gutterWidth from "./gutterWidth";

describe("gutterWidth", () => {
  it("should return 15 (default value) if not specified", () => {
    // arrange
    const theme = {};

    // act
    const output = gutterWidth(theme);

    // arrange
    expect(output).toEqual(15);
  });

  it("should return 20 if set to 40", () => {
    // arrange
    const theme = { gutterWidth: 40 };

    // act
    const output = gutterWidth(theme);

    // arrange
    expect(output).toEqual(20);
  });
});
