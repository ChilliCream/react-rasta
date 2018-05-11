import map from "./map";

describe("map", () => {
  it("should map a PropertyValuesMap to BreakpointValuesMap", () => {
    // arrange
    const input = {
      number: {
        xs: 540,
        md: 670,
      },
      string: {
        sm: "value 1",
        md: "value 2",
      },
    };

    // act
    const output = map(input);

    // arrange
    expect(output).toEqual({
      xs: {
        number: 540,
      },
      sm: {
        string: "value 1",
      },
      md: {
        number: 670,
        string: "value 2",
      },
    });
  });

  it("should map if a property is set to 5", () => {
    // arrange
    const input = {
      number: 5,
    };

    // act
    const output = map(input);

    // arrange
    expect(output).toEqual({
      xs: {
        number: 5,
      },
    });
  });

  it("should map if a property is set to undefined", () => {
    // arrange
    const input = {
      number: undefined,
    };

    // act
    const output = map(input);

    // arrange
    expect(output).toEqual({
      xs: {
        number: undefined,
      },
    });
  });

  it("should map if the valueMap is {}", () => {
    // arrange
    const input = {};

    // act
    const output = map(input);

    // arrange
    expect(output).toEqual({});
  });

  it("should map if the valueMap is undefined", () => {
    // arrange
    const input = undefined;

    // act
    const output = map(input);

    // arrange
    expect(output).toBeNull();
  });
});
