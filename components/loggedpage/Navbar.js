'use client'

import { useState } from "react"
import Link from "next/link"
import { auth } from "@/db/firebaseConfig"
import {useAuthState} from 'react-firebase-hooks/auth'
import { useRouter } from "next/router"

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const signOut = () => {
      signOut(auth)
    }
    const router = useRouter()
    const [user] = useAuthState(auth)
    if(user == null){
      router.push('/login')
    }
  return (    
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/vocabulary" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">EnglishBoost</span>
        </Link>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
            onClick={() => auth.signOut()}
          >
            LogOut
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={handleToggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link href="/vocabulary" className="block py-2 pl-3 pr-4 text-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Vocabulary</Link>
            </li>
            <li>
              <Link href="/listening/level1" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Listening</Link>
            </li>
            <li>
              <Link href="/reading/level1" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Reading</Link>
            </li>
            <li>
              <Link href="/quiz" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Quiz</Link>
            </li>
            <li>
              <Link href="/chat" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Discussion</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar