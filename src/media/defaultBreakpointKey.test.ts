import { defaultBreakpointKey } from ".";

describe("defaultBreakpointKey", () => {
  it("should return 'xs'", () => {
    // arrange
    const input = undefined;

    // act
    const output = defaultBreakpointKey(input);

    // assert
    expect(output).toBe("xs");
  });

  it("should return 'small'", () => {
    // arrange
    const input = {
      breakpoints: {
        small: 0,
        big: 500
      }
    };

    // act
    const output = defaultBreakpointKey(input);

    // assert
    expect(output).toBe("small");
  });

  it("should return null", () => {
    // arrange
    const input = {
      breakpoints: {
        small: 200,
        big: 500
      }
    };

    // act
    const output = defaultBreakpointKey(input);

    // assert
    expect(output).toBeNull();
  });
});
