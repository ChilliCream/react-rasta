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

storiesOf("ColumnOrder", module).add("order", () => (
  <Story>
    <Title>order</Title>
    <Container>
      <Row>
        <Column
          size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
          order={{ sm: "last" }}
        >
          <BlueSquare>1</BlueSquare>
        </Column>
        <Column size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} order={{ sm: 5 }}>
          <BlueSquare>2</BlueSquare>
        </Column>
        <Column size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} order={{ sm: 4 }}>
          <BlueSquare>3</BlueSquare>
        </Column>
        <Column size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} order={{ sm: 3 }}>
          <BlueSquare>4</BlueSquare>
        </Column>
        <Column size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} order={{ sm: 2 }}>
          <BlueSquare>5</BlueSquare>
        </Column>
        <Column
          size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
          order={{ sm: "first" }}
        >
          <BlueSquare>6</BlueSquare>
        </Column>
      </Row>
    </Container>
  </Story>
));
