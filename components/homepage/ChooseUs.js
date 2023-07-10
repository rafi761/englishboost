const ChooseUs = () => {
  return (
    <div className="flex flex-col" id="chooseus">
        <h1 className="text-3xl font-semibold text-center">Why <span className="text-green-500">Choose</span> Us</h1>

        <div className="flex flex-col gap-y-4 mt-16 mb-24 lg:ml-20">
            <h1 className="text-3xl font-semibold">Improve Your <br /> Skills <span className="text-red-400">Faster</span></h1>
            <p className="text-gray-600">Website ini menyediakan fitur-fitur interaksi yang dapat meningkatkan <br />kemampuan penguasaan bahasa Inggris kamu menjadi lebih baik.</p>
            <p className="text-gray-600">Features</p>
            <div className="flex gap-x-3 lg:gap-x-5">
                <button
                    className="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 w-24"
                >
                    Quiz
                </button>
                <button
                    className="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 w-24"
                >
                    Game
                </button>
                <button
                    className="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
                >
                    Forum Diskusi
                </button>
            </div>
        </div>
    </div>
  )
}

export default ChooseUs