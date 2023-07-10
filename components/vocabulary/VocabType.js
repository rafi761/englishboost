'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const VocabType = () => {
    const [loading, setLoading] = useState(true)
  return (
    <div className="flex flex-col mt-32">
        <h1 className="text-3xl font-semibold text-center">Vocabulary <span className="text-green-500">Type</span></h1>

        <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-4 lg:mx-20 mt-16 mb-24">
            <Link href='/vocabulary/verb/level1'>
                <div className="h-80 flex flex-col items-center p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200">
                    <div className="relative max-h-56 flex-1">
                        <Image
                            src='/images/verb.png'
                            width={200}
                            height={200}
                            alt='Verb Image'
                            className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                                loading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
                            }`}
                            onLoadingComplete={() => setLoading(false)}   
                        />
                    </div>
                    <div className="font-semibold mt-4 mb-1">
                        <p className="text-green-500">Verb / Kata Kerja</p>
                    </div>
                </div>
            </Link>

             <Link href='/vocabulary/noun/level1'>
                <div className="h-80 flex flex-col items-center p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200">
                    <div className="relative max-h-56 flex-1">
                        <Image
                            src='/images/noun.png'
                            width={200}
                            height={200}
                            alt='Noun Image'
                            className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                                loading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
                            }`}
                            onLoadingComplete={() => setLoading(false)}   
                        />
                    </div>
                    <div className="font-semibold mt-4 mb-1">
                        <p className="text-green-500">Noun / Kata Benda</p>
                    </div>
                </div>
             </Link>

             <Link href='/vocabulary/adjectiva/level1'>
                <div className="h-80 flex flex-col items-center p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200">
                    <div className="relative max-h-56 flex-1">
                        <Image
                            src='/images/adjective.png'
                            width={200}
                            height={200}
                            alt='Adjectiva Image'
                            className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                                loading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
                            }`}
                            onLoadingComplete={() => setLoading(false)}   
                        />
                    </div>
                    <div className="font-semibold mt-4 mb-1">
                        <p className="text-green-500">Adjectiva / Kata Sifat</p>
                    </div>
                </div>
             </Link>

            <Link href='/vocabulary/pronoun/personal'>
                <div className="h-80 flex flex-col items-center p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200">
                    <div className="relative max-h-56 flex-1">
                        <Image
                            src='/images/pronoun.png'
                            width={200}
                            height={200}
                            alt='Adjectiva Image'
                            className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                                loading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
                            }`}
                            onLoadingComplete={() => setLoading(false)}   
                        />
                    </div>
                    <div className="font-semibold mt-4 mb-1">
                        <p className="text-green-500">Pronoun / Kata Ganti</p>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default VocabType