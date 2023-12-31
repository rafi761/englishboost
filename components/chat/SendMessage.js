'use client'

import { useState } from "react"
import { auth, db } from "@/db/firebaseConfig"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"

const SendMessage = ({scroll}) => {
    const [input, setInput] = useState('')
    const sendMessage = async (e) => {
        e.preventDefault()
        if(input === ''){
            alert('please input a valid message')
            return
        }
        const {uid, displayName} = auth.currentUser
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setInput('')
        scroll.current.scrollIntoView({behavior: 'smooth'})
    }
  return (
    <form onSubmit={sendMessage} className="h-14 w-full max-w-[728px] flex text-xl sticky bottom-0">
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Message..." className="w-full text-xl p-3 bg-gray-900 text-white outline-none border-none" />
        <button type="submit" className="w-[20%] bg-green-500">Send</button>
    </form>
  )
}

export default SendMessage