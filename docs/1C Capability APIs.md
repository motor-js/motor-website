---
id: Capability APIs
title: Capability APIs
sidebar_label: Capability APIs
---

Motor js also supports using the Capability APIs in your React mashups. These APIs will be loaded
into your mashup if you set the <code>capabilityAPI</code> prop in the Motor component to <code>true</code>.

The Capability APIs are used in both the <b>QlikObject</b> and <b>QlikSelections</b> components, which you'll see listed in the 
documentation. These will enable you to load objects from your Qlik mashup or the current selections bar.

You can also access these APIs via the Capability Context which will give you access to the app class. You can use this to add 
other functionality such as making selections or creating a bookmark.

:::info
By loading the Capability APIs into your mashup, you are also loading CSS files from the Qlik server. 
Note that these may clash with your mashups CSS.
:::

As an overview, the Capability APIs are a collection of java script APIs that enable you easily embed Qlik objects into your web page and also provides various methods for interacting with the engine. 

See the Qlik [docs](https://qlik.dev/apis/javascript/capabilities) for more information.

