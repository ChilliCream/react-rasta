import renderJustifyContent from "./renderJustifyContent";

describe("renderJustifyContent", () => {
  it("should render justify-content appropriate (input: 'center')", () => {
    // arrange
    const input = "center";

    // act
    const output = renderJustifyContent(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-webkit-box-pack:center!important;-ms-flex-pack:center!important;justify-content:center!important;"
    );
  });

  it("should render justify-content appropriate (input: 'flex-end')", () => {
    // arrange
    const input = "flex-end";

    // act
    const output = renderJustifyContent(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-webkit-box-pack:end!important;-ms-flex-pack:end!important;justify-content:flex-end!important;"
    );
  });

  it("should render justify-content appropriate (input: 'flex-start')", () => {
    // arrange
    const input = "flex-start";

    // act
    const output = renderJustifyContent(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-webkit-box-pack:start!important;-ms-flex-pack:start!important;justify-content:flex-start!important;"
    );
  });

  it("should render justify-content appropriate (input: 'space-around')", () => {
    // arrange
    const input = "space-around";

    // act
    const output = renderJustifyContent(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-ms-flex-pack:distribute!important;justify-content:space-around!important;"
    );
  });

  it("should render justify-content appropriate (input: 'space-between')", () => {
    // arrange
    const input = "space-between";

    // act
    const output = renderJustifyContent(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-webkit-box-pack:justify!important;-ms-flex-pack:justify!important;justify-content:space-between!important;"
    );
  });

  it("should render justify-content appropriate (input: undefined)", () => {
    // arrange
    const input = undefined;

    // act
    const output = renderJustifyContent(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe("");
  });
});
