import renderAlignItems from "./renderAlignItems";

describe("renderAlignItems", () => {
  it("should render align-items appropriate (input: 'baseline')", () => {
    // arrange
    const input = "baseline";

    // act
    const output = renderAlignItems(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "align-items:baseline!important;"
    );
  });

  it("should render align-items appropriate (input: 'center')", () => {
    // arrange
    const input = "center";

    // act
    const output = renderAlignItems(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "align-items:center!important;"
    );
  });

  it("should render align-items appropriate (input: 'flex-end')", () => {
    // arrange
    const input = "flex-end";

    // act
    const output = renderAlignItems(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "align-items:flex-end!important;"
    );
  });

  it("should render align-items appropriate (input: 'flex-start')", () => {
    // arrange
    const input = "flex-start";

    // act
    const output = renderAlignItems(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "align-items:flex-start!important;"
    );
  });

  it("should render align-items appropriate (input: 'stretch')", () => {
    // arrange
    const input = "stretch";

    // act
    const output = renderAlignItems(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "align-items:stretch!important;"
    );
  });

  it("should render allign-items appropriate (input: undefined)", () => {
    // arrange
    const input = undefined;

    // act
    const output = renderAlignItems(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe("");
  });
});
