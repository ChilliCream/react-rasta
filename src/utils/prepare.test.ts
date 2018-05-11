import prepare from "./prepare";

describe("prepare", () => {
  it("should return { xs: 444, md: 666 }", () => {
    // arrange
    const input = {
      xs: 444,
      md: 666,
    };

    // act
    const output = prepare(input);

    // arrange
    expect(output).toEqual({
      xs: 444,
      md: 666,
    });
  });

  it("should return { xs: undefined, md: 999 }", () => {
    // arrange
    const input = {
      md: 999,
    };

    // act
    const output = prepare(input);

    // arrange
    expect(output).toEqual({
      xs: undefined,
      md: 999,
    });
  });

  it("should return { xs: 888 }", () => {
    // arrange
    const input = {
      xs: 888,
    };

    // act
    const output = prepare(input);

    // arrange
    expect(output).toEqual({
      xs: 888,
    });
  });

  it("should return { xs: 777 }", () => {
    // arrange
    const input = 777;

    // act
    const output = prepare(input);

    // arrange
    expect(output).toEqual({
      xs: 777,
    });
  });

  it("should return { xs: undefined }", () => {
    // arrange
    const input = undefined;

    // act
    const output = prepare(input);

    // arrange
    expect(output).toEqual({
      xs: undefined,
    });
  });
});
