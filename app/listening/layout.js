import Navbar from "@/components/loggedpage/Navbar"

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Listening Page | EnglishBoost',
    description: 'This is listening page'
}

export default function ListeningLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}