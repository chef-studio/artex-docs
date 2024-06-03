const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  // i18n: {
  //   locales: ['en-US', 'zh-CN'],
  //   defaultLocale: 'en-US'
  // },
  distDir: "build",
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port: '',
        pathname: '**',
      },
    ],
  },
})
