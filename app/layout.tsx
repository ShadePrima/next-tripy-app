import './globals.scss'
import type { Metadata } from 'next'
import { Inter, Barlow } from 'next/font/google'

const barlow = Barlow({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Tripy',
  description: "Dare to live the life you've always wanted.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={barlow.className}>{children}</body>
    </html>
  )
}
