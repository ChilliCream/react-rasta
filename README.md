# React Rasta
[![release](https://img.shields.io/github/release/ChilliCream/react-rasta.svg)](https://github.com/ChilliCream/react-rasta/releases) [
![package](https://img.shields.io/npm/v/react-rasta.svg)](https://www.npmjs.com/package/react-rasta) [![license](https://img.shields.io/github/license/ChilliCream/react-rasta.svg)](https://github.com/ChilliCream/react-rasta/blob/master/LICENSE) 
[![build](https://img.shields.io/circleci/project/github/ChilliCream/react-rasta.svg)](https://circleci.com/gh/ChilliCream/react-rasta/tree/master) [![coverage](https://img.shields.io/coveralls/ChilliCream/react-rasta.svg)](https://coveralls.io/github/ChilliCream/react-rasta?branch=master)

A grid system for *React* projects to keep the layout structured and responsive.

*React Rasta* is a 12 column grid system and works underneath with the *CSS flexbox* layout and is built with *styled components*. But because it can be difficult to work with *CSS flexbox*, *React Rasta* offers a simple *API* so you don't have to worry about that.

## Getting Started

Here you will find what is needed to get started.

### Install Package

First things first. Install the package `react-rasta` with *yarn* or *npm*.

When using *yarn* it looks like this.

```powershell
yarn add react-rasta
```

And when using *npm* it looks like this.

```powershell
npm install react-rasta
```

### Basic Example

Here is a quick and basic example.

```tsx
//App.tsx
import * as React from 'react';
import { Column, Container, Row } from 'react-rasta';

export default class App extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Column size={3}>
                        Left
                    </Column>
                    <Column size={{ 'xs': 6, 'md': 3 }}>
                        Middle 1
                    </Column>
                    <Column size={{ 'xs': 6, 'md': 3 }}>
                        Middle 2
                    </Column>
                    <Column size={3}>
                        Left
                    </Column>
                </Row>
            </Container>
        );
    }
}
```

## Documentation

Click [here](https://github.com/ChilliCream/react-rasta-docs) to get to the documentation home of *React Rasta*.