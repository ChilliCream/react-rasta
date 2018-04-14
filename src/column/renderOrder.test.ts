import renderOrder from "./renderOrder";

describe("renderOrder", () => {
  it("should render css for flex order (input: 'first')", () => {
    // arrange
    const input = "first";

    // act
    const output = renderOrder(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1;"
    );
  });

  it("should render css for flex order (input: 0)", () => {
    // arrange
    const input = 0;

    // act
    const output = renderOrder(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1;"
    );
  });

  it("should render css for flex order (input: 5)", () => {
    // arrange
    const input = 5;

    // act
    const output = renderOrder(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4;"
    );
  });

  it("should render css for flex order (input: 'last')", () => {
    // arrange
    const input = "last";

    // act
    const output = renderOrder(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12;"
    );
  });

  it("should render css for flex order (input: 13)", () => {
    // arrange
    const input = 13;

    // act
    const output = renderOrder(input);

    // assert
    expect(output.replace(/\n|\r|\s|\t/gi, "")).toBe(
      "-webkit-box-ordinal-group:13;-ms-flex-order:12;order:12;"
    );
  });
});
