import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Story from "../__utils__/Story";
import Title from "../__utils__/Title";

import { Column, Container, Row } from "..";

storiesOf("RowAlignContent", module)
  .add("center", () => (
    <Story>
      <Title>center</Title>
      <Container>
        <Row alignContent={"center"}>
          <Column size={6}>1</Column>
          <Column size={6}>2</Column>
          <Column size={6}>3</Column>
          <Column size={6}>4</Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("flex-end", () => (
    <Story>
      <Title>flex-end</Title>
      <Container>
        <Row alignContent={"flex-end"}>
          <Column size={6}>1</Column>
          <Column size={6}>2</Column>
          <Column size={6}>3</Column>
          <Column size={6}>4</Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("flex-start", () => (
    <Story>
      <Title>flex-start</Title>
      <Container>
        <Row alignContent={"flex-start"}>
          <Column size={6}>1</Column>
          <Column size={6}>2</Column>
          <Column size={6}>3</Column>
          <Column size={6}>4</Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("space-around", () => (
    <Story>
      <Title>space-around</Title>
      <Container>
        <Row alignContent={"space-around"}>
          <Column size={6}>1</Column>
          <Column size={6}>2</Column>
          <Column size={6}>3</Column>
          <Column size={6}>4</Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("space-between", () => (
    <Story>
      <Title>space-between</Title>
      <Container>
        <Row alignContent={"space-between"}>
          <Column size={6}>1</Column>
          <Column size={6}>2</Column>
          <Column size={6}>3</Column>
          <Column size={6}>4</Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("stretch", () => (
    <Story>
      <Title>stretch</Title>
      <Container>
        <Row alignContent={"stretch"}>
          <Column size={6}>1</Column>
          <Column size={6}>2</Column>
          <Column size={6}>3</Column>
          <Column size={6}>4</Column>
        </Row>
      </Container>
    </Story>
  ));
