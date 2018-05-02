import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Story from "../__utils__/Story";
import Title from "../__utils__/Title";

import { Column, Container, Row } from "..";

storiesOf("RowAlignItems", module)
  .add("baseline", () => (
    <Story>
      <Title>baseline</Title>
      <Container>
        <Row alignItems={"baseline"}>
          <Column size={2}>1</Column>
          <Column size={2}>2</Column>
          <Column size={2}>3</Column>
          <Column size={2}>4</Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("center", () => (
    <Story>
      <Title>center</Title>
      <Container>
        <Row alignItems={"center"}>
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
        <Row alignItems={"flex-end"}>
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
        <Row alignItems={"flex-start"}>
          <Column size={2}>1</Column>
          <Column size={2}>2</Column>
          <Column size={2}>3</Column>
          <Column size={2}>4</Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("stretch", () => (
    <Story>
      <Title>stretch</Title>
      <Container>
        <Row alignItems={"stretch"}>
          <Column size={2}>1</Column>
          <Column size={2}>2</Column>
          <Column size={2}>3</Column>
          <Column size={2}>4</Column>
        </Row>
      </Container>
    </Story>
  ));
