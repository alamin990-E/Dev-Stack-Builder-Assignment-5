import Hero from "./components/hero"
import Navbar from "./components/navbar/navbar"



function App() {
  
  

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
          <Navbar></Navbar>
      </header>
      <main>
          <section>
              <Hero></Hero>
          </section>
      </main>
    </>
  )
}

export default App
