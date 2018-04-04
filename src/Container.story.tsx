import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import {
  BreakpointMap,
  BreakpointValues,
  Column,
  Container,
  Row,
  ThemeProvider
} from ".";

const breakpoints: BreakpointMap = {
  phone: 0,
  tablet: 600,
  desktop: 800
};

const containerWidth: BreakpointValues<number> = {
  // do not specify phone here
  tablet: 560,
  desktop: 760
};

storiesOf("Container", module).add("default", () => (
  <div>
    <Container>
      <Row>
        <Column
          size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
          order={{ sm: "last" }}
        >
          Test 1
        </Column>
        <Column size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} order={{ sm: 5 }}>
          Test 2
        </Column>
        <Column size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} order={{ sm: 4 }}>
          Test 3
        </Column>
        <Column size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} order={{ sm: 3 }}>
          Test 4
        </Column>
        <Column size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} order={{ sm: 2 }}>
          Test 5
        </Column>
        <Column
          size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
          order={{ sm: "first" }}
        >
          Test 6
        </Column>
      </Row>
    </Container>
    <Container>
      <Row noGutter>
        <Column>No Gutter</Column>
      </Row>
    </Container>
    <Container fluid>
      <Row>
        <Column>Fluid</Column>
      </Row>
    </Container>
    <Container>
      <Row>
        <Column size="none">None</Column>
        <Column>Auto</Column>
      </Row>
    </Container>
    <ThemeProvider theme={{ breakpoints, containerWidth }}>
      <Container>
        <Row>
          <Column size={3}>Left</Column>
          <Column size={{ phone: 9, tablet: 3 }}>Middle 1</Column>
          <Column size={{ phone: 9, tablet: 3 }}>Middle 2</Column>
          <Column size={3}>Right</Column>
        </Row>
      </Container>
    </ThemeProvider>
  </div>
));
