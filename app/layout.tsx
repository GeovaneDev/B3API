import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BrInvestAPI - Dados Financeiros Brasileiros | API B3',
  description: 'Descubra a melhor API B3, BrInvestAPI. Fornece dados confiáveis e em tempo real sobre ações, cotações, índices e informações essenciais para o mercado financeiro do Brasil. Experimente agora!'
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
