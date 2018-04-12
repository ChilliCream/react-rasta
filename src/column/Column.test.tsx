// Module mocks must mocked before importing modules
jest.mock("../utils/bootstrap", () => jest.fn());

import "jest-styled-components";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import styled from "styled-components";
import Column from "./Column";

configure({ adapter: new Adapter() });

describe("<Column />", () => {
  it("should match the snapshot (no properties set)", () => {
    // act
    const result = shallow(<Column />);

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (order property set to 5) ", () => {
    // act
    const result = shallow(<Column order={5} />);

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (order property set to { xs: 'first', sm: 3, md: 'last' }) ", () => {
    // act
    const result = shallow(
      <Column order={{ xs: "first", sm: 3, md: "last" }} />
    );

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (order property set to 5) ", () => {
    // act
    const result = shallow(<Column size={7} />);

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (size property set to { xs: 'auto', sm: 7, md: 'none' }) ", () => {
    // act
    const result = shallow(<Column size={{ xs: "auto", sm: 7, md: "none" }} />);

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (order property set to 3 size property is set 9)", () => {
    // act
    const result = shallow(<Column order={3} size={9} />);

    // assert
    expect(result).toMatchSnapshot();
  });
});
