import flatten from "../__utils__/flatten";
import renderSize from "./renderSize";

describe("renderSize", () => {
  it("should render css for flex size (input: 'auto')", () => {
    // arrange
    const input = "auto";

    // act
    const output = renderSize(input);

    // assert
    expect(flatten(output)).toBe("flex-basis:0;flex-grow:1;max-width:100%;");
  });

  it("should render css for flex size (input: 'none')", () => {
    // arrange
    const input = "none";

    // act
    const output = renderSize(input);

    // assert
    expect(flatten(output)).toBe("flex:00auto;width:auto;max-width:none;");
  });

  it("should render css for flex size (input: undefined)", () => {
    // arrange
    const input = undefined;

    // act
    const output = renderSize(input);

    // assert
    expect(flatten(output)).toBe("");
  });

  it("should render css for flex size (input: 0)", () => {
    // arrange
    const input = 0;

    // act
    const output = renderSize(input as any);

    // assert
    expect(flatten(output)).toBe("");
  });

  it("should render css for flex size (input: -1)", () => {
    // arrange
    const input = -1;

    // act
    const output = renderSize(input as any);

    // assert
    expect(flatten(output)).toBe("");
  });

  it("should render css for flex size (input: 6)", () => {
    // arrange
    const input = 6;

    // act
    const output = renderSize(input);

    // assert
    expect(flatten(output)).toBe("flex:0050.000000%;max-width:50.000000%;");
  });
});
