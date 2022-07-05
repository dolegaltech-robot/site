// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Do Legal Tech",
  tagline: "Helping you do legal tech projects better",
  url: 'https://dolegaltech.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'dolegaltech', // Usually your GitHub org/user name.
  projectName: 'dolegaltech', // Usually your repo name.
  customFields: {
    heroTitle: "Toolkits for the legal tech community"
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: true,
          sidebarCollapsed: false,

          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/jackwshepherd/dolegaltech/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      autoCollapseSidebarCategories: false,
      navbar: {
        title: 'Do Legal Tech',
        logo: {
          alt: 'do legaltech',
          src: 'img/logo.svg',
        },
        items: [
          {to: '/', label: 'Toolkits', position: 'left'},

          {
            href: 'https://github.com/jackwshepherd/dolegaltech',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/dolegaltech',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Contact',
                href: 'https://google.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Do Legal Tech All rights reserved`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

};

module.exports = config;
