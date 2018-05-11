import flatten from "../__utils__/flatten";
import renderWidth from "./renderWidth";

describe("renderWidth", () => {
  it("should render container width (input: 500)", () => {
    // arrange
    const input = 500;

    // act
    const output = renderWidth(input);

    // assert
    expect(flatten(output)).toBe("max-width:500px;");
  });

  it("should render container width (input: undefined)", () => {
    // arrange
    const input = undefined;

    // act
    const output = renderWidth(input);

    // assert
    expect(flatten(output)).toBe("");
  });
});
