'use client'

import Navbar from "@/components/loggedpage/Navbar"
import VocabType from "@/components/vocabulary/VocabType"
import {useSession} from "next-auth/react"

export const metadata = {
    title: 'Vocabulary | EnglishBoost',
    description: 'This is vocabulary page'
}

const Vocabulary = () => {
  const {session, status} = useSession()
  console.log(session?.user?.uid);
  return (
    <div className="flex flex-col min-h-screen max-w-7xl mx-auto px-8 xl:px-0">
        <Navbar />
        <VocabType />
    </div>
  )
}

export default Vocabulary