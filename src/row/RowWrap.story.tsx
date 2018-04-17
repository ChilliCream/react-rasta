import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import BlueSquare from "../__storybook__/BlueSquare";
import Story from "../__storybook__/Story";
import Title from "../__storybook__/Title";

import { Column, Container, Row } from "..";

storiesOf("RowWrap", module)
  .add("nowrap", () => (
    <Story>
      <Title>nowrap</Title>
      <Container>
        <Row wrap={"nowrap"}>
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
  .add("wrap", () => (
    <Story>
      <Title>wrap</Title>
      <Container>
        <Row wrap={"wrap"}>
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
  .add("wrap-reverse", () => (
    <Story>
      <Title>wrap-reverse</Title>
      <Container>
        <Row wrap={"wrap-reverse"}>
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
