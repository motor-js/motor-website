---
id: Pie
title: Pie
sidebar_label: Pie
---


```jsx live

function PieDemo() {
    return (
    <Juno config={config}>  
      <Pie
        title='Pie Chart'
        cols={[
          { qField: 'country', qLabel: 'Country' },
          { qField: '=Count(winery)', qLabel: 'No of Wineries' }
        ]}
      />
    </Juno>
    )
}

```