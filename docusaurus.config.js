/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  
  title: 'FCX Documentation',
  tagline: 'FCX Documentation',
  url: 'https://ghrc-cloud.gitlab.io',
  // baseUrl: '/FCX-docs/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logos/fcx-logo.png',
  organizationName: 'ghrc-cloud', // Usually your GitHub org/user name.
  projectName: 'FCX-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'FCX Documentation',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logos/fcx-logo.png',
      },
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Field Campaign Explorer',
          items: [
            {
              label: 'FCX Home Page',
              href: 'https://ghrc.earthdata.nasa.gov/fcx/index.html',
            },
          ],
        },
        {
          title: 'Orginizations',
          items: [
            {
              label: 'GHRC',
              href: 'https://ghrc.nsstc.nasa.gov/home/',
            },
            {
              label: 'ITSC',
              href: 'https://www.itsc.uah.edu/home/',
            },
            {
              label: 'UAH',
              href: 'https://www.uah.edu/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Gitlab',
              href: 'https://gitlab.com/ghrc-cloud/fcx-backend',
            },
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/anupamdahal/FCX-docs.git',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: false
      },
    ],
  ],
};
