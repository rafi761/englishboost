import Navbar from "@/components/loggedpage/Navbar"

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Vocabulary | EnglishBoost',
    description: 'This is vocabulary page'
}

export default function VocabularyLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}