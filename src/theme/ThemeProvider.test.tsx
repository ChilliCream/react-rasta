import {mount} from "enzyme";
import "jest-styled-components";
import React from "react";
import {Column, Container, Row} from "..";
import {ThemeProvider} from "./StyledComponents";

describe("<ThemeProvider />", () => {
  it("should match the snapshot (gutterWidth set to 100)", () => {
    // act
    const result = mount(
      <ThemeProvider theme={{gutterWidth: 100}}>
        <Container>
          <Row>
            <Column>Test</Column>
          </Row>
        </Container>
      </ThemeProvider>,
    );

    // assert
    expect(result).toMatchSnapshot();
  });
});
