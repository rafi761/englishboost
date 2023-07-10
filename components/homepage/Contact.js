const Contact = () => {
  return (
    <div className="flex flex-col" id="contact">
        <h1 className="text-3xl font-semibold text-center"><span className="text-green-500">Contact</span> Us</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 mb-24">
            <div className="sm:ml-28 bg-white p-8">
                <h1 className="font-semibold text-3xl">We are here</h1>
                <p className="text-gray-500 font-semibold">Our door is always open for your <br /> experience</p>
            </div>
            <div className="sm:ml-28 p-8 bg-sky-600 text-white">
                <h1 className="font-semibold text-3xl">We are here</h1>
                <p className="font-semibold">Share your experience with us</p>
                <p>khalif_rafi12@student.uns.ac.id</p>
            </div>
        </div>
    </div>
  )
}

export default Contact