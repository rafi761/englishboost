import Navbar from "@/components/loggedpage/Navbar"

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Reading | EnglishBoost',
    description: 'This is reading page'
}

export default function ReadingLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}