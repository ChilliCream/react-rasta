import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Column, Container, Row } from "..";

storiesOf("RowJustifyContent", module)
  .add("center", () => (
    <div>
      <Container>
        <Row justifyContent={"center"}>
          <Column size={2}>Center 1</Column>
          <Column size={2}>Center 2</Column>
          <Column size={2}>Center 3</Column>
          <Column size={2}>Center 4</Column>
        </Row>
      </Container>
    </div>
  ))
  .add("flex-end", () => (
    <div>
      <Container>
        <Row justifyContent={"flex-end"}>
          <Column size={2}>FlexEnd 1</Column>
          <Column size={2}>FlexEnd 2</Column>
          <Column size={2}>FlexEnd 3</Column>
          <Column size={2}>FlexEnd 4</Column>
        </Row>
      </Container>
    </div>
  ))
  .add("flex-start", () => (
    <div>
      <Container>
        <Row justifyContent={"flex-start"}>
          <Column size={2}>FlexStart 1</Column>
          <Column size={2}>FlexStart 2</Column>
          <Column size={2}>FlexStart 3</Column>
          <Column size={2}>FlexStart 4</Column>
        </Row>
      </Container>
    </div>
  ))
  .add("space-around", () => (
    <div>
      <Container>
        <Row justifyContent={"space-around"}>
          <Column size={2}>SpaceAround 1</Column>
          <Column size={2}>SpaceAround 2</Column>
          <Column size={2}>SpaceAround 3</Column>
          <Column size={2}>SpaceAround 4</Column>
        </Row>
      </Container>
    </div>
  ))
  .add("space-between", () => (
    <div>
      <Container>
        <Row justifyContent={"space-between"}>
          <Column size={2}>SpaceBetween 1</Column>
          <Column size={2}>SpaceBetween 2</Column>
          <Column size={2}>SpaceBetween 3</Column>
          <Column size={2}>SpaceBetween 4</Column>
        </Row>
      </Container>
    </div>
  ));
