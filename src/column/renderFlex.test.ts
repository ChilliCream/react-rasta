import renderFlex from "./renderFlex";
import flatten from "../__utils__/flatten";

describe("renderFlex", () => {
  it("should render flex appropriate (input: 'grow')", () => {
    // arrange
    const input = "grow";

    // act
    const output = renderFlex(input);

    // assert
    expect(flatten(output)).toBe("flex-grow:1!important;");
  });

  it("should render flex appropriate (input: 'none')", () => {
    // arrange
    const input = "none";

    // act
    const output = renderFlex(input);

    // assert
    expect(flatten(output)).toBe("");
  });

  it("should render flex appropriate (input: 'shrink')", () => {
    // arrange
    const input = "shrink";

    // act
    const output = renderFlex(input);

    // assert
    expect(flatten(output)).toBe("flex-shrink:0!important;");
  });

  it("should render flex appropriate (input: undefined)", () => {
    // arrange
    const input = undefined;

    // act
    const output = renderFlex(input);

    // assert
    expect(flatten(output)).toBe("");
  });
});
