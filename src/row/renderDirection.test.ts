// Module mocks must mocked before importing modules
jest.mock("../utils/bootstrap", () => jest.fn());

import renderDirection from "./renderDirection";

describe("renderDirection", () => {
  it("should render direction appropriate (input: 'column')", () => {
    // arrange
    const input = "column";

    // act
    const output = renderDirection(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-webkit-box-orient:vertical!important;-webkit-box-direction:normal!important;" +
        "-ms-flex-direction:column!important;flex-direction:column!important;"
    );
  });

  it("should render direction appropriate (input: 'column-reverse')", () => {
    // arrange
    const input = "column-reverse";

    // act
    const output = renderDirection(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-webkit-box-orient:vertical!important;-webkit-box-direction:reverse!important;" +
        "-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important;"
    );
  });

  it("should render direction appropriate (input: 'row')", () => {
    // arrange
    const input = "row";

    // act
    const output = renderDirection(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;" +
        "-ms-flex-direction:row!important;flex-direction:row!important;"
    );
  });

  it("should render direction appropriate (input: 'row-reverse')", () => {
    // arrange
    const input = "row-reverse";

    // act
    const output = renderDirection(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-webkit-box-orient:horizontal!important;-webkit-box-direction:reverse!important;" +
        "-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important;"
    );
  });

  it("should render direction appropriate (input: undefined)", () => {
    // arrange
    const input = undefined;

    // act
    const output = renderDirection(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe("");
  });
});
