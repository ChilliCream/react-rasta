import {action} from "@storybook/addon-actions";
import {storiesOf} from "@storybook/react";
import React from "react";
import Story from "../__utils__/Story";
import Title from "../__utils__/Title";

import {Column, Container, Row} from "..";

storiesOf("RowDirection", module)
  .add("column", () => (
    <Story>
      <Title>column</Title>
      <Container>
        <Row direction={"column"}>
          <Column size={3}>1</Column>
          <Column size={3}>2</Column>
          <Column size={3}>3</Column>
          <Column size={3}>4</Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("column-reverse", () => (
    <Story>
      <Title>column-reverse</Title>
      <Container>
        <Row direction={"column-reverse"}>
          <Column size={3}>1</Column>
          <Column size={3}>2</Column>
          <Column size={3}>3</Column>
          <Column size={3}>4</Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("row", () => (
    <Story>
      <Title>row</Title>
      <Container>
        <Row direction={"row"}>
          <Column size={3}>1</Column>
          <Column size={3}>2</Column>
          <Column size={3}>3</Column>
          <Column size={3}>4</Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("row-reverse", () => (
    <Story>
      <Title>row-reverse</Title>
      <Container>
        <Row direction={"row-reverse"}>
          <Column size={3}>1</Column>
          <Column size={3}>2</Column>
          <Column size={3}>3</Column>
          <Column size={3}>4</Column>
        </Row>
      </Container>
    </Story>
  ));
