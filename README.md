# React Rasta

[![release](https://img.shields.io/github/release/ChilliCream/react-rasta.svg)](https://github.com/ChilliCream/react-rasta/releases) [
![package](https://img.shields.io/npm/v/react-rasta.svg)](https://www.npmjs.com/package/react-rasta) [![license](https://img.shields.io/github/license/ChilliCream/react-rasta.svg)](https://github.com/ChilliCream/react-rasta/blob/master/LICENSE)
[![build](https://img.shields.io/circleci/project/github/ChilliCream/react-rasta.svg)](https://circleci.com/gh/ChilliCream/react-rasta/tree/master) [![coverage](https://img.shields.io/coveralls/ChilliCream/react-rasta.svg)](https://coveralls.io/github/ChilliCream/react-rasta?branch=master) (https://github.com/prettier/prettier) [![better code](https://bettercodehub.com/edge/badge/ChilliCream/react-rasta)](https://bettercodehub.com/results/ChilliCream/react-rasta) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)]

**The most powerful and flexible grid system for _React_**

_React Rasta_ is a 12 column grid system and works underneath with the _CSS flexbox_ layout.
But because it can be difficult to work with _CSS flexbox_, _React Rasta_ offers a simple _API_
so you don't have to worry about that.

## Getting Started

Here you will find what is needed to get started.

### Install Package

First things first. Install the package `react-rasta` with _yarn_ or _npm_.

When using _yarn_ it looks like this.

```powershell
yarn add react-rasta
```

And when using _npm_ it looks like this.

```powershell
npm install react-rasta
```

### Code Example

_React Rasta_ implements all features from the _bootstrap_ grid system and adds more flexibility on top of it.

```tsx
//App.tsx
import * as React from "react";
import { Column, Container, Row } from "react-rasta";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Column size={3}>Left</Column>
          <Column size={{ xs: 9, md: 3 }}>Middle 1</Column>
          <Column size={{ xs: 9, md: 3 }}>Middle 2</Column>
          <Column size={3}>Right</Column>
        </Row>
      </Container>
    );
  }
}
```

Breakpoints (which will end up in media queries) could be redefined via `ThemeProvider`.

```tsx
//App.tsx
import * as React from "react";
import {
  BreakpointMap,
  BreakpointValues,
  Column,
  Container,
  Row,
  ThemeProvider
} from "react-rasta";

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

export default class App extends React.Component {
  render() {
    return (
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
    );
  }
}
```

## Documentation

Click [here](https://github.com/ChilliCream/react-rasta-docs) to get to the documentation home of _React Rasta_.
