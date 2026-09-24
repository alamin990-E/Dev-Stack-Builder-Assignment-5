import { Suspense } from "react";
import type { Itechnology } from "./components/Types/TechonologiesType";
import Technologies from "./components/ExploreTech/TechCards&Stack";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";



const promiseTechonologies = async (): Promise<Itechnology[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <Navbar></Navbar>
      </header>

      <main>
        {/* Hero section */}
        <section>
          <Hero></Hero>
        </section>

        {/* Explore the Technologies  */}
        <section className="container mx-auto px-4 md:px-0 mt-3 p-2 md:pt-5 md:mt-15">

           <div className="text-center md:text-start">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#0F172A] ">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
            <p className="text-[12px] sm:text-[16px] text-[#475569]  pt-2 pb-3">Pick one technology per category to build your ideal stack.</p>
           </div>

            <Suspense fallback={<h2>Loading...</h2>}>
                <Technologies promiseTechonologies={promiseTechonologies()}></Technologies>
            </Suspense>
        </section>


      </main>
    </>
  );
}

export default App;
