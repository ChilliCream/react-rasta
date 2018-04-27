import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Story from "../__storybook__/Story";
import Title from "../__storybook__/Title";

import { Column, Container, Row } from "..";

storiesOf("ColumnAlignSelf", module)
  .add("baseline", () => (
    <Story>
      <Title>baseline</Title>
      <Container>
        <Row>
          <Column alignSelf={"stretch"} size={2}>
            1
          </Column>
          <Column alignSelf={"baseline"} size={2}>
            2
          </Column>
          <Column alignSelf={"stretch"} size={2}>
            3
          </Column>
          <Column alignSelf={"stretch"} size={2}>
            4
          </Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("center", () => (
    <Story>
      <Title>center</Title>
      <Container>
        <Row>
          <Column alignSelf={"stretch"} size={2}>
            1
          </Column>
          <Column alignSelf={"center"} size={2}>
            2
          </Column>
          <Column alignSelf={"stretch"} size={2}>
            3
          </Column>
          <Column alignSelf={"stretch"} size={2}>
            4
          </Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("flex-end", () => (
    <Story>
      <Title>flex-end</Title>
      <Container>
        <Row>
          <Column alignSelf={"stretch"} size={2}>
            1
          </Column>
          <Column alignSelf={"flex-end"} size={2}>
            2
          </Column>
          <Column alignSelf={"stretch"} size={2}>
            3
          </Column>
          <Column alignSelf={"stretch"} size={2}>
            4
          </Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("flex-start", () => (
    <Story>
      <Title>flex-start</Title>
      <Container>
        <Row>
          <Column alignSelf={"stretch"} size={2}>
            1
          </Column>
          <Column alignSelf={"flex-start"} size={2}>
            2
          </Column>
          <Column alignSelf={"stretch"} size={2}>
            3
          </Column>
          <Column alignSelf={"stretch"} size={2}>
            4
          </Column>
        </Row>
      </Container>
    </Story>
  ))
  .add("stretch", () => (
    <Story>
      <Title>stretch</Title>
      <Container>
        <Row>
          <Column alignSelf={"stretch"} size={2}>
            1
          </Column>
          <Column alignSelf={"stretch"} size={2}>
            2
          </Column>
          <Column alignSelf={"stretch"} size={2}>
            3
          </Column>
          <Column alignSelf={"stretch"} size={2}>
            4
          </Column>
        </Row>
      </Container>
    </Story>
  ));
