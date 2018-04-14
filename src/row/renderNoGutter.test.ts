// Module mocks must mocked before importing modules
jest.mock("../utils/bootstrap", () => jest.fn());

import renderNoGutter from "./renderNoGutter";

describe("renderNoGutter", () => {
  it("should render container width (input: true)", () => {
    // arrange
    const input = true;

    // act
    const output = renderNoGutter(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toMatch(
      /margin\-right:0;margin\-left:0;>.*?{padding\-right:0;padding\-left:0;}/gi
    );
  });

  it("should render container width (input: false)", () => {
    // arrange
    const input = false;

    // act
    const output = renderNoGutter(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe("");
  });

  it("should render container width (input: undefined)", () => {
    // arrange
    const input = undefined;

    // act
    const output = renderNoGutter(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe("");
  });
});
