import React from 'react'
import Image from "next/image";
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  
  logo: <div className="flex-shrink items-center justify-center gap-2.5 hover:cursor-pointer">
          <Image
            src="/logo/ramen-logo.svg"
            alt="Ramen Logo"
            width={26.86}
            height={23.55}
            loading="eager"
          />
          <h1 className="text-white text-xl font-medium">RamenSwap</h1>
        </div>,
  project: {
    link: 'https://github.com/orgs/chef-studio/repositories',
  },
  chat: {
    link: 'https://t.me/ramenswap.xyz',
  },
  docsRepositoryBase: 'https://github.com/chef-studio/ramen-docs',
  footer: {
    text: 'RamenSwap © 2024',
  },
}

export default config
