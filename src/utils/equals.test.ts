import equals from "./equals";

describe("equals", () => {
  it("should return true", () => {
    // arrange
    const a = "test-b";
    const b = ["test-a", "Test-b", "test-b"];

    // act
    const output = equals(a, b);

    // assert
    expect(output).toBeTruthy();
  });

  it("should return false", () => {
    // arrange
    const a = "test-b";
    const b = ["test-a", "Test-b", "test-B"];

    // act
    const output = equals(a, b);

    // assert
    expect(output).toBeFalsy();
  });

  it("should return false if array is empty", () => {
    // arrange
    const a = "test-b";
    const b = [];

    // act
    const output = equals(a, b);

    // assert
    expect(output).toBeFalsy();
  });

  it("should return false if undefined", () => {
    // arrange
    const a = undefined;
    const b = ["test-a", "Test-b", "test-B"];

    // act
    const output = equals(a, b);

    // assert
    expect(output).toBeFalsy();
  });
});
