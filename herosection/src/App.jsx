import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './component/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HeroSection/>
    </div>
      
  )
}

export default App
