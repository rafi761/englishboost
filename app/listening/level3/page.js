'use client'

import Link from "next/link"
import Image from "next/image"
import ButtonLevel from "@/components/loggedpage/ButtonLevel"
import { useState } from "react"

const Level3 = () => {
    const [loading, setLoading] = useState(true)
  return (
    <div className="flex flex-col mt-28 max-w-7xl mx-auto px-8 xl:px-0">
        <div className="flex gap-x-4">
            <ButtonLevel link='/listening/level1' title='Level 1'/>
            <ButtonLevel link='/listening/level2' title='Level 2'/>
            <ButtonLevel link='/listening/level3' title='Level 3'/>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-20 sm:grid-cols-2 mt-16 mb-24 mx-auto">
            <Link href='/listening/level3/listen1'>
                <div className="h-64 w-64 flex flex-col items-center p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200">
                    <div className="relative max-h-56 flex-1">
                        <Image
                            src='/images/c1.jpg'
                            width={250}
                            height={250}
                            alt='Listening Image'
                            className={`relative object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                                loading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
                            }`}
                            onLoadingComplete={() => setLoading(false)}   
                        />
                        <Image 
                            src='/images/play.png'
                            alt="Play button"
                            width={50}
                            height={50}
                            className={`absolute left-20 top-24 object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                                loading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
                            }`}
                            onLoadingComplete={() => setLoading(false)}
                        />
                    </div>
                    <div className="font-semibold mt-4 mb-1">
                        <p className="text-green-500">Listening Level C1</p>
                    </div>
                </div>
            </Link>
            <Link href='/listening/level3/listen2'>
                <div className="h-64 w-64 flex flex-col items-center p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200">
                    <div className="relative max-h-56 flex-1">
                        <Image
                            src='/images/c2.jpg'
                            width={250}
                            height={250}
                            alt='Listening Image'
                            className={`relative object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                                loading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
                            }`}
                            onLoadingComplete={() => setLoading(false)}   
                        />
                        <Image 
                            src='/images/play.png'
                            alt="Play button"
                            width={50}
                            height={50}
                            className={`absolute left-20 top-24 object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                                loading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
                            }`}
                            onLoadingComplete={() => setLoading(false)}
                        />
                    </div>
                    <div className="font-semibold mt-4 mb-1">
                        <p className="text-green-500">Listening Level C2</p>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Level3