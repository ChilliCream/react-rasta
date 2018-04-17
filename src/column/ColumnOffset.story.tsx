import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import BlueSquare from "../__storybook__/BlueSquare";
import Story from "../__storybook__/Story";
import Title from "../__storybook__/Title";

import { Column, Container, Row } from "..";

storiesOf("ColumnOffset", module).add("offset", () => (
  <Story>
    <Title>offset</Title>
    <Container>
      <Row>
        <Column offset={3} size={3}>
          <BlueSquare>Offset 3</BlueSquare>
        </Column>
        <Column offset={3} size={3}>
          <BlueSquare>Offset 3</BlueSquare>
        </Column>
        <Column size={3}>
          <BlueSquare>Offset 0</BlueSquare>
        </Column>
        <Column offset={6} size={3}>
          <BlueSquare>Offset 6</BlueSquare>
        </Column>
      </Row>
    </Container>
  </Story>
));
