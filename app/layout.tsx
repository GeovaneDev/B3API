import type { Metadata } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'B3API - Dados Financeiros Brasileiros | API B3',
  description: 'A B3API oferece dados financeiros brasileiros confiáveis e em tempo real.'
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
