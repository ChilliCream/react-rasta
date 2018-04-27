import resolve from "./resolve";
import { breakpoints } from "../media";
import flatten from "../__utils__/flatten";

describe("resolve", () => {
  it("should resolve media breakpoints (input: 'xs')", () => {
    // arrange
    const breakpointsMap = breakpoints();

    // act
    const output = resolve(breakpointsMap, "xs")`
      width: 444px;
    `;

    // assert
    expect(flatten(output)).toBe("width:444px;");
  });

  it("should resolve media breakpoints (input: 'sm')", () => {
    // arrange
    const breakpointsMap = breakpoints();

    // act
    const output = resolve(breakpointsMap, "sm")`
      width: 555px;
    `;

    // assert
    expect(flatten(output)).toBe("@media(min-width:576px){width:555px;}");
  });

  it("should resolve media breakpoints (input: 'not-exists')", () => {
    // arrange
    const breakpointsMap = breakpoints();

    // act
    const output = resolve(breakpointsMap, "not-exists")`
      width: 666px;
    `;

    // assert
    expect(flatten(output)).toBe("width:666px;");
  });

  it("should resolve media breakpoints (input: 'sm', css body empty)", () => {
    // arrange
    const breakpointsMap = breakpoints();

    // act
    const output = resolve(breakpointsMap, "sm")``;

    // assert
    expect(flatten(output)).toBe("");
  });
});
