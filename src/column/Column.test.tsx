import "jest-styled-components";
import { shallow } from "enzyme";
import * as React from "react";
import styled from "styled-components";
import Column from "./Column";

describe("<Column />", () => {
  it("should match the snapshot (no properties set)", () => {
    // act
    const result = shallow(<Column />);

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (offset: 3) ", () => {
    // arrange
    const offset = 3;

    // act
    const result = shallow(<Column offset={offset} />);

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (offset: { xs: 3, sm: 4, md: 8 }) ", () => {
    // act
    const result = shallow(<Column offset={{ xs: 3, sm: 4, md: 8 }} />);

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (order: 5) ", () => {
    // act
    const result = shallow(<Column order={5} />);

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (order: { xs: 'first', sm: 3, md: 'last' }) ", () => {
    // act
    const result = shallow(
      <Column order={{ xs: "first", sm: 3, md: "last" }} />
    );

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (size: 7) ", () => {
    // act
    const result = shallow(<Column size={7} />);

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (size: { xs: 'auto', sm: 7, md: 'none' }) ", () => {
    // act
    const result = shallow(<Column size={{ xs: "auto", sm: 7, md: "none" }} />);

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (offset: 3, order: 3, size: 9)", () => {
    // arrange
    const offset = 3;
    const order = 3;
    const size = 9;

    // act
    const result = shallow(
      <Column offset={offset} order={order} size={size} />
    );

    // assert
    expect(result).toMatchSnapshot();
  });
});
