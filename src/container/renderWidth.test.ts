import renderWidth from "./renderWidth";

describe("renderWidth", () => {
  it("should render container width (input: 500)", () => {
    // arrange
    const input = 500;

    // act
    const output = renderWidth(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe("max-width:500px;");
  });

  it("should render container width (input: undefined)", () => {
    // arrange
    const input = undefined;

    // act
    const output = renderWidth(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe("");
  });
});
