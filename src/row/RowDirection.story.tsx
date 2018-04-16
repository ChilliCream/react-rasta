import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Column, Container, Row } from "..";

storiesOf("RowDirection", module)
  .add("column", () => (
    <div>
      <Container>
        <Row direction={"column"}>
          <Column size={3}>Column 1</Column>
          <Column size={3}>Column 2</Column>
          <Column size={3}>Column 3</Column>
          <Column size={3}>Column 4</Column>
        </Row>
      </Container>
    </div>
  ))
  .add("column-reverse", () => (
    <div>
      <Container>
        <Row direction={"column-reverse"}>
          <Column size={3}>Column Reverse 1</Column>
          <Column size={3}>Column Reverse 2</Column>
          <Column size={3}>Column Reverse 3</Column>
          <Column size={3}>Column Reverse 4</Column>
        </Row>
      </Container>
    </div>
  ))
  .add("row", () => (
    <div>
      <Container>
        <Row direction={"row"}>
          <Column size={3}>Row 1</Column>
          <Column size={3}>Row 2</Column>
          <Column size={3}>Row 3</Column>
          <Column size={3}>Row 4</Column>
        </Row>
      </Container>
    </div>
  ))
  .add("row-reverse", () => (
    <div>
      <Container>
        <Row direction={"row-reverse"}>
          <Column size={3}>Row Reverse 1</Column>
          <Column size={3}>Row Reverse 2</Column>
          <Column size={3}>Row Reverse 3</Column>
          <Column size={3}>Row Reverse 4</Column>
        </Row>
      </Container>
    </div>
  ));
