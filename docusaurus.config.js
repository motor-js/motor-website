module.exports = {
  title: "The React Framework for Qlik Sense Mashups",
  tagline:
    "Charts, Components & Utilities for the rapid creation of custom dashboards off the Qlik Engine",
  url: "https://friendly-volhard-3f5c11.netlify.app",
  baseUrl: "/",
  favicon: "img/m_icon.png",
  organizationName: "Motor", // Usually your GitHub org/user name.
  projectName: "Motor", // Usually your repo name.
  themes: ["@docusaurus/theme-live-codeblock"],
  stylesheets: [
    {
      href:
        "https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap",
      type: "text/css",
    },
  ],
  themeConfig: {
    disableDarkMode: true,
    announcementBar: {
      id: "beta",
      content:
        '<span class="text-white"<b>motor js</b> is in beta, beware of breaking changes ⚒️</span>',
      /* backgroundColor: 'var(--blueBrand)', */
    },
    googleAnalytics: {
      trackingID: "UA-173440524-1",
    },
    sidebarCollapsible: true,
    navbar: {
      title: "",
      logo: {
        alt: "Motor Logo",
        src: "img/motor_red.png",
        srcDark: "img/motor_red.png",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "pricing",
          label: "Pricing",
          position: "left",
        },
        {
          to: "blog",
          label: "Blog",
          position: "left",
        },
        // {
        //   to: "community",
        //   label: "Community",
        //   position: "left",
        // },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Docs",
              to: "docs/",
            },
            {
              label: "GitHub",
              href: "https://github.com/motor-js",
           },
           {
             label: "License",
             to: "license/"
           },
           {
            label: "Privacy Policy",
            to: "privacy/"
          }
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: 'Spectrum',
              href: 'https://spectrum.chat/motor-js',
            },
            {
              label: "Twitter",
              href: "https://twitter.com/MotorJS_IO",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Email",
              href:
                "mailto:hello@motor-js.io?subject=Please tell me more about Motor-JS!",
            },
          ],
        },
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "Blog",
        //       to: "blog",
        //     },
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/facebook/docusaurus",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Motor, Inc.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "Introduction",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
