---
id: KPI
title: KPI
sidebar_label: KPI
---

## Usage

We recommend you start by wrapping your React document with the Motor parent component.
This handles two things:

- Connection to the Qlik Engine (you can pass configuration or the engine object directly)
- Theming

The simpliest method to render a KPI is to add a Kpi element to the page and set the cols props. Such as cols={['=Sum([Sales Quantity])']}

      <KPI cols={["=Sum([Sales Quantity])"]} />

This can get more complex by setting various other propertes with in the cols property whihc will allow for the naming of columns and the ability to sort the data.

A more advanced version demonstrating this is displayed below.

## Props

:::info
You do not need to set the Config prop if the component is a child of the Motor component
:::

<table>
  <tr>
    <th>Prop</th>
    <th>Description</th>
    <th>Options / Example</th>
  </tr>
  <tr>
    <td>
      <code>config</code>
    </td>
    <td>
      Configuration object to connect to the Qlik Engine, only set this if used
      outside of the Motor component.
    </td>
    <td>
      <code>object</code> <br />
      See sample syntax below
    </td>
  </tr>
  <tr>
    <td>
      <code>label</code>
    </td>
    <td>
      label to apear on the top of the KPI value
    </td>
    <td>
      <code>string</code> <br />
      See sample syntax below
    </td>
  </tr>
  <tr>
    <td>
      <code>cols</code>
    </td>
    <td>Columns from Qlik Data Model to render in the chart. </td>
    <td>
      <code>array</code> <br />
      See sample syntax below
    </td>
  </tr>
  <tr>
    <td>
      <code>calcCondition</code>
    </td>
    <td>Calculated condition to be met before chart can be displayed.</td>
    <td>See sample syntax below</td>
  </tr>
  <tr>
    <td>
      <code>width</code>
    </td>
    <td>Chart width in percentage or value as pixels</td>
    <td>
      <code>string</code>
      <br />
      <b>'100%'</b>
      <br />
      '200px'
    </td>
  </tr>
  <tr>
    <td>
      <code>margin</code>
    </td>
    <td>The amount of margin around the component</td>
    <td>
      <code>string</code>
      <br />
      <b>'5px'</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>size</code>
    </td>
    <td>Size of the text used in the chart</td>
    <td>
      <code>oneOf</code>
      <br />
      'tiny'
      <br />
      'small'
      <br />
      <b>'medium'</b>
      <br />
      'large'
      <br />
      'xlarge'
    </td>
  </tr>
  <tr>
    <td>
      <code>color</code>
    </td>
    <td>Color of the KPI value</td>
    <td>
      <code>string</code>
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>justifyContent</code>
    </td>
    <td>The alignment of the text within the component </td>
    <td>
      <code>oneOf</code>
      <br />
      "flex-start"
      <br />
      "center"
      <br />
      "flex-end"
      <br />
    </td>
  </tr>
  <tr>
    <td>
      <code>textAlign</code>
    </td>
    <td>Alignment of KPI label and Value relative to their container </td>
    <td>
      <code>oneOf</code>
      <br />
      "left"
      <br />
      "center"
      <br />
      "right"
      <br />
    </td>
  </tr>
  <tr>
    <td>
      <code>roundNum</code>
    </td>
    <td>Round vlaue and display large numbers with symbol e.g K for '000s</td>
    <td>
            <code>bool</code>
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>precision</code>
    </td>
    <td>Precision if RoundNum set to true. True equals 2 deciamls places, false equals none</td>
    <td>
      <code>bool</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>labelColor</code>
    </td>
    <td>Color of the KPI label</td>
    <td>
      <code>string</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>alignSelf</code>
    </td>
    <td>Alignment of the KPI Label</td>
       <td>
      <code>oneOf</code>
      <br />
      "flex-start"
      <br />
      "center"
      <br />
      "flex-end"
      <br />
    </td>
  </tr>
    <tr>
    <td>
      <code>padding</code>
    </td>
    <td>Padding of the KPI</td>
    <td>
      <code>string</code>
    </td>
  </tr>
    <tr>
    <td>
      <code>maxWidth</code>
    </td>
    <td>Max width of the KPI, text will be wrapped</td>
    <td>
      <code>string</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>border</code>
    </td>
    <td>Border to be dispalyed around the chart</td>
    <td>
      <code>boolean</code>
      <br />
      <code>oneOf</code>
      <br />
      "top"
      <br />
      "left"
      <br />
      "bottom"
      <br />
      "right"
      <br />
      "start"
      <br />
      "end"
      <br />
      "horizontal"
      <br />
      "vertical"
      <br />
      "all"
      <br />
      "between"
      <br />
      "none"
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>backgroundColor</code>
    </td>
    <td>Background color the chart</td>
    <td>
      <code>string</code>
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
      <tr>
    <td>
      <code>responsive</code>
    </td>
    <td>Whether the KPI size should scale for tablet and mobile</td>
    <td>
      <code>bool</code>
    </td>
  </tr>
      <tr>
    <td>
      <code>onClick</code>
    </td>
    <td>Event function to execute when button is clicked</td>
    <td>
      <code>func</code>
    </td>
  </tr>
      <tr>
    <td>
      <code>cursor</code>
    </td>
    <td>Cursor style on hover</td>
    <td>
      <code>string</code>
    </td>
  </tr>
      <tr>
    <td>
      <code>autoSizeValue</code>
    </td>
    <td>Automatically resize the label if it is too large for the min wrapper</td>
    <td>
      <code>bool</code>
    </td>
  </tr>
</table>

## Sample syntax

### config settings

```jsx {4-9}
import { KPI } from 'motor-ui'

<KPI
  config={{
    host: "xxxxxxxxx",
    secure: false,
    port: xxxxx,
    prefix: "",
    appId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx",
  }}
  ......
/>
```

### cols settings

<h4>Overview</h4>
There are three different ways of specifying the columns:

- As a string.
- As an Object
- As a reference to a predefined dimension or measure, a so-called master item.

<b>String syntax</b>
<br />

If a string starts with =, it will be treated as a measure, otherwise it is
treated as a dimension.

```jsx {4-7}
import { KPI } from "motor-ui";

<KPI
  cols={[
  "=Avg([Case Duration Time])"
]}
  ....
/>
```

<b>Object syntax</b>
<br />

Use the object syntax if you want to set more options for your columns. If you. for example, create a pivot table with labels, you should use qFieldLabels for dimensions and qLabel for measures. Note the qLable is not used in this implementation of the KPI. The lable comes from the lable property

```jsx {4-28}
import { KPI } from "motor-ui";

<KPI
  cols={[
  /*measure with label*/
  {
    "qDef": {
      "qDef": "=Avg([Case Duration Time])",
      "qLabel": "Avg Case Duration Time"
    }
  },
]}
  ....
/>
```

<b>Predefined dimensions and measures syntax</b>
<br />

You can use dimensions and measures that are predefined in the app. This is mostly relevant if the user should be able to select dimensions and measures from lists. You must know the Dimension ID or the Measure ID, which is defined in the qLibraryID property. You must also state if it is a measure or a dimension in the qType property.

```jsx {4-8}
import { KPI } from "motor-ui";

<KPI
  cols={[
  {
    "qLibraryId":"eqZjE",
    "qType":"measure"
  }
]}
  ....
/>
```

## Examples

These examples are based off the Consumer Sales Qlik Sense application.

### Standard KPI

The first example is a standard KPI.

```jsx live
function ColumnDemo() {
  return (
    <Motor config={config}>
      <KPI
        label="Revenue by Product Sub Group"
        cols={["=Sum( [Sales Quantity]*[Sales Price])"]}
      />
    </Motor>
  );
}
```
