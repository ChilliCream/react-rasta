import {action} from "@storybook/addon-actions";
import {storiesOf} from "@storybook/react";
import React from "react";
import Story from "../__utils__/Story";
import Title from "../__utils__/Title";

import {Break, Column, Container, Row} from "..";

storiesOf("Break", module).add("break", () => (
  <Story>
    <Title>break</Title>
    <Container>
      <Row>
        <Column size={6}>1</Column>
        <Break />
        <Column size={6}>2</Column>
      </Row>
    </Container>
  </Story>
));
