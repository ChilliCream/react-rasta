import renderAlignContent from "./renderAlignContent";

describe("renderAlignContent", () => {
  it("should render align-content appropriate (input: 'center')", () => {
    // arrange
    const input = "center";

    // act
    const output = renderAlignContent(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "align-content:center!important;"
    );
  });

  it("should render align-content appropriate (input: 'flex-end')", () => {
    // arrange
    const input = "flex-end";

    // act
    const output = renderAlignContent(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "align-content:flex-end!important;"
    );
  });

  it("should render align-content appropriate (input: 'flex-start')", () => {
    // arrange
    const input = "flex-start";

    // act
    const output = renderAlignContent(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "align-content:flex-start!important;"
    );
  });

  it("should render align-content appropriate (input: 'space-around')", () => {
    // arrange
    const input = "space-around";

    // act
    const output = renderAlignContent(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "align-content:space-around!important;"
    );
  });

  it("should render align-content appropriate (input: 'space-between')", () => {
    // arrange
    const input = "space-between";

    // act
    const output = renderAlignContent(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "align-content:space-between!important;"
    );
  });

  it("should render align-content appropriate (input: 'stretch')", () => {
    // arrange
    const input = "stretch";

    // act
    const output = renderAlignContent(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "align-content:stretch!important;"
    );
  });

  it("should render align-content appropriate (input: undefined)", () => {
    // arrange
    const input = undefined;

    // act
    const output = renderAlignContent(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe("");
  });
});
