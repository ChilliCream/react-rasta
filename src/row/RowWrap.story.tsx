import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Column, Container, Row } from "..";

storiesOf("RowWrap", module)
  .add("nowrap", () => (
    <div>
      <Container>
        <Row wrap={"nowrap"}>
          <Column size={3}>Nowrap 1</Column>
          <Column size={3}>Nowrap 2</Column>
          <Column size={3}>Nowrap 3</Column>
          <Column size={3}>Nowrap 4</Column>
        </Row>
      </Container>
    </div>
  ))
  .add("wrap", () => (
    <div>
      <Container>
        <Row wrap={"wrap"}>
          <Column size={3}>Wrap 1</Column>
          <Column size={3}>Wrap 2</Column>
          <Column size={3}>Wrap 3</Column>
          <Column size={3}>Wrap 4</Column>
        </Row>
      </Container>
    </div>
  ))
  .add("wrap-reverse", () => (
    <div>
      <Container>
        <Row wrap={"wrap-reverse"}>
          <Column size={3}>Wrap Reverse 1</Column>
          <Column size={3}>Wrap Reverse 2</Column>
          <Column size={3}>Wrap Reverse 3</Column>
          <Column size={3}>Wrap Reverse 4</Column>
        </Row>
      </Container>
    </div>
  ));
