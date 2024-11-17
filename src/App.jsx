import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"

export default function App() {
  return (
    <main className="max-w-7xl mx-auto">
      {/* <h1 className="text-2xl text-white underline">React Three.js</h1> */}
      <Navbar />
      <Hero />
    </main>
  )
}
