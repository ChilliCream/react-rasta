import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Story from "../__storybook__/Story";
import Title from "../__storybook__/Title";

import { Column, Container, Row } from "..";

storiesOf("ColumnOffset", module).add("offset", () => (
  <Story>
    <Title>offset</Title>
    <Container>
      <Row>
        <Column offset={3} size={3}>
          Offset 3
        </Column>
        <Column offset={3} size={3}>
          Offset 3
        </Column>
        <Column size={3}>Offset 0</Column>
        <Column offset={6} size={3}>
          Offset 6
        </Column>
      </Row>
    </Container>
  </Story>
));
