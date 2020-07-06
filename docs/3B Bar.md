---
id: Bar
title: Bar
sidebar_label: Bar
---

```jsx live
function BarDemo() {
  return (
    <Juno config={config}>
      <Bar
        title="Bar Chart"
        cols={[
          { qField: "[Product Sub Group Desc]", qLabel: "Product Sub Group" },
          {
            qField: "=Sum( [Sales Quantity]*[Sales Price])",
            qLabel: "Revenue",
          },
        ]}
      />
      <Button backgroundColor="brand" type="clearSelections">
        Clear Selections
      </Button>
    </Juno>
  );
}
```

## Usage

We recommend you start by wrapping your React document with the Motor parent component.
This handles two things:

- Connection to the Qlik Engine (you can pass configuration or the engine object directly)
- Theming

## Examples

These examples are based off the Consumer Sales Qlik Sense application.

## Examples - simple use (use of cols with no field descriptions (passing an array))

We recommend you start by wrapping your React document with the Motor parent component.
This handles two things:

- Connection to the Qlik Engine (you can pass configuration or the engine object directly)
- Theming

```jsx live
function BarDemo() {
  return (
    <Juno config={config}>
      <Bar
        title="Bar Chart"
        cols={[
          { qField: "[Product Sub Group Desc]", qLabel: "Product Sub Group" },
          {
            qField: "=Sum( [Sales Quantity]*[Sales Price])",
            qLabel: "Revenue",
          },
        ]}
      />
      <Button backgroundColor="brand" type="clearSelections">
        Clear Selections
      </Button>
    </Juno>
  );
}
```

## Examples - complex use (use of cols with no field descriptions (passing an object))

We recommend you start by wrapping your React document with the Motor parent component.
This handles two things:

- Connection to the Qlik Engine (you can pass configuration or the engine object directly)
- Theming

```jsx live
function BarDemo() {
  return (
    <Juno config={config}>
      <Bar
        title="Bar Chart"
        cols={[
          { qField: "[Product Sub Group Desc]", qLabel: "Product Sub Group" },
          {
            qField: "=Sum( [Sales Quantity]*[Sales Price])",
            qLabel: "Revenue",
          },
        ]}
      />
      <Button backgroundColor="brand" type="clearSelections">
        Clear Selections
      </Button>
    </Juno>
  );
}
```

## Examples - multiple dimensions

We recommend you start by wrapping your React document with the Motor parent component.
This handles two things:

- Connection to the Qlik Engine (you can pass configuration or the engine object directly)
- Theming

```jsx live
function BarDemo() {
  return (
    <Juno config={config}>
      <Bar
        title="Revenue by Year and Product"
        cols={[
          { qField: "[Year]", qLabel: "Year" },
          { qField: "[Line Desc 1]", qLabel: "Product" },
          {
            qField: "=Sum( [Sales Quantity]*[Sales Price])",
            qLabel: "Revenue",
          },
        ]}
      />
      <Button backgroundColor="brand" type="clearSelections">
        Clear Selections
      </Button>
    </Juno>
  );
}
```

## Examples - multiple measures

We recommend you start by wrapping your React document with the Motor parent component.
This handles two things:

- Connection to the Qlik Engine (you can pass configuration or the engine object directly)
- Theming

```jsx live
function BarDemo() {
  return (
    <Juno config={config}>
      <Bar
        title="Revenue and Sales $ by Product Sub Group"
        cols={[
          { qField: "[Product Sub Group Desc]", qLabel: "Product Sub Group" },
          {
            qField: "=Sum( [Sales Quantity]*[Sales Price])",
            qLabel: "Revenue",
          },
          {
            qField: "=Sum ([Sales Amount])",
            qLabel: "Sales",
          },
        ]}
      />
      <Button backgroundColor="brand" type="clearSelections">
        Clear Selections
      </Button>
    </Juno>
  );
}
```

## Examples - stacked bar chart

We recommend you start by wrapping your React document with the Motor parent component.
This handles two things:

- Connection to the Qlik Engine (you can pass configuration or the engine object directly)
- Theming

```jsx live
function BarDemo() {
  return (
    <Juno config={config}>
      <Bar
        title="Bar Chart"
        cols={[
          { qField: "[Product Sub Group Desc]", qLabel: "Product Sub Group" },
          {
            qField: "=Sum( [Sales Quantity]*[Sales Price])",
            qLabel: "Revenue",
          },
        ]}
      />
      <Button backgroundColor="brand" type="clearSelections">
        Clear Selections
      </Button>
    </Juno>
  );
}
```

## Examples - percentage stacked bar chart

We recommend you start by wrapping your React document with the Motor parent component.
This handles two things:

- Connection to the Qlik Engine (you can pass configuration or the engine object directly)
- Theming

```jsx live
function BarDemo() {
  return (
    <Juno config={config}>
      <Bar
        title="Bar Chart"
        cols={[
          { qField: "[Product Sub Group Desc]", qLabel: "Product Sub Group" },
          {
            qField: "=Sum( [Sales Quantity]*[Sales Price])",
            qLabel: "Revenue",
          },
        ]}
      />
      <Button backgroundColor="brand" type="clearSelections">
        Clear Selections
      </Button>
    </Juno>
  );
}
```

## Examples - Suppress display of scroll bar

We recommend you start by wrapping your React document with the Motor parent component.
This handles two things:

- Connection to the Qlik Engine (you can pass configuration or the engine object directly)
- Theming

```jsx live
function BarDemo() {
  return (
    <Juno config={config}>
      <Bar
        title="Bar Chart"
        cols={[
          { qField: "[Product Sub Group Desc]", qLabel: "Product Sub Group" },
          {
            qField: "=Sum( [Sales Quantity]*[Sales Price])",
            qLabel: "Revenue",
          },
        ]}
      />
      <Button backgroundColor="brand" type="clearSelections">
        Clear Selections
      </Button>
    </Juno>
  );
}
```

## Props

<table>
  <tr>
    <th>Prop</th>
    <th>Description</th>
    <th>Options / Example</th>
  </tr>
  <tr>
    <td>config</td>
    <td>Configuration object to connect to the Qlik Engine. Must include Qlik site URL and an App name</td>
  <td></td>
  </tr>
  <tr>
    <td>label</td>
    <td>is this used ? </td>
  <td></td>
  </tr>
  <tr>
    <td>cols</td>
    <td></td>
  <td></td>
  </tr>
  <tr>
    <td>calcCondition</td>
    <td></td>
  <td></td>
  </tr>
  <tr>
    <td>suppressZero</td>
    <td></td>
  <td></td>
  </tr>
  <tr>
    <td>columnSortOrder</td>
    <td></td>
  <td></td>
  </tr>
  <tr>
    <td>sortDirection</td>
    <td></td>
  <td></td>
  </tr>
  <tr>
    <td>theme</td>
    <td></td>
  <td></td>
  </tr>
  <tr>
    <td>width</td>
    <td>Bar width</td>
  <td></td>
  </tr>
  <tr>
    <td>height</td>
    <td>The height of the Bar</td>
  <td></td>
  </tr>
  <tr>
    <td>margin</td>
    <td>The amount of margin around the component</td>
  <td></td>
  </tr>
  <tr>
    <td>size</td>
    <td>Size of the Bar </td>
  <td>'tiny', 'small', 'medium', 'large', 'xlarge'</td>
  </tr>
  <tr>
    <td>showLabels</td>
    <td>Label position</td>
  <td>'top', 'none', 'inside'</td>
  </tr>
  <tr>
    <td>textOnAxis</td>
    <td>Show text on Axis</td>
  <td>'both', 'yAxis', 'xAxis', 'none'</td>
  </tr>
  </table>
