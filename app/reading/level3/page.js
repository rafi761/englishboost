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
            <ButtonLevel link='/reading/level1' title='Level 1'/>
            <ButtonLevel link='/reading/level2' title='Level 2'/>
            <ButtonLevel link='/reading/level3' title='Level 3'/>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-20 sm:grid-cols-2 mt-16 mb-24 mx-auto">
            <Link href='/reading/level3/read1'>
                <div className="h-80 w-64 flex flex-col items-center p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200">
                    <div className="relative max-h-56 flex-1">
                        <Image
                            src='/images/read-level3-1.png'
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
                        <p className="text-green-500 text-center">Sustainable Development</p>
                    </div>
                </div>
            </Link>
            <Link href='/reading/level3/read2'>
                <div className="h-80 w-64 flex flex-col items-center p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200">
                    <div className="relative max-h-56 flex-1">
                        <Image
                            src='/images/read-level3-2.png'
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
                        <p className="text-green-500">Artificial Intelligence</p>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Level3