import flatten from "../__utils__/flatten";
import renderGutter from "./renderGutter";

describe("renderGutter", () => {
  it("should render container width (input: true)", () => {
    // arrange
    const input = true;

    // act
    const output = renderGutter(input);

    // assert
    expect(flatten(output)).toMatch(
      /margin\-right:0;margin\-left:0;>.*?{padding\-right:0;padding\-left:0;}/gi,
    );
  });

  it("should render container width (input: false)", () => {
    // arrange
    const input = false;

    // act
    const output = renderGutter(input);

    // assert
    expect(flatten(output)).toMatch(
      /margin\-right:\-15px;margin\-left:\-15px;>.*?{padding\-right:15px;padding\-left:15px;}/gi,
    );
  });

  it("should render container width (input: undefined)", () => {
    // arrange
    const input = undefined;

    // act
    const output = renderGutter(input);

    // assert
    expect(flatten(output)).toMatch(
      /margin\-right:\-15px;margin\-left:\-15px;>.*?{padding\-right:15px;padding\-left:15px;}/gi,
    );
  });
});
