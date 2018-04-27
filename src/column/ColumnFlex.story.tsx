import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Story from "../__storybook__/Story";
import Title from "../__storybook__/Title";

import { Column, Container, Row } from "..";

storiesOf("ColumnFlex", module).add("flex", () => (
  <Story>
    <Title>order</Title>
    <Container>
      <Row>
        <Column size={"none"} style={{ flex: "none" }}>
          1 11 111
        </Column>
        <Column size={"auto"}>2</Column>
        <Column size={"auto"}>3</Column>
        <Column size={"none"}>4</Column>
      </Row>
    </Container>
  </Story>
));
