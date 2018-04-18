import "jest-styled-components";
import { shallow } from "enzyme";
import * as React from "react";
import styled from "styled-components";
import Row from "./Row";

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

  it("should match the snapshot (justifyContent: 'space-between') ", () => {
    // act
    const result = shallow(<Row justifyContent={"space-between"} />);

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (justifyContent: { xs: 'space-around', sm: 'flex-end', md: 'flex-start' })", () => {
    // act
    const result = shallow(
      <Row
        justifyContent={{
          xs: "space-around",
          sm: "flex-end",
          md: "flex-start"
        }}
      />
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

  it("should match the snapshot (wrap: 'wrap-reverse') ", () => {
    // act
    const result = shallow(<Row wrap={"wrap-reverse"} />);

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (wrap: { xs: 'nowrap', sm: 'wrap-reverse', md: 'wrap' })", () => {
    // act
    const result = shallow(
      <Row wrap={{ xs: "nowrap", sm: "wrap-reverse", md: "wrap" }} />
    );

    // assert
    expect(result).toMatchSnapshot();
  });

  it("should match the snapshot (direction: 'column', justifyContent: center, noGutter: true, wrap: 'nowrap')", () => {
    // act
    const result = shallow(
      <Row
        direction={"column"}
        justifyContent={"center"}
        noGutter={true}
        wrap={"nowrap"}
      />
    );

    // assert
    expect(result).toMatchSnapshot();
  });
});
