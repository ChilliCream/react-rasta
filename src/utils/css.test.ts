import css from "./css";

describe("cssAndFlatten", () => {
  it("should render css and flatten it", () => {
    // arrange
    const input = "width: 50px;";

    // act
    const output = css`
      ${input};
    `;

    // assert
    expect(output).toContain("width: 50px;");
  });
});
