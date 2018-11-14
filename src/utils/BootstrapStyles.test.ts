import {shallow} from "enzyme";
import "jest-styled-components";
import React from "react";
import BootstrapStyles from "./BootstrapStyles";

describe("<BootstrapStyles />", () => {
  it("should match the snapshot", () => {
    // act
    const result = shallow(<BootstrapStyles />);

    // assert
    expect(result).toMatchSnapshot();
  });
});
