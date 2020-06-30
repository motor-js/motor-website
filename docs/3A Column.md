---
id: Column
title: Column
sidebar_label: Column
---

```jsx live
function BarDemo() {
  return (
    <Juno config={config}>
      <Column
        title="Bar Chart"
        cols={[
          { qField: "[Product Sub Group Desc]", qLabel: "Product Sub Group" },
          {
            qField: "=Sum( [Sales Quantity]*[Sales Price])",
            qLabel: "Revenue",
          },
        ]}
      />
      <Button backgroundColor="brand">Clear Selections</Button>
    </Juno>
  );
}
```
