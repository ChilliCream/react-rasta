import {action} from "@storybook/addon-actions";
import {storiesOf} from "@storybook/react";
import React from "react";
import Story from "../__utils__/Story";
import Title from "../__utils__/Title";

import {Column, Container, Row} from "..";

storiesOf("ColumnFlex", module).add("flex", () => (
  <Story>
    <Title>flex</Title>
    <Container>
      <Row>
        <Column size={"none"} flex={"grow"}>
          grow grow grow grow
        </Column>
        <Column size={"auto"} flex={"shrink"}>
          shrink
        </Column>
        <Column size={"none"} flex={"none"}>
          none
        </Column>
        <Column size={"none"}>undefined</Column>
      </Row>
    </Container>
  </Story>
));
