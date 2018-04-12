import flatten from "./flatten";

describe("flatten", () => {
  it("should flatten multiple interpolations", () => {
    // arrange
    const input = ["an ", "amazing ", "test"];

    // act
    const output = flatten(input);

    // assert
    expect(output).toBe("an amazing test");
  });
});
