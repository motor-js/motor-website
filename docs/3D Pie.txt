---
id: Pie
title: Pie
sidebar_label: Pie
---

```jsx live
function PieDemo() {
  return (
    <Motor config={config}>
      <Pie
        title="Pie Chart"
        cols={[
          { qField: "Sales Rep Name", qLabel: "Sales Rep" },
          { qField: "=Sum ([Sales Amount])", qLabel: "Sales $" },
        ]}
      />
    </Motor>
  );
}
```
