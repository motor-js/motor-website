module.exports = {
  title: 'The React Framework for Qlik Mashups',
  tagline: 'Charts, Components & Utilities for the rapid creation of custom dashboards off the Qlik Engine',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Motor', // Usually your GitHub org/user name.
  projectName: 'Motor', // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],
  stylesheets: [{
    href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap",
    type: 'text/css',
  }],
  themeConfig: {
    sidebarCollapsible: true,
    navbar: {
      title: '',
      logo: {
        alt: 'Motor Logo',
        src: 'img/motor_js_5a.png',
        srcDark: 'img/motor_js_5b.png',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'pricing',
          label: 'Pricing',
          position: 'left',
        },
        {
          to: 'blog',
          label: 'Blog',
          position: 'left',
        },
        {
          to: 'learn/',
          label: 'Learn',
          position: 'left',
        },
        {
          to: 'pricing/',
          label: 'Get a License',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Gitter',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Motor, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'Introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
