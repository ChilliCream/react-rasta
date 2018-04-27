import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Story from "../__utils__/Story";
import Title from "../__utils__/Title";

import { Column, Container, Row } from "..";

storiesOf("RowWrap", module)
  .add("nowrap", () => (
    <Story>
      <Title>nowrap</Title>
      <Container>
        <Row wrap={"nowrap"}>
          <Column size={6}>1</Column>
          <Column size={6}>2</Column>
          <Column size={6}>3</Column>
          <Column size={6}>4</Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("wrap", () => (
    <Story>
      <Title>wrap</Title>
      <Container>
        <Row wrap={"wrap"}>
          <Column size={6}>1</Column>
          <Column size={6}>2</Column>
          <Column size={6}>3</Column>
          <Column size={6}>4</Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("wrap-reverse", () => (
    <Story>
      <Title>wrap-reverse</Title>
      <Container>
        <Row wrap={"wrap-reverse"}>
          <Column size={6}>1</Column>
          <Column size={6}>2</Column>
          <Column size={6}>3</Column>
          <Column size={6}>4</Column>
        </Row>
      </Container>
    </Story>
  ));
