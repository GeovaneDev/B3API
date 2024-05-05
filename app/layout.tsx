import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'B3API: Dados Financeiros Brasileiros em Tempo Real | API B3',
  description: 'B3API: Obtenha dados financeiros brasileiros em tempo real para ações, fundos imobiliários, criptomoedas e ETFs. Acesse informações confiáveis e instantâneas.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="pt-br">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  )
}
