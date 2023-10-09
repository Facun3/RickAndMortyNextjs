import { AppProvider } from '@/context/AppContext'
import Navigation from '../components/Navigation'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <body className='bg-slate-700 text-white'>
        <AppProvider>
          <Navigation/>
          {children}          
        </AppProvider>
      </body>
    </html>
  )
}
