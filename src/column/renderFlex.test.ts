import renderFlex from "./renderFlex";
import flatten from "../__utils__/flatten";

describe("renderFlex", () => {
  it("should render flex appropriate (input: 'grow')", () => {
    // arrange
    const input = "grow";

    // act
    const output = renderFlex(input);

    // assert
    expect(flatten(output)).toBe("flex:auto!important;");
  });

  it("should render flex appropriate (input: 'none')", () => {
    // arrange
    const input = "none";

    // act
    const output = renderFlex(input);

    // assert
    expect(flatten(output)).toBe("flex:initial!important;");
  });

  it("should render flex appropriate (input: 'shrink')", () => {
    // arrange
    const input = "shrink";

    // act
    const output = renderFlex(input);

    // assert
    expect(flatten(output)).toBe("flex:none!important;");
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
