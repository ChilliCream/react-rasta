import defaultWidth from "./defaultWidth";
import width from "./width";

describe("width", () => {
  it("should get container width from the props", () => {
    // arrange
    const input = {
      width: {xs: 50},
      theme: {
        containerWidth: {md: 100},
      },
    };

    // act
    const output = width(input);

    // assert
    expect({xs: 50}).toEqual(output);
  });

  it("should get container width from the theme", () => {
    // arrange
    const input = {
      theme: {
        containerWidth: {md: 100},
      },
    };

    // act
    const output = width(input);

    // assert
    expect({md: 100}).toEqual(output);
  });

  it("should get default container width (input: {})", () => {
    // arrange
    const input = {};

    // act
    const output = width(input);

    // assert
    expect(defaultWidth).toEqual(output);
  });

  it("should get default container width (input: undefined)", () => {
    // arrange
    const input = undefined;

    // act
    const output = width(input);

    // assert
    expect(defaultWidth).toEqual(output);
  });
});
