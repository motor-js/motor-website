---
id: Theming
title: Theming
sidebar_label: Theming
---

## Overview

A big part of Motor is its theming framework. There are a lot of things you can customize, which are covered on this page.

The recommended path to creating a new theme, is to pass it to the Motor component.

```javascript

import { Motor } from 'motor-ui';

const myTheme = {
  global: {
    colors: {
      brand: 'red',
    },
  },
};

<Motor theme={myTheme}>
  //...
</Motor>

```

This is just an example of using the theme to replace the app's brand color. There are a couple of things you should know:

There is a base theme and the customizations you add will merge with it. 
As a result, you only need to pass what you need to change, not the entire theme object. 
These changes will only affect the children of the Motor component.

The library comes with some pre-built themes which you can import and use. See the example below for using the dark theme

```javascript

import { Motor } from 'motor-ui';
import { night } from 'motor-ui/themes'

const myTheme = {night};

<Motor theme={myTheme}>
  //...
</Motor>

```

<br />


## Structure

The structure of the JSON object is divided into three parts: global, charts and each component entry, for example:

```javascript

const myTheme = {
  global: {
    // changes here will affect more than one component at a time
  },
  charts: {
  // changes here will affect more than one chart at a time
  },
  filter: {
    // changes here will affect the Filter component only
  },
  //...
}

```

<br />

## API

This section documents each of the theme entries so that you know what is possible to customize in each component. 
For simplicity sake, we will reduce the JSON notation to dot signs, so global.colors.brand will translate to:

