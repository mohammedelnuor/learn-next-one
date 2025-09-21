import Image from 'next/image'

function Headar() {
  return (
  <div className="flex flex-col-reverse md:flex-row justify-center items-center p-4 mt-10 md:mt-56 max-w-7xl mx-auto">

  <div className="md:w-1/2 w-fit justify-center items-center md:mb-2 mb-8 mt-9 md:mt-0">
    <h1 className="text-4xl font-bold mb-4">
      SkyLine Real Estate
    </h1>

    <p className='md:p-2 text-xs md:text-xs p-1'>
      We provide you with the keys to your dream home, offering modern options at affordable prices.
    </p>
    <p className='md:p-2 text-xs md:text-sm p-1'>
      Your trust is our greatest investment, and your future is our real project.
    </p>

    <button className="mt-6 rounded-lg bg-cyan-600 px-6 py-3 text-white font-semibold hover:bg-cyan-700 transition md:p-2 m-2 cursor-pointer">
      Contact Us
    </button>

    <button className="mt-6 rounded-lg bg-cyan-600 px-6 py-3 text-white font-semibold hover:bg-cyan-700 m-2 cursor-pointer transition md:p-2">
        Our Services
    </button>
  </div>

  <div className="md:w-1/3 w-fit justify-center items-center mt-9 md:mt-0">
    <Image
      alt="Your Company"
      src="/h1 (2).jpeg"
      width={300}
      height={300}
      className="rounded-full"
    />
  </div>

</div>

  )
}

export default Headar