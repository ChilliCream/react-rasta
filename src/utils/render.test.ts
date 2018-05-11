import flatten from "../__utils__/flatten";
import render from "./render";

describe("render", () => {
  it("should render as expected (input: { width: { xs: 111 } })", () => {
    // arrange
    const renderer = {
      width: (value?) => (value && `width: ${value}px;`) || "",
    };
    const valueMap = {
      width: {
        xs: 111,
      },
    };

    // act
    const output = render(valueMap, renderer);

    // assert
    expect(flatten(output)).toBe("width:111px;");
  });

  it("should render as expected (input: { width: { md: 222 } })", () => {
    // arrange
    const renderer = {
      width: (value?) => (value && `width: ${value}px;`) || "",
    };
    const valueMap = {
      width: {
        md: 222,
      },
    };

    // act
    const output = render(valueMap, renderer);

    // assert
    expect(flatten(output)).toBe("@media(min-width:768px){width:222px;}");
  });

  it("should render as expected (input: { width: { xs: 111, sm: 111, md: 222 } })", () => {
    // arrange
    const renderer = {
      width: (value?) => (value && `width: ${value}px;`) || "",
    };
    const valueMap = {
      width: {
        xs: 111,
        sm: 111,
        md: 222,
      },
    };

    // act
    const output = render(valueMap, renderer);

    // assert
    expect(flatten(output)).toBe(
      "width:111px;@media(min-width:768px){width:222px;}",
    );
  });

  it("should render as expected (input: { width: {} })", () => {
    // arrange
    const renderer = {
      width: (value?) => (value && `width: ${value}px;`) || "",
    };
    const valueMap = {
      width: {},
    };

    // act
    const output = render(valueMap, renderer);

    // assert
    expect(flatten(output)).toBe("");
  });

  it("should render as expected (input: {})", () => {
    // arrange
    const renderer = {
      width: (value?) => (value && `width: ${value}px;`) || "",
    };
    const valueMap = {};

    // act
    const output = render(valueMap, renderer);

    // assert
    expect(flatten(output)).toBe("");
  });
});
