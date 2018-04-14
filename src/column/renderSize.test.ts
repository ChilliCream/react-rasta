import renderSize from "./renderSize";

describe("renderSize", () => {
  it("should render css for flex size (input: 'auto')", () => {
    // arrange
    const input = "auto";

    // act
    const output = renderSize(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:100%;"
    );
  });

  it("should render css for flex size (input: 'none')", () => {
    // arrange
    const input = "none";

    // act
    const output = renderSize(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-webkit-box-flex:0;-ms-flex:00auto;flex:00auto;width:auto;max-width:none;"
    );
  });

  it("should render css for flex size (input: undefined)", () => {
    // arrange
    const input = undefined;

    // act
    const output = renderSize(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe("");
  });

  it("should render css for flex size (input: 6)", () => {
    // arrange
    const input = 6;

    // act
    const output = renderSize(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-webkit-box-flex:0;-ms-flex:0050.000000%;flex:0050.000000%;max-width:50.000000%;"
    );
  });
});
