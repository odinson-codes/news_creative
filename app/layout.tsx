import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/footer'
import Searchbox from './Footer/searchBox'
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
      <body className={inter.className}>
        <Navbar/>
        <div className="border-t border-gray-300 my-4"></div>
        <div className="border-t border-gray-300 my-4"></div>
        <div className="border-t border-gray-300 my-4"></div>
        <div className="border-t border-gray-300 my-4"></div>
        <Searchbox/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
