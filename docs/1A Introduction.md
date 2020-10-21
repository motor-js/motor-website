---
id: Introduction
title: Introduction
sidebar_label: Introduction
---

## Motivation

Motor.js exists to simplify the creation of custom dashboards off the Qlik engine. 

The Qlik APIs provide an interface for building web mashups, 
allowing for custom user experiences powered by Qlik's associative engine.
These mashups are often lengthy to develop and require specialist knowledge of the Qlik APIs.

Motor has been developed to make building these dashboards easy, by handling connection to the engine 
and providing complete components, graphs and utilities.

Motor.js aims to provide the following:

- <b>Easy Mashup Development</b>: We aim to make the creation of Qlik Mashups as simple as possible for developers, removing the need 
for detailed knowledge of the Qlik APIs.
- <b>Powerful Theming</b>: Motor.js is based off a CSS in JS framework. You can tailor the component library to your brand and layout needs, from simply applying your 
brand color, to editing our theme object and component functionality via props.
- <b>Helpful Utilities</b>: Re-usable hooks to simplify interaction with the associative engine


## What it is

Motor is a front-end React library consisting of charts, components and utilities for the rapid creation of Qlik mashups. 
The components work via any connection to the Qlik engine, whether that's Qlik Core, Qlik Sense Server or Qlik Sense cloud.

:::important
You need a valid connection to a Qlik Sense Engine to use this library.
You can configure this in our top level Motor component by setting the config prop or passing the engine object directly.
:::

The library is split into the following core parts
- Contexts: Leverging React's Context API to provide context throughout your dashboard including connection to the Engine, Theming and Responsiveness
- Visualisations: Charts and Graphs to visualise your data
- Components: Dashboard tools for interacting with data including Selections, Filtering & Search
- Layout: Layout components for easy dashboarding, these do not require connection to a Qlik engine
- Hooks: Re-usable functions to interact with the engine. Including creating HyperCubes and Bookmarks



## How it Works

Motor.js is made up of a series of re-usable components which can be easily brought together to build custom dashboards.

These components are built in React and connect to the Qlik engine using the Engine API and Enigma JS. 

The top level Motor component is firstly used to connect to your Qlik site, this then provides an open connection to the rest
of the application, via React's Context API.

All other components can then be used like any other React component. 



## Technical Overview

This section will break down the libraries and technologies used by Motor.

#### React

Motor.js is a React library utilising React hooks, we currently don't support other frameworks such as Angular or Vue. 

#### Styled Components

Motor uses CSS in JS for styling, more specifically Styled Components. 
You can check out details of our theming framework here.

#### Enigma JS

Motor communicates with the Qlik engine via EngimaJS, our components have no dependencies on the Capability APIs.

#### visx

Motor js charts are built on top of D3, using https://airbnb.io/visx/. 


## Authentication

Motor is a front end framework, so does not handle authentication. You can check out examples of how to connect to the Qlik engine via JWT or certificates here.
We aim to make it easy to connect to the engine, once you've authenticated, by setting the config or passing the engine object
to our top level Motor component.


