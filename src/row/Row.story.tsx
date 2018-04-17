import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import BlueSquare from "../__storybook__/BlueSquare";
import Story from "../__storybook__/Story";
import Title from "../__storybook__/Title";

import { Column, Container, Row } from "..";
import { ThemeProvider } from "../theme/StyledComponents";

const breakpoints = {
  phone: 0,
  tablet: 600,
  desktop: 800
};

const containerWidth = {
  // do not specify phone here
  tablet: 560,
  desktop: 760
};

storiesOf("Row", module).add("noGutter", () => (
  <Story>
    <Title>noGutter</Title>
    <Container>
      <Row noGutter>
        <Column size={6}>
          <BlueSquare>1</BlueSquare>
        </Column>
        <Column size={6}>
          <BlueSquare>2</BlueSquare>
        </Column>
      </Row>
    </Container>
  </Story>
));
