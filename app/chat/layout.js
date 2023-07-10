import Navbar from "@/components/loggedpage/Navbar"

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Chat | EnglishBoost',
    description: 'This is chat page'
}

export default function ChatLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}