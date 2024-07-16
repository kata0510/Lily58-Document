import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Lily58 Document',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/lily58/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kata0510', // Usually your GitHub org/user name.
  projectName: 'Lily58-Document', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          routeBasePath: 'docs', 
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Lily58 Document',
      logo: {
        alt: 'Lily58 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'topSidebar',
          position: 'left',
          label: 'TOP',
        },
        {
          type: 'docSidebar',
          sidebarId: 'prov2Sidebar',
          position: 'left',
          label: 'Lily58 Pro V2',
        },
        {
          type: 'docSidebar',
          sidebarId: 'proSidebar',
          position: 'left',
          label: 'Lily58 Pro',
        },
        {
          type: 'docSidebar',
          sidebarId: 'literev3Sidebar',
          position: 'left',
          label: 'Lily58 Lite Rev3',
        },
        {
          type: 'docSidebar',
          sidebarId: 'literev2Sidebar',
          position: 'left',
          label: 'Lily58 Lite Rev2',
        },
        {
          href: 'https://github.com/kata0510/Lily58',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://github.com/kata0510/Lily58-Document',
          label: 'Document Repository',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/lily58/docs/intro',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} yuchi`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  stylesheets: [
    // 他のスタイルシートがあればここに追加
    '/css/custom.css',
  ],
  plugins: [
  ],
};

export default config;
