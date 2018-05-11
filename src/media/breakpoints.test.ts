import breakpoints from "./breakpoints";
import defaultBreakpoints from "./defaultBreakpoints";

describe("breakpoints", () => {
  it("should get breakpoints from the theme", () => {
    // arrange
    const input = {
      breakpoints: {phone: 30, tablet: 60},
    };

    // act
    const output = breakpoints(input);

    // assert
    expect({phone: 30, tablet: 60}).toEqual(output);
  });

  it("should get default breakpoints (input: {})", () => {
    // arrange
    const input = {};

    // act
    const output = breakpoints(input);

    // assert
    expect(defaultBreakpoints).toEqual(output);
  });

  it("should get default breakpoints (input: undefined)", () => {
    // arrange
    const input = undefined;

    // act
    const output = breakpoints(input);

    // assert
    expect(defaultBreakpoints).toEqual(output);
  });
});
