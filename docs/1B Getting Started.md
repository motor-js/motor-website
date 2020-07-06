---
id: Getting Started
title: Getting Started
sidebar_label: Getting Started
---

:::caution
Motor is completely free only for non-commercial use.<br />
If you plan to use the library in a commerical setting, please visit our pricing
page and choose a license.

:::

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

You can then import the desired React component from the package and you're good to go. 
Check out the full list of props and theming options for each component in these docs.

```javascript

import { Motor } from 'motor-ui'
import base from 'motor-ui/themes'

<Motor 
  config={..}
  theme={base}
>
// ...
</Motor>

```

<br />

:::tip 
Heads up! No need to set the config in each individual component. Set this once in the Motor component and then wrap 
the root of your project in this component. Check out the Motor Starter Project for an example.
:::

<br />

If you really need to (and are not using the Motor component), you can pass the engine configuration directly in the components. 
Some styling can also be applied directly to the components as props, the rest can be customised through the theme object.

```javascript

import { Button } from 'motor-ui'
 
<Button 
    config={..}
    type='clearSelections' 
    title='Clear' 
    backgroundColor='var(--oc-red-6)'
/>

```

<br />

## Examples

#### Motor Starter Project --> https://github.com/motor-js/motor-starter
#### Insurance Claims Dashboard --> https://github.com/motor-js/Insurance-Claims
