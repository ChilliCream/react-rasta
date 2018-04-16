import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Column, Container, Row } from "..";

storiesOf("ColumnOffset", module).add("default", () => (
  <div>
    <Container>
      <Row>
        <Column offset={{ sm: 3, md: 6 }} size={3}>
          Offset 3 & 6
        </Column>
        <Column offset={{ sm: 3, md: 6 }} size={3}>
          Offset 3 & 6
        </Column>
        <Column offset={{ sm: 3, md: 6 }} size={3}>
          Offset 3 & 6
        </Column>
        <Column offset={{ sm: 3, md: 6 }} size={3}>
          Offset 3 & 6
        </Column>
      </Row>
    </Container>
  </div>
));
