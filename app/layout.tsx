import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BrInvestAPI',
  description: 'Informações sobre ações da bolsa de valores brasileira (B3)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <html lang="pt-br">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  )
}
