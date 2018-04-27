import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Story from "../__utils__/Story";
import Title from "../__utils__/Title";

import { Column, Container, Row } from "..";

storiesOf("ColumnOrder", module).add("order", () => (
  <Story>
    <Title>order</Title>
    <Container>
      <Row>
        <Column
          size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
          order={{ sm: "last" }}
        >
          1
        </Column>
        <Column size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} order={{ sm: 5 }}>
          2
        </Column>
        <Column size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} order={{ sm: 4 }}>
          3
        </Column>
        <Column size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} order={{ sm: 3 }}>
          4
        </Column>
        <Column size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} order={{ sm: 2 }}>
          5
        </Column>
        <Column
          size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }}
          order={{ sm: "first" }}
        >
          6
        </Column>
      </Row>
    </Container>
  </Story>
));
