'use client'

import Navbar from "@/components/chat/Navbar"
import ChatDisc from "@/components/chat/ChatDisc"

const Chat = () => {
  return (
    <div className="max-w-[728px] mx-auto text-center mt-20">
        <section className="flex flex-col bg-gray-100 mt-10 shadow-xl border relative">
            <Navbar />
            <ChatDisc />
        </section>
    </div>
  )
}

export default Chat