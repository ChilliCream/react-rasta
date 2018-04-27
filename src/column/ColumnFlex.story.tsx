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

storiesOf("ColumnFlex", module).add("flex", () => (
  <Story>
    <Title>order</Title>
    <Container>
      <Row>
        <Column size={"none"} style={{ flex: "1 0 auto" }}>
          <BlueSquare>1 11 111</BlueSquare>
        </Column>
        <Column size={"auto"}>
          <BlueSquare>2</BlueSquare>
        </Column>
        <Column size={"auto"}>
          <BlueSquare>3</BlueSquare>
        </Column>
        <Column size={"auto"}>
          <BlueSquare>4</BlueSquare>
        </Column>
      </Row>
    </Container>
  </Story>
));
