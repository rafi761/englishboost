import Link from "next/link"

const Quiz = () => {
  return (
    <div className="flex flex-col gap-[30px] justify-center items-center min-h-screen">
        <div className="text-center flex flex-col gap-[15px]">
            <h1 className="text-3xl font-semibold">You want to test your knowledge ?</h1>
            <h2 className="text-xl font-semibold">Lets play the quiz</h2>
        </div>
        <Link href="/quiz/firstquiz">
            <button className="bg-gray-400 border-0 px-[16px] py-[10px] text-white font-semibold rounded-xl">
                Start Quiz
            </button>
        </Link>
    </div>
  )
}

export default Quiz