import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import BlueSquare from "../__storybook__/BlueSquare";
import Story from "../__storybook__/Story";
import Title from "../__storybook__/Title";

import { Column, Container, Row } from "..";

storiesOf("RowDirection", module)
  .add("column", () => (
    <Story>
      <Title>column</Title>
      <Container>
        <Row direction={"column"}>
          <Column size={3}>
            <BlueSquare>1</BlueSquare>
          </Column>
          <Column size={3}>
            <BlueSquare>2</BlueSquare>
          </Column>
          <Column size={3}>
            <BlueSquare>3</BlueSquare>
          </Column>
          <Column size={3}>
            <BlueSquare>4</BlueSquare>
          </Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("column-reverse", () => (
    <Story>
      <Title>column-reverse</Title>
      <Container>
        <Row direction={"column-reverse"}>
          <Column size={3}>
            <BlueSquare>1</BlueSquare>
          </Column>
          <Column size={3}>
            <BlueSquare>2</BlueSquare>
          </Column>
          <Column size={3}>
            <BlueSquare>3</BlueSquare>
          </Column>
          <Column size={3}>
            <BlueSquare>4</BlueSquare>
          </Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("row", () => (
    <Story>
      <Title>row</Title>
      <Container>
        <Row direction={"row"}>
          <Column size={3}>
            <BlueSquare>1</BlueSquare>
          </Column>
          <Column size={3}>
            <BlueSquare>2</BlueSquare>
          </Column>
          <Column size={3}>
            <BlueSquare>3</BlueSquare>
          </Column>
          <Column size={3}>
            <BlueSquare>4</BlueSquare>
          </Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("row-reverse", () => (
    <Story>
      <Title>row-reverse</Title>
      <Container>
        <Row direction={"row-reverse"}>
          <Column size={3}>
            <BlueSquare>1</BlueSquare>
          </Column>
          <Column size={3}>
            <BlueSquare>2</BlueSquare>
          </Column>
          <Column size={3}>
            <BlueSquare>3</BlueSquare>
          </Column>
          <Column size={3}>
            <BlueSquare>4</BlueSquare>
          </Column>
        </Row>
      </Container>
    </Story>
  ));
