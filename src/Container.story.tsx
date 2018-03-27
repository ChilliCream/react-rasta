import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Column from './Column';
import Container from './Container';
import Row from './Row';

storiesOf('Container', module)
  .add('default', () => (
    <div>
      <Container >
        <Row>
          <Column size={{ 'xs': 12, 'sm': 6, 'md': 4, 'lg': 3, 'xl': 2 }}>Test 1</Column>
          <Column size={{ 'xs': 12, 'sm': 6, 'md': 4, 'lg': 3, 'xl': 2 }}>Test 2</Column>
          <Column size={{ 'xs': 12, 'sm': 6, 'md': 4, 'lg': 3, 'xl': 2 }}>Test 3</Column>
          <Column size={{ 'xs': 12, 'sm': 6, 'md': 4, 'lg': 3, 'xl': 2 }}>Test 4</Column>
          <Column size={{ 'xs': 12, 'sm': 6, 'md': 4, 'lg': 3, 'xl': 2 }}>Test 5</Column>
          <Column size={{ 'xs': 12, 'sm': 6, 'md': 4, 'lg': 3, 'xl': 2 }} order={{ 'sm': 1 }}>Test 6</Column>
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
    </div>
  ));