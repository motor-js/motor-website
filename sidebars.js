module.exports = {
  docs: [
    {
      type: "category",
      label: "Introduction",
      items: [
        "Introduction",
        "Getting Started",
        "Theming",
        "Colors",
        "Capability APIs",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Contexts",
      items: ["Motor", "Engine Context", "Capability Context"],
      collapsed: false,
    },
    {
      type: "category",
      label: "Visualisations",
      items: [
        "Bar",
        "Line",
        "Area",
        /*"Combo",*/
        /*"Pie",*/
        "Scatter",
        "Table",
        "KPI",
        "Qlik Object",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Components",
      items: [
        "Button",
        "Filter",
        "Current Selections",
        "Qlik Selections",
        "Search",
        "Smart Heading",
        "Login",
      ],
      collapsed: false,
    },
    {
      type: "category",
      label: "Layout",
      items: ["Grid", "Box", "Sidebar", "Modal", "NavItem"],
      collapsed: false,
    },
    {
      type: "category",
      label: "Hooks",
      items: [
        "useEngine",
        "useHyperCube",
        "useListObject",
        "useSelectionObject",
        "useSearch",
        "useSidebar",
        "useModal",
      ],
      collapsed: false,
    },
  ],
};
