import {shallow} from "enzyme";
import "jest-styled-components";
import React from "react";
import Break from "./Break";

describe("<Break />", () => {
  it("should match the snapshot", () => {
    // act
    const result = shallow(<Break />);

    // assert
    expect(result).toMatchSnapshot();
  });
});
