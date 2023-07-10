import Link from "next/link"
import Image from "next/image"

const Landing = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mt-48" id="landing">
        <div className="flex flex-col gap-y-4 text-center lg:text-start lg:justify-center lg:ml-20">
            <h2 className="text-3xl font-semibold"><span className="text-red-400">Online</span> Education</h2>
            <h1 className="text-4xl font-semibold">Improve Your English <br /> Skills</h1>
            <p className="font-semibold text-gray-500">We will teach you about the english basics</p>
            <Link href='/login'>
                <button
                    className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
                >
                    Get Started
                </button>
            </Link>
            
        </div>
        <div className="hidden lg:flex lg:flex-col">
            <Image 
                src='/images/landing.jpg'
                width={600}
                height={600}
                alt='Landing Image'
            />
        </div>
    </div>
  )
}

export default Landing