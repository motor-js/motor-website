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
          { qField: "=Sum ([Sales Amount])", qLabel: "Sales $" },
        ]}
      />
    </Juno>
  );
}
```
