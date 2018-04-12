import map from "./map";

describe("map", () => {
  it("should map a PropertyValuesMap to BreakpointValuesMap", () => {
    // arrange
    const input = {
      number: {
        xs: 540,
        md: 670
      },
      string: {
        sm: "value 1",
        md: "value 2"
      }
    };

    // act
    const output = map(input);

    // arrange
    expect(output).toEqual({
      xs: {
        number: 540
      },
      sm: {
        string: "value 1"
      },
      md: {
        number: 670,
        string: "value 2"
      }
    });
  });
});
