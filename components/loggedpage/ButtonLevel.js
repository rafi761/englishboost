import Link from "next/link"

const ButtonLevel = ({link, title}) => {
  return (
    <Link href={`${link}`}>
        <button
            type="button"
            className="text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0"
            >
            {title}
        </button>
    </Link>
  )
}

export default ButtonLevel