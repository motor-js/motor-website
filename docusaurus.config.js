module.exports = {
  title: "The React Framework for Qlik Sense Mashups",
  tagline:
    "Charts, Components & Utilities for the rapid creation of custom dashboards off the Qlik Engine",
  url: "https://motor-js.io",
  baseUrl: "/",
  favicon: "img/m_icon.png",
  organizationName: "Motor.js", // Usually your GitHub org/user name.
  projectName: "Motor.js", // Usually your repo name.
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
      id: "star",
      content:
      '<span class="text-white">If you like motor.js, give it a ⭐️ on <a target="_blank" rel="noopener noreferrer" href="https://github.com/motor-js/motor-ui">GitHub!</a></span>'
       /* '<span class="text-white"<b>motor js</b> is in beta, beware of breaking changes ⚒️</span>',*/
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
          to: "enterprise",
          label: "Enterprise",
          position: "left",
        },
        {
          to: "blog",
          label: "Blog",
          position: "left",
        },
        {
          to: "https://spectrum.chat/motor-js",
          label: "Community",
          position: "left",
        },
        {
          to: "https://github.com/motor-js/motor-ui",
          label: "GitHub",
          position: "right",
        },
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
              label: "Privacy Policy",
              to: "privacy/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Spectrum",
              href: "https://spectrum.chat/motor-js",
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
  plugins: ['@docusaurus/plugin-ideal-image'],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "Introduction",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://www.motor-js.io/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://www.motor-js.io/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
