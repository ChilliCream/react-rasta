// Module mocks must mocked before importing modules
jest.mock("./utils/bootstrap", () => jest.fn());

import Container from "./Container";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import "jest-styled-components";
import styled from "styled-components";
import * as React from "react";

configure({ adapter: new Adapter() });

describe("<Container />", () => {
  it("should match the snapshot (no properties set)", () => {
    // act
    const result = shallow(<Container />);

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (fluid property set to true) ", () => {
    // act
    const result = shallow(<Container fluid />);

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (width property set to { xs: 100, sm: 200, md: 300 })", () => {
    // act
    const result = shallow(<Container width={{ xs: 100, sm: 200, md: 300 }} />);

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (ignores width when fluid is set)", () => {
    // act
    const result = shallow(
      <Container fluid={true} width={{ xs: 100, sm: 200, md: 300 }} />
    );

    // assert
    expect(result).toMatchSnapshot();
  });
});
