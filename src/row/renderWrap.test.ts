// Module mocks must mocked before importing modules
jest.mock("../utils/bootstrap", () => jest.fn());

import renderWrap from "./renderWrap";

describe("renderWrap", () => {
  it("should render wrap appropriate (input: 'nowrap')", () => {
    // arrange
    const input = "nowrap";

    // act
    const output = renderWrap(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-ms-flex-wrap:nowrap;flex-wrap:nowrap;"
    );
  });

  it("should render wrap appropriate (input: 'wrap')", () => {
    // arrange
    const input = "wrap";

    // act
    const output = renderWrap(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-ms-flex-wrap:wrap;flex-wrap:wrap;"
    );
  });

  it("should render wrap appropriate (input: 'wrap-reverse')", () => {
    // arrange
    const input = "wrap-reverse";

    // act
    const output = renderWrap(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;"
    );
  });

  it("should render direction appropriate (input: undefined)", () => {
    // arrange
    const input = undefined;

    // act
    const output = renderWrap(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-ms-flex-wrap:wrap;flex-wrap:wrap;"
    );
  });
});
