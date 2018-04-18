import percentage from "./percentage";

describe("percentage", () => {
  it("should return '33.333333' (input: 4)", () => {
    // arrange
    const input = 4;

    // act
    const output = percentage(input);

    // assert
    expect(output).toBe("33.333333");
  });

  it("should return '50.000000' (input: 6)", () => {
    // arrange
    const input = 6;

    // act
    const output = percentage(input);

    // assert
    expect(output).toBe("50.000000");
  });

  it("should return '100.000000' (input: 12)", () => {
    // arrange
    const input = 12;

    // act
    const output = percentage(input);

    // assert
    expect(output).toBe("100.000000");
  });

  it("should return '0' (input: 13)", () => {
    // arrange
    const input = 13;

    // act
    const output = percentage(input);

    // assert
    expect(output).toBe("0");
  });

  it("should return '0' (input: undefined)", () => {
    // arrange
    const input = undefined;

    // act
    const output = percentage(input);

    // assert
    expect(output).toBe("0");
  });
});
