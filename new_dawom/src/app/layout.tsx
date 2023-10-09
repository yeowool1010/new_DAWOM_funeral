'use client'

import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header, CallNav2, Footer } from '../component/main-'
import { RecoilRoot } from 'recoil'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

// 빌드에러원인 원본코드
// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <html lang="kr">
        <body className={inter.className}>
          <Header />
          <CallNav2 />
          {children}
          <Footer />
        </body>
      </html>
    </RecoilRoot>
  )
}
