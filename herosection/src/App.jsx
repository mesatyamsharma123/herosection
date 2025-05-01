import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './component/HeroSection'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-cover h-screen w-screen flex flex-col '
>
      <HeroSection/>
      <Footer/>
    </div>
      
  )
}

export default App
