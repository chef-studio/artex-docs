import React from 'react'
import Image from "next/image";
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <div className="flex- items-center justify-center gap-2.5 hover:cursor-pointer">
          <Image
            src="/logo/artex-logo-blue.svg"
            alt="Artex Logo"
            width={130}
            height={25}
            loading="eager"
          />
        </div>,
  project: {
    link: 'https://github.com/orgs/chef-studio/repositories',
  },
  chat: {
    link: 'https://t.me/+YKLSdi8NaQ85OTM1',
  },
  // i18n: [
  //   { locale: 'en-US', text: 'English' },
  //   { locale: 'zh-CN', text: '中文' },
  // ],
  docsRepositoryBase: 'https://github.com/chef-studio/ramen-docs',
  footer: {
    text: 'ArtexSwap © 2024',
  },
}

export default config
