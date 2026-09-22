import { Suspense } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar/navbar";
import type { Itechnology } from "./components/TechonologiesType";
import Technologies from "./components/techonologyCards/technologies";

const promiseTechonologies = async (): Promise<Itechnology[]> => {
  const res = await fetch("/public/data.json");
  const data = await res.json();
  return data;
};

function App() {
  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <Navbar></Navbar>
      </header>
      <main>
        {/* Hero section */}
        <section>
          <Hero></Hero>
        </section>

        {/* Explore the Technologies  */}
        <section className="container mx-auto  pt-5 mt-10">

           <h2 className="text-4xl font-extrabold text-[#0F172A] ">Explore the <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
            <p className="text-[#475569]  pt-2">Pick one technology per category to build your ideal stack.</p>

            <Suspense fallback={<h2>Loading...</h2>}>
                <Technologies promiseTechonologies={promiseTechonologies()}></Technologies>
            </Suspense>
        </section>


      </main>
    </>
  );
}

export default App;
