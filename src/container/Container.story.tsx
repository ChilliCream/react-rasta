import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
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

storiesOf("Container", module)
  .add("fluid", () => (
    <Story>
      <Title>fluid</Title>
      <Container fluid>
        <Row>
          <Column>1</Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("themeProvider", () => (
    <Story>
      <Title>themeProvider</Title>
      <ThemeProvider theme={{ breakpoints, containerWidth }}>
        <Container>
          <Row>
            <Column size={3}>1</Column>
            <Column size={{ phone: 9, tablet: 3 }}>2</Column>
            <Column size={{ phone: 9, tablet: 3 }}>3</Column>
            <Column size={3}>4</Column>
          </Row>
        </Container>
      </ThemeProvider>
    </Story>
  ));
