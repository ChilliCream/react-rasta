import renderAlignSelf from "./renderAlignSelf";
import flatten from "../__utils__/flatten";

describe("renderAlignSelf", () => {
  it("should render align-self appropriate (input: 'baseline')", () => {
    // arrange
    const input = "baseline";

    // act
    const output = renderAlignSelf(input);

    // assert
    expect(flatten(output)).toBe("align-self:baseline!important;");
  });

  it("should render align-self appropriate (input: 'center')", () => {
    // arrange
    const input = "center";

    // act
    const output = renderAlignSelf(input);

    // assert
    expect(flatten(output)).toBe("align-self:center!important;");
  });

  it("should render align-self appropriate (input: 'flex-end')", () => {
    // arrange
    const input = "flex-end";

    // act
    const output = renderAlignSelf(input);

    // assert
    expect(flatten(output)).toBe("align-self:flex-end!important;");
  });

  it("should render align-self appropriate (input: 'flex-start')", () => {
    // arrange
    const input = "flex-start";

    // act
    const output = renderAlignSelf(input);

    // assert
    expect(flatten(output)).toBe("align-self:flex-start!important;");
  });

  it("should render align-self appropriate (input: 'stretch')", () => {
    // arrange
    const input = "stretch";

    // act
    const output = renderAlignSelf(input);

    // assert
    expect(flatten(output)).toBe("align-self:stretch!important;");
  });

  it("should render allign-items appropriate (input: undefined)", () => {
    // arrange
    const input = undefined;

    // act
    const output = renderAlignSelf(input);

    // assert
    expect(flatten(output)).toBe("");
  });
});
