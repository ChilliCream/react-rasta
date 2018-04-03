# React Rasta

[![release](https://img.shields.io/github/release/ChilliCream/react-rasta.svg)](https://github.com/ChilliCream/react-rasta/releases) [
![package](https://img.shields.io/npm/v/react-rasta.svg)](https://www.npmjs.com/package/react-rasta) [![license](https://img.shields.io/github/license/ChilliCream/react-rasta.svg)](https://github.com/ChilliCream/react-rasta/blob/master/LICENSE)
[![build](https://img.shields.io/circleci/project/github/ChilliCream/react-rasta.svg)](https://circleci.com/gh/ChilliCream/react-rasta/tree/master) [![coverage](https://img.shields.io/coveralls/ChilliCream/react-rasta.svg)](https://coveralls.io/github/ChilliCream/react-rasta?branch=master) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

**A grid system for _React_ projects to keep the layout structured and responsive.**

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

### Basic Example

Here is a quick and basic example.

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
          <Column size={{ xs: 6, md: 3 }}>Middle 1</Column>
          <Column size={{ xs: 6, md: 3 }}>Middle 2</Column>
          <Column size={3}>Right</Column>
        </Row>
      </Container>
    );
  }
}
```

## Documentation

Click [here](https://github.com/ChilliCream/react-rasta-docs) to get to the documentation home of _React Rasta_.
