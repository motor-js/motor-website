---
id: Bar
title: Bar
sidebar_label: Bar
---

## Usage

We recommend you start by wrapping your React document with the Motor parent component.
This handles two things:

- Connection to the Qlik Engine (you can pass configuration or the engine object directly)
- Theming

The simpliest method to render a Bar chart is to add a Bar element to the page and set the cols props. Such as cols={['[Product Sub Group Desc]','=Sum([Sales Quantity])']}

      <Bar cols={["[Product Sub Group Desc]", "=Sum([Sales Quantity])"]} />

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
      <code>suppressZero</code>
    </td>
    <td>Suppress items whith zero values from being displayed in the chart</td>
    <td>
      <code>boolean</code> <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>columnSortOrder</code>
    </td>
    <td>Order of the columns on whihc the returned dat shoud be sorted</td>
    <td>
      <code>array</code>
      <br />
      [1,0]
    </td>
  </tr>
  <tr>
    <td>
      <code>sortDirection</code>
    </td>
    <td>
      Direction by which the chart should be sorted. CAn eith be ascending or
      descending.
    </td>
    <td>
      <code>string</code>
      <br />
      'ASCENDING' <br />
      'ASC' <br />
      'DESCENDING' <br />
      'DESC' <br />
    </td>
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
      <code>height</code>
    </td>
    <td>Chart height in percentage or value as pixels</td>
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
      <code>showLabels</code>
    </td>
    <td>Label position of values for the chart</td>
    <td>
      <code>oneOf</code>
      <br />
      'top'
      <br />
      'none'
      <br />
      'inside'
      <br />
      <b>* default obtained from theme.</b>
      <br />
    </td>
  </tr>
  <tr>
    <td>
      <code>textOnAxis</code>
    </td>
    <td>Labels for each axis on the chart</td>
    <td>
      <code>boolean</code> <br />
      <code>oneOf</code>
      <br />
      'both'
      <br />
      'yAxis'
      <br />
      'xAxis'
      <br />
      'none'
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>tickSpacing</code>
    </td>
    <td>Spacing of the ticks on the Y axis of the chart</td>
    <td>
      <code>oneOf</code>
      <br />
      "wide"
      <br />
      "normal"
      <br />
      "narrow"
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>showGridlines</code>
    </td>
    <td>Grid line type to be drawn on the chart</td>
    <td>
      <code>boolean</code>
      <br />
      <code>oneOf</code>
      <br />
      "solid"
      <br />
      "dashes"
      <br />
      "dots"
      <br />
      "none"
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>fontColor</code>
    </td>
    <td>Color of the labels for the chart</td>
    <td>
      <code>string</code>
      <br />
      <b>* default obtained from theme.</b>
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
      <code>borderRadius</code>
    </td>
    <td>Border radius of the border around the chart</td>
    <td>
      <code>string</code>
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>chartColor</code>
    </td>
    <td>Color scheme to be used for the chart</td>
    <td>
      <code>array</code>
      <br />
      <code>oneOf</code>
      <br />
      "divergent13"
      <br />
      "divergent9"
      <br />
      "goya"
      <br />
      "red"
      <br />
      "blue"
      <br />
      "gray"
      <br />
      "pink"
      <br />
      "grape"
      <br />
      "violet"
      <br />
      "indigo"
      <br />
      "blue"
      <br />
      "cyan"
      <br />
      "teal"
      <br />
      "green"
      <br />
      "lime"
      <br />
      "yellow"
      <br />
      "orange"
      <br />
      "base"
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr> <tr>
    <td>
      <code>stacked</code>
    </td>
    <td>Draw chart as stacked chart</td>
    <td>
      <code>bool</code>
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>percentStacked</code>
    </td>
    <td>Draw chart as percenatge stacked chart</td>
    <td>
      <code>bool</code>
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>roundNum</code>
    </td>
    <td>Use round numbering to dispaly labels on charts</td>
    <td>
      <code>bool</code>
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>title</code>
    </td>
    <td>Title to be dispalyed on top of chart</td>
    <td>
      <code>string</code>
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>subTitle</code>
    </td>
    <td>Sub title to be dispalyed on top of chart</td>
    <td>
      <code>string</code>
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
    <tr>
    <td>
      <code>showLegend</code>
    </td>
    <td>Display chart legend.</td>
    <td>
      <code>bool</code> <br />
    </td>
  </tr>
  <tr>
    <td>
      <code>allowSelections</code>
    </td>
    <td>Allow selections to be made on the chart</td>
    <td>
      <code>bool</code>
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>maxWidth</code>
    </td>
    <td>Maximum width in pixels of each bar</td>
    <td>
      <code>number</code>
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>showAxis</code>
    </td>
    <td>Display axis on the chart</td>
    <td>
      <code>bool</code>
      <br />
      <code>oneOf</code>
      <br />
      "both"
      <br />
      "yAxis"
      <br />
      "xAxis"
      <br />
      "none"
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>maxAxisLength</code>
    </td>
    <td>Maximum width in pixels of label before elipsis are applied</td>
    <td>
      <code>number</code>
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>suppressScroll</code>
    </td>
    <td>Suppress the diplsay of the mini chart with brushing</td>
    <td>
      <code>bool</code>
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>columnPadding</code>
    </td>
    <td>Padding between each bar</td>
    <td>
      <code>number</code>
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>dimensionErrMsg</code>
    </td>
    <td>
      Message to be displayed if an invalid dimension is used in the cols
      property
    </td>
    <td>
      <code>string</code>
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>measureErrMsg</code>
    </td>
    <td>
      Message to be displayed if an invalid measure is used in the cols property
    </td>
    <td>
      <code>string</code>
      <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
  <tr>
    <td>
      <code>otherTotalSpec</code>
    </td>
    <td>
      Message to be displayed if an invalid measure is used in the cols property
    </td>
    <td>
      <code>bool</code>
      <br />
      <code>shape</code>
      <br />
      See sample syntax below <br />
      <b>* default obtained from theme.</b>
    </td>
  </tr>
</table>

## Sample syntax

### config settings

```jsx {4-9}
import { Bar } from 'motor-ui'

<Bar
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
import { Bar } from "motor-ui";

<Bar
  cols={[
  "Case Owner Group",
  "=Avg([Case Duration Time])"
]}
  ....
/>
```

<b>Object syntax</b>
<br />

Use the object syntax if you want to set more options for your columns. If you. for example, create a pivot table with labels, you should use qFieldLabels for dimensions and qLabel for measures.

```jsx {4-28}
import { Bar } from "motor-ui";

<Bar
  cols={[
  /*dimension*/
  "Year",
  /*dimension with label*/
  {
    "qDef": {
      "qFieldDefs": ["Case Owner Group"],
      "qFieldLabels": ["Group"]
    }
  },
  /*measure with label*/
  {
    "qDef": {
      "qDef": "=Avg([Case Duration Time])",
      "qLabel": "Avg Case Duration Time"
    }
  },
  /*measure with label*/
  {
    "qDef": {
      "qDef": "Sum( [Open Cases] )",
      "qLabel": "Open Cases"
    }
  }
]}
  ....
/>
```

<b>Predefined dimensions and measures syntax</b>
<br />

You can use dimensions and measures that are predefined in the app. This is mostly relevant if the user should be able to select dimensions and measures from lists. You must know the Dimension ID or the Measure ID, which is defined in the qLibraryID property. You must also state if it is a measure or a dimension in the qType property.

```jsx {4-8}
import { Bar } from "motor-ui";

<Bar
  cols={[
  {
    "qLibraryId":"eqZjE",
    "qType":"measure"
  }
]}
  ....
/>
```

### calcCondition settings

```jsx {5-8}
import { Bar } from "motor-ui";

  <Bar
    ....
    calcCondition={{
      qCond: '1+1=2',
      qMsg: 'Calculation condition has not been met',
    }}
  />
```

### otherTotalSpec settings

```jsx {5-8}
import { Bar } from "motor-ui";

  <Bar
   ....
          otherTotalSpec={{
             qOtherLabel: 'Other',
             qOtherCount: '5'
           }}
     />
```

## Examples

These examples are based off the Consumer Sales Qlik Sense application.

### Chart sorted by descending values

The first example is a bar chart sorted by Revenue descending.

```jsx live
function ColumnDemo() {
  return (
    <Motor config={config}>
      <Bar
        title="Revenue by Product Sub Group"
        subTitle="Revenue figures from the Consumer Sales Qlik Sense application"
        height="50%"
        cols={[
          { qField: "[Product Sub Group Desc]", qLabel: "Product Sub Group" },
          {
            qField: "=Sum( [Sales Quantity]*[Sales Price])",
            qLabel: "Revenue",
          },
        ]}
        columnSortOrder={[1, 0]}
      />
    </Motor>
  );
}
```

### Axis and labels removed from chart

This exmaple removes the text from the axis as well as the labels from each bar and has selections disabled.

```jsx live
function ColumnDemo() {
  return (
    <Motor config={config}>
      <Bar
        title="Revenue by Product Sub Group"
        subTitle="Revenue figures from the Consumer Sales Qlik Sense application"
        height="50%"
        cols={[
          { qField: "[Product Sub Group Desc]", qLabel: "Product Sub Group" },
          {
            qField: "=Sum( [Sales Quantity]*[Sales Price])",
            qLabel: "Revenue",
          },
        ]}
        allowSelections={false}
        textOnAxis={false}
        showLabels="none"
      />
    </Motor>
  );
}
```

## Theme API

All components are styled from the main theme. Each theme can be overwtitten whihc will allow for all charts to sahre common functionality without having to set the props at an individual level.

Most of the chart settings are in base.global.chart. Changing any setting in the bove will apply to all charts within the application. Specific bar chart related theme items are stored in base.bar. Changing these settings will apply to all bar charts within the application.

### global

Settings in base.global.chart are below :

<table>
  <tr>
    <th>Setting</th>
    <th>Description</th>
    <th>Options / Example</th>
  </tr>
  <tr>
    <td>
      <code>allowSelections</code>
    </td>
    <td>Allows to enable / disable selctions on charts at a global level.</td>
    <td>
      <code>bool</code> <br />
    </td>
  </tr>
  <tr>
    <td>
      <code>allowSlantedYAxis</code>
    </td>
    <td>Allows for text on the axis to be displayed at 45 degrees.</td>
    <td>
      <code>bool</code> <br />
    </td>
  </tr>
  <tr>
    <td>
      <code>backgroundColor</code>
    </td>
    <td>Apply a background color to all charts within the application.</td>
    <td>
      <code>string</code> <br />
      "white"
    </td>
  </tr>
  <tr>
    <td>
      <code>borderRadius</code>
    </td>
    <td>Border radius for all charts.</td>
    <td>
      <code>string</code> <br />
      "10px"
    </td>
  </tr>
  <tr>
    <td>
      <code>userSelect</code>
    </td>
    <td>CSS user-select property.</td>
    <td>
      <code>string</code> <br />
      "none"
    </td>
  </tr>
  <tr>
    <td>
      <code>suppressZero</code>
    </td>
    <td>Suppress zeros on charts.</td>
    <td>
      <code>bool</code> <br />
    </td>
  </tr>
  <tr>
    <td>
      <code>suppressScroll</code>
    </td>
    <td>Suppress scroll bar / brushing on charts.</td>
    <td>
      <code>bool</code> <br />
    </td>
  </tr>
  <tr>
    <td>
      <code>allowZoom</code>
    </td>
    <td>Allow for the brush to be resiezed by the user.</td>
    <td>
      <code>bool</code> <br />
    </td>
  </tr>
  <tr>
    <td>
      <code>showLabels</code>
    </td>
    <td>Label positioning on chart.</td>
    <td>
      <code>string</code> <br />
      "top"
      <br /> "none"
      <br /> "inside"
    </td>
  </tr>
  <tr>
    <td>
      <code>showLegend</code>
    </td>
    <td>Display chart legend.</td>
    <td>
      <code>bool</code> <br />
    </td>
  </tr>
  <tr>
    <td>
      <code>textOnAxis</code>
    </td>
    <td>Labels for each axis on the chart</td>
    <td>
      <code>boolean</code> <br />
      <code>oneOf</code>
      <br />
      'both'
      <br />
      'yAxis'
      <br />
      'xAxis'
      <br />
      'none'
      <br />
    </td>
  </tr>
  <tr>
    <td>
      <code>showAxis</code>
    </td>
    <td>Display axis on the chart</td>
    <td>
      <code>bool</code>
      <br />
      <code>oneOf</code>
      <br />
      "both"
      <br />
      "yAxis"
      <br />
      "xAxis"
      <br />
      "none"
      <br />
    </td>
  </tr>
  <tr>
    <td>
      <code>showGridlines</code>
    </td>
    <td>Grid line type to be drawn on the chart</td>
    <td>
      <code>boolean</code>
      <br />
      <code>oneOf</code>
      <br />
      "solid"
      <br />
      "dashes"
      <br />
      "dots"
      <br />
      "none"
      <br />
    </td>
  </tr>
  <tr>
    <td>
      <code>tickSpacing</code>
    </td>
    <td>Spacing of the ticks on the Y axis of the chart</td>
    <td>
      <code>oneOf</code>
      <br />
      "wide"
      <br />
      "normal"
      <br />
      "narrow"
      <br />
    </td>
  </tr>
  <tr>
    <td>
      <code>maxAxisLength</code>
    </td>
    <td>Maximum width in pixels of label before elipsis are applied</td>
    <td>
      <code>number</code>
      <br />
      "80"
    </td>
  </tr>
  <tr>
    <td>
      <code>display</code>
    </td>
    <td>CSS Display of the chart object</td>
    <td>
      <code>string</code>
      <br />
      "inline-block"
    </td>
  </tr>
  <tr>
    <td>
      <code>boxSizing</code>
    </td>
    <td>CSS box sizing of the chart object</td>
    <td>
      <code>string</code>
      <br />
      "border-box""
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
    </td>
  </tr>{" "}
  <tr>
    <td>
      <code>gridlines</code>
    </td>
    <td>stroke and strokeDasharray of chart gridlines</td>
    <td>
      <code>string</code>
      <br />
    </td>
  </tr>
  <tr>
    <td>
      <code>selection</code>
    </td>
    <td>opacity, stroke and strokeWidth of chart when making selections</td>
    <td>
      <code>string</code>
      <br />
    </td>
  </tr>
  <tr>
    <td>
      <code>nonSelection</code>
    </td>
    <td>
      opacity, background of chart of non slected items when making selections
    </td>
    <td>
      <code>string</code>
      <br />
    </td>
  </tr>
  <tr>
    <td>
      <code>error</code>
    </td>
    <td>
      dimensionErrMsg and measureErrMsg to bedisplayed when invlaid items
      supplied to cols property
    </td>
    <td>
      <code>string</code>
      <br />
    </td>
  </tr>
</table>

### bar

Settings in base.bar are below :

e.g. base.bar.main.zoomScrollOnColumnWidth = 30.

<table>
  <tr>
    <th>Setting</th>
    <th>Description</th>
    <th>Options / Example</th>
  </tr>
  <tr>
    <th>Main</th>
  </tr>
  <tr>
    <td>
      <code>zoomScrollOnColumnWidth</code>
    </td>
    <td>Minimum bar width at which brushing will occur</td>
    <td>
      <code>number</code> <br />
    </td>
  </tr>
  <tr>
    <td>
      <code>columnPadding</code>
    </td>
    <td>Padding to be used between each bar</td>
    <td>
      <code>number</code> <br />
    </td>
  </tr>
  <tr>
    <td>
      <code>otherTotalSpec</code>
    </td>
    <td>Setting at which 'Others' will be dispalyed on chart</td>
    <td>
      <code>bool</code>
      <br />
      <code>shape</code>
      <br />
      See sample syntax above <br />
    </td>
  </tr>
  <tr>
    <td>
      <code>columnPaddingNarrow</code>
    </td>
    <td>Padding to be applied when many bars are displayed</td>
    <td>
      <code>number</code>
    </td>
  </tr>
  <tr>
    <td>
      <code>maxWidth</code>
    </td>
    <td>
      Maximum width in pixles and which axis labels will be shown before elipsis
      are applied
    </td>
    <td>
      <code>number</code>
    </td>
  </tr>
  <tr>
    <td>columns</td>
  </tr> <tr>
    <td>
      <code>stroke</code>
    </td>
    <td>Stroke color around columns</td>
    <td>
      <code>string</code>
    </td>
  </tr> <tr>
    <td>
      <code>strokeWidth</code>
    </td>
    <td>Stroke width around columns</td>
    <td>
      <code>number</code>
    </td>
  </tr>
</table>
