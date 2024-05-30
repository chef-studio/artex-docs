import React from 'react'
import Image from "next/image";
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <div className="flex- items-center justify-center gap-2.5 hover:cursor-pointer">
          <Image
            src="/logo/ion-logo-blue.svg"
            alt="ION Logo"
            width={130}
            height={25}
            loading="eager"
          />
          <span className="text-blue-500 font-bold text-2xl">ArtexSwap</span>
        </div>,
  project: {
    link: 'https://github.com/orgs/chef-studio/repositories',
  },
  chat: {
    link: 'https://t.me/artexswap',
  },
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'zh-CN', text: '中文' },
  ],
  docsRepositoryBase: 'https://github.com/chef-studio/ramen-docs',
  footer: {
    text: 'ArtexSwap © 2024',
  },
}

export default config
