import Image from "next/image";
function About() {
  return (
    <>

    <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center md:justify-center mt-32  md:mt-64">

             <div className="md:w-1/3 w-fit justify-center items-center mt-9 md:mt-0">
                <Image
                  alt="Your Company"
                  src="/ab2.jpeg"
                  width={300}
                  height={400}
                  className="rounded-xl"
                />
              </div>

            <div className="md:w-1/2 w-fit justify-center items-center md:mb-2 mb-8 mt-9 md:mt-0 p-4">

            <h2 className="text-3xl font-bold mb-4">About Us</h2>

            <div className="space-y-4 mb-3 ">
                <p className="p-2 text-xs md:text-sm">At SkyLine Real Estate, we dont just sell properties—we hand you the keys to a new life. We believe a home is more than walls and a roof; it’s a space filled with dreams and aspirations. Thats
                     why we offer modern housing options that combine contemporary design with affordable pricing, making quality living accessible to all.</p>
            </div>
            <div className="space-y-4 mb-3">
                <p className="p-2 text-xs md:text-sm">Our clients trust is our greatest investment. We place customer satisfaction at the heart of every step—from the first consultation to handing over the keys. With transparency and integrity as our foundation,
                     we ensure your experience with us is smooth and reassuring, because we know buying a home is a life-changing decision.</p>
            </div>
            <div className="space-y-4 mb-3">
                <p className="p-2 text-xs md:text-sm">We dont just meet todays needs—we help you plan for a brighter tomorrow. Through market insights and smart real estate consulting, we help you build a solid foundation 
                    for your future. Because every new home marks the beginning of a new story, and were proud to be part of yours.</p>
            </div>


            

            </div>

        </div>

    </div>
    </>
  )
}

export default About;