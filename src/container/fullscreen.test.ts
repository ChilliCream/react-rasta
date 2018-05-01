import fullscreen from "./fullscreen";

describe("fullscreen", () => {
  it("should not break", () => {
    // arrange
    jest.mock("../theme/StyledComponents");

    // act
    fullscreen();

    // assert
    // should not break
  });
});
