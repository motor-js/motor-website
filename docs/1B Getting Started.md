---
id: Getting Started
title: Getting Started
sidebar_label: Getting Started
---

The easiest way to get started is to install via NPM.

### Install via NPM

```javascript
npm i motor-ui
```

### Include in your HTML

```javascript
<script src="...motor-ui"></script>
```

<br />

## Usage

We recommend you start by wrapping your React document with the Motor parent component.
This handles two things:

- Connection to the Qlik Engine (you can pass configuration or the engine object directly)
- Theming

You can then import the React component from the package and you're good to go.
Check out the full list of props and theming options for each component in these docs.

```javascript

import { Motor } from 'motor-ui/core'
import classic from 'motor-ui/core/themes'

<Motor
  config={..}
  theme={classic}
>
// ...
</Motor>

```

Note, you can pass the configuration to connect to the Qlik engine directly in the components, if you prefer.
Some styling can also be applied directly to the components as props.

```javascript

import { Button } from 'motor-ui/core'

<Button
    config={..}
    type='clearSelections'
    title='Clear'
    color='var(--oc-red-6)'
/>

```

<br />

## Examples

#### React Hello Motor -->
