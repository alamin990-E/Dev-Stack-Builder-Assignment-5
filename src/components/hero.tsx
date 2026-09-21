import Banner from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between  mt-12">
      {/* hero text  */}
      <div className="space-y-5 px-4 md:px-0 ">
        <h2 className="text-4xl text-center md:text-left md:text-5xl lg:text-6xl font-extrabold text-[#0F172A]">
          Build Your Ideal <br />{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">
            Development Stack
          </span>
        </h2>
        <p className="text-[#475569] mt-6 text-[12px] sm:text-[16px] text-center md:text-left">
          Explore frontend, backend, database, and tooling options,
          <br />
          compare them side by side, and put together the stack that fits your
          next project.
        </p>
        {/* hero button  */}
        <div className="flex gap-5 items-center mt-10 justify-center md:justify-start">
          <button className="bg-brand-gradient py-1.5 px-3 sm:py-2.5 sm:px-5 text-white font-medium rounded-xl hover:opacity-90 cursor-pointer">
            Explore Technologies
          </button>
          <button className="py-2 px-7 sm:py-2.5 sm:px-14 border border-gray-300 rounded-xl font-medium hover:bg-gray-100 cursor-pointer">
            Learn More
          </button>
        </div>
      </div>

      {/* hero banner image */}
      
        <div>
          <img className="w-104 h-auto " src={Banner} alt="Banner" />
        </div>
      
    </div>
  );
}
