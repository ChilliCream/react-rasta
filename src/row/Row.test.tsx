// Module mocks must mocked before importing modules
jest.mock("../utils/bootstrap", () => jest.fn());

import "jest-styled-components";
import { configure, shallow } from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import * as React from "react";
import styled from "styled-components";
import Row from "./Row";

configure({ adapter: new Adapter() });

describe("<Row />", () => {
  it("should match the snapshot (no properties set)", () => {
    // act
    const result = shallow(<Row />);

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (direction: 'row') ", () => {
    // act
    const result = shallow(<Row direction={"row"} />);

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (direction: { xs: 'row', sm: 'row-reverse', md: 'column' })", () => {
    // act
    const result = shallow(
      <Row direction={{ xs: "row", sm: "row-reverse", md: "column" }} />
    );

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (noGutter: true) ", () => {
    // act
    const result = shallow(<Row noGutter />);

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (noGutter: { xs: true, sm: false, md: true })", () => {
    // act
    const result = shallow(
      <Row noGutter={{ xs: true, sm: false, md: true }} />
    );

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (direction: 'column', noGutter: true)", () => {
    // arrange
    const offset = 3;
    const order = 3;
    const size = 9;

    // act
    const result = shallow(<Row direction={"column"} noGutter={true} />);

    // assert
    expect(result).toMatchSnapshot();
  });
});
