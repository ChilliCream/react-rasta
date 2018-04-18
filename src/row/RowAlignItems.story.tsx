import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import BlueSquare from "../__storybook__/BlueSquare";
import Story from "../__storybook__/Story";
import Title from "../__storybook__/Title";

import { Column, Container, Row } from "..";

storiesOf("RowAlignItems", module)
  .add("baseline", () => (
    <Story>
      <Title>baseline</Title>
      <Container style={{ background: "#ccc", height: 200 }}>
        <Row alignItems={"baseline"} style={{ height: 200 }}>
          <Column size={2}>
            <BlueSquare>1</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>2</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>3</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>4</BlueSquare>
          </Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("center", () => (
    <Story>
      <Title>center</Title>
      <Container style={{ background: "#ccc", height: 200 }}>
        <Row alignItems={"center"} style={{ height: 200 }}>
          <Column size={2}>
            <BlueSquare>1</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>2</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>3</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>4</BlueSquare>
          </Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("flex-end", () => (
    <Story>
      <Title>flex-end</Title>
      <Container style={{ background: "#ccc", height: 200 }}>
        <Row alignItems={"flex-end"} style={{ height: 200 }}>
          <Column size={2}>
            <BlueSquare>1</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>2</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>3</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>4</BlueSquare>
          </Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("flex-start", () => (
    <Story>
      <Title>flex-start</Title>
      <Container style={{ background: "#ccc", height: 200 }}>
        <Row alignItems={"flex-start"} style={{ height: 200 }}>
          <Column size={2}>
            <BlueSquare>1</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>2</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>3</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>4</BlueSquare>
          </Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("stretch", () => (
    <Story>
      <Title>stretch</Title>
      <Container style={{ background: "#ccc", height: 200 }}>
        <Row alignItems={"stretch"} style={{ height: 200 }}>
          <Column size={2}>
            <BlueSquare>1</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>2</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>3</BlueSquare>
          </Column>
          <Column size={2}>
            <BlueSquare>4</BlueSquare>
          </Column>
        </Row>
      </Container>
    </Story>
  ));
