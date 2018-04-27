import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Story from "../__utils__/Story";
import Title from "../__utils__/Title";

import { Column, Container, Row } from "..";

storiesOf("RowJustifyContent", module)
  .add("center", () => (
    <Story>
      <Title>center</Title>
      <Container>
        <Row justifyContent={"center"}>
          <Column size={2}>1</Column>
          <Column size={2}>2</Column>
          <Column size={2}>3</Column>
          <Column size={2}>4</Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("flex-end", () => (
    <Story>
      <Title>flex-end</Title>
      <Container>
        <Row justifyContent={"flex-end"}>
          <Column size={2}>1</Column>
          <Column size={2}>2</Column>
          <Column size={2}>3</Column>
          <Column size={2}>4</Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("flex-start", () => (
    <Story>
      <Title>flex-start</Title>
      <Container>
        <Row justifyContent={"flex-start"}>
          <Column size={2}>1</Column>
          <Column size={2}>2</Column>
          <Column size={2}>3</Column>
          <Column size={2}>4</Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("space-around", () => (
    <Story>
      <Title>space-around</Title>
      <Container>
        <Row justifyContent={"space-around"}>
          <Column size={2}>1</Column>
          <Column size={2}>2</Column>
          <Column size={2}>3</Column>
          <Column size={2}>4</Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("space-between", () => (
    <Story>
      <Title>space-between</Title>
      <Container>
        <Row justifyContent={"space-between"}>
          <Column size={2}>1</Column>
          <Column size={2}>2</Column>
          <Column size={2}>3</Column>
          <Column size={2}>4</Column>
        </Row>
      </Container>
    </Story>
  ));
