import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
