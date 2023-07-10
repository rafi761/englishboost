'use client'

import Image from "next/image"
import { useState } from "react"

const About = () => {
    const [loading, setLoading] = useState(true)
  return (
    <div className="flex flex-col mt-24" id="about">
        <h1 className="text-3xl font-semibold text-center">About <span className="text-green-500">Courses</span></h1>

        <div className="grid grid-cols-1 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 lg:mx-20 mt-16 mb-24">
            <div className="h-96 flex flex-col items-center p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200">
                <div className="relative max-h-56 flex-1">
                    <Image
                        src='/images/vocabulary.png'
                        width={200}
                        height={200}
                        alt='Vocabulary Image'
                        className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                            loading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
                        }`}
                        onLoadingComplete={() => setLoading(false)}   
                    />
                </div>
                <div className="font-semibold mt-4 mb-1">
                    <p>Vocabulary / Kosakata</p>
                </div>
                <p className="italic text-xs w-64 line-clamp-3 text-gray-600 text-center">Materi ini akan mempelajari mengenai kosakata bahasa Inggris yang disesuaikan dengan tingkatan level</p>
            </div>

             <div className="h-96 flex flex-col items-center p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200">
                <div className="relative max-h-56 flex-1">
                    <Image
                        src='/images/listening.png'
                        width={200}
                        height={200}
                        alt='Listening Image'
                        className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                            loading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
                        }`}
                        onLoadingComplete={() => setLoading(false)}   
                    />
                </div>
                <div className="font-semibold mt-4 mb-1">
                    <p>Listening / Mendengarkan</p>
                </div>
                <p className="italic text-xs w-64 line-clamp-3 text-gray-600 text-center">Materi ini akan melatih pendengaran bahasa Inggris kita yang disesuaikan dengan tingkatan level</p>
            </div>

             <div className="h-96 flex flex-col items-center p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200">
                <div className="relative max-h-56 flex-1">
                    <Image
                        src='/images/reading.png'
                        width={200}
                        height={200}
                        alt='Reading Image'
                        className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
                            loading ? "scale-110 blur-2xl grayscale" : "scale-100 blur-0 grayscale-0"
                        }`}
                        onLoadingComplete={() => setLoading(false)}   
                    />
                </div>
                <div className="font-semibold mt-4 mb-1">
                    <p>Vocabulary / Kosakata</p>
                </div>
                <p className="italic text-xs w-64 line-clamp-3 text-gray-600 text-center">Materi ini akan melatih mengenai membaca kalimat dalam bahasa Inggris yang disesuaikan dengan tingkatan level</p>
            </div>
        </div>
    </div>
  )
}

export default About