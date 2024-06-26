import type { Metadata } from 'next'
import { Libre_Caslon_Display } from 'next/font/google'
import './globals.css'
import PrelineScript from './PrelineScript'

const libreCaslon = Libre_Caslon_Display({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
    <body className={libreCaslon.className}>{children}</body>
      <PrelineScript />
    </html>
  )
}
