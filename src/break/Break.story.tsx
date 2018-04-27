import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Story from "../__storybook__/Story";
import Title from "../__storybook__/Title";

import { Break, Column, Container, Row } from "..";

storiesOf("Break", module).add("break", () => (
  <Story>
    <Title>break</Title>
    <Container>
      <Row alignContent={"stretch"}>
        <Column size={6}>1</Column>
        <Break />
        <Column size={6}>2</Column>
      </Row>
    </Container>
  </Story>
));
