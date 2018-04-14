import renderOffset from "./renderOffset";

describe("renderOffset", () => {
  it("should return css for offset (input: 1)", () => {
    // arrange
    const input = 1;

    // act
    const output = renderOffset(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe("margin-left:8.333333%;");
  });

  it("should return empty string (input: undefined)", () => {
    // arrange
    const input = undefined;

    // act
    const output = renderOffset(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe("");
  });
});
