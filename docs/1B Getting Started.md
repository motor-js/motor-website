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
npm i @motor-js/core
```

### Include in your HTML

```javascript
<script src="https://unpkg.com/@motor-js/core"></script>
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
```

<br />


## Usage

We recommend you start by wrapping your React document with the Motor parent component.
This handles two things:

- Connection to the Qlik Engine (you can pass configuration or the engine object directly)
- Theming

You can then import the desired React component from the package and you're good to go. 
Check out the full list of props and theming options for each component in these docs.

:::info
The connection example below is pointing to Qlik's demo site. All examples in these docs use 
dimensions from this application
:::

```jsx

import { Motor } from '@motor-js/core'
import { base } from '@motor-js/core'

<Motor
  config={
    host: "sense-demo.qlik.com",
    secure: true,
    port: 443,
    prefix: "",
    appId: "372cbc85-f7fb-4db6-a620-9a5367845dce"
  }
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

import { Button } from '@motor-js/core'
 
<Button 
    config={..}
    type='clearSelections'
    title='Clear'
    color='var(--oc-red-6)'
/>

```

## Usage with Qlik Sense Cloud

If you are connecting to a Qlik cloud SAAS instance, your configuration will look slightly different. 
We need to set the qcs entry to <b>true</b> and also add the web integration id, generated in your Qlik site. 
See below for an example

```jsx

import { Motor } from '@motor-js/core'

<Motor
  config={
  host: 'my-qlik-site.eu.qlikcloud.com',
  secure: true,
  port: null,
  prefix: '',
  appId: '0c07cd52-e6a1-45ff-a605-fd37394f90bf',
  qcs: true,
  webIntId: '4Tx-ydWxSQEM_q1ajlYBVzGgVUVJUo-i',
  }
>
// ...
</Motor>

```

For more information on how to generate your first web integration id in Qlik SAAS, head to the Qlik [docs](https://qlik.dev/tutorials/making-your-first-api-call).


## Examples

#### Motor Starter Project --> https://github.com/motor-js/motor-starter
#### Insurance Claims Dashboard --> https://github.com/motor-js/Insurance-Claims-Multi
