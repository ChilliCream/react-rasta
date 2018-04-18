import renderWrap from "./renderWrap";

describe("renderWrap", () => {
  it("should render wrap appropriate (input: 'nowrap')", () => {
    // arrange
    const input = "nowrap";

    // act
    const output = renderWrap(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe("flex-wrap:nowrap;");
  });

  it("should render wrap appropriate (input: 'wrap')", () => {
    // arrange
    const input = "wrap";

    // act
    const output = renderWrap(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe("flex-wrap:wrap;");
  });

  it("should render wrap appropriate (input: 'wrap-reverse')", () => {
    // arrange
    const input = "wrap-reverse";

    // act
    const output = renderWrap(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe("flex-wrap:wrap-reverse;");
  });

  it("should render wrap appropriate (input: undefined)", () => {
    // arrange
    const input = undefined;

    // act
    const output = renderWrap(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe("flex-wrap:wrap;");
  });
});
