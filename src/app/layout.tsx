import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'TradingView',
  description: 'TradingView is a social network for traders and investors on Stock, Futures and Forex markets!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col items-center'>{children}</body>
    </html>
  )
}
