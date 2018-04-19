import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import BlueSquare from "../__storybook__/BlueSquare";
import Story from "../__storybook__/Story";
import Title from "../__storybook__/Title";

import { Column, Container, Row } from "..";

storiesOf("RowAlignContent", module)
  .add("center", () => (
    <Story>
      <Title>center</Title>
      <Container style={{ background: "#ccc", height: 400 }}>
        <Row alignContent={"center"} style={{ height: 400 }}>
          <Column size={6}>
            <BlueSquare>1</BlueSquare>
          </Column>
          <Column size={6}>
            <BlueSquare>2</BlueSquare>
          </Column>
          <Column size={6}>
            <BlueSquare>3</BlueSquare>
          </Column>
          <Column size={6}>
            <BlueSquare>4</BlueSquare>
          </Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("flex-end", () => (
    <Story>
      <Title>flex-end</Title>
      <Container style={{ background: "#ccc", height: 400 }}>
        <Row alignContent={"flex-end"} style={{ height: 400 }}>
          <Column size={6}>
            <BlueSquare>1</BlueSquare>
          </Column>
          <Column size={6}>
            <BlueSquare>2</BlueSquare>
          </Column>
          <Column size={6}>
            <BlueSquare>3</BlueSquare>
          </Column>
          <Column size={6}>
            <BlueSquare>4</BlueSquare>
          </Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("flex-start", () => (
    <Story>
      <Title>flex-start</Title>
      <Container style={{ background: "#ccc", height: 400 }}>
        <Row alignContent={"flex-start"} style={{ height: 400 }}>
          <Column size={6}>
            <BlueSquare>1</BlueSquare>
          </Column>
          <Column size={6}>
            <BlueSquare>2</BlueSquare>
          </Column>
          <Column size={6}>
            <BlueSquare>3</BlueSquare>
          </Column>
          <Column size={6}>
            <BlueSquare>4</BlueSquare>
          </Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("space-around", () => (
    <Story>
      <Title>space-around</Title>
      <Container style={{ background: "#ccc", height: 400 }}>
        <Row alignContent={"space-around"} style={{ height: 400 }}>
          <Column size={6}>
            <BlueSquare>1</BlueSquare>
          </Column>
          <Column size={6}>
            <BlueSquare>2</BlueSquare>
          </Column>
          <Column size={6}>
            <BlueSquare>3</BlueSquare>
          </Column>
          <Column size={6}>
            <BlueSquare>4</BlueSquare>
          </Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("space-between", () => (
    <Story>
      <Title>space-between</Title>
      <Container style={{ background: "#ccc", height: 400 }}>
        <Row alignContent={"space-between"} style={{ height: 400 }}>
          <Column size={6}>
            <BlueSquare>1</BlueSquare>
          </Column>
          <Column size={6}>
            <BlueSquare>2</BlueSquare>
          </Column>
          <Column size={6}>
            <BlueSquare>3</BlueSquare>
          </Column>
          <Column size={6}>
            <BlueSquare>4</BlueSquare>
          </Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("stretch", () => (
    <Story>
      <Title>stretch</Title>
      <Container style={{ background: "#ccc", height: 400 }}>
        <Row alignContent={"stretch"} style={{ height: 400 }}>
          <Column size={6}>
            <BlueSquare>1</BlueSquare>
          </Column>
          <Column size={6}>
            <BlueSquare>2</BlueSquare>
          </Column>
          <Column size={6}>
            <BlueSquare>3</BlueSquare>
          </Column>
          <Column size={6}>
            <BlueSquare>4</BlueSquare>
          </Column>
        </Row>
      </Container>
    </Story>
  ));
