import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { SideBarContextProvider } from './context/SideBarContext'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YourDreamCar',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideBarContextProvider>
          <Navbar />
          {children}
        </SideBarContextProvider>
      </body>
    </html>
  )
}
