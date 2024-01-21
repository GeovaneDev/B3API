import type { Metadata } from 'next'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'API B3: BrInvestAPI - Dados Financeiros Brasileiros em Tempo Real',
  description: 'Descubra a API B3 líder no mercado, BrInvestAPI. Fornece dados confiáveis e em tempo real sobre ações, cotações, índices e informações essenciais para o mercado financeiro do Brasil. Potencialize seus projetos com nossa solução robusta.'
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
