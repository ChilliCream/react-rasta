describe("bootstrap", () => {
  it("should not break", () => {
    // arrange
    jest.mock("../theme/StyledComponents");

    // act
    require("./bootstrap");

    // assert
    // should not break
  });
});
