import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import SortButton from './components/SortButton'
import Cards from './components/Cards/Cards'

function App() {
  const [count, setCount] = useState(0)
 
 
  return (
    <div className="App">
     <Heading/>
     <SortButton>Sort By Date</SortButton>
     <Cards />
    </div>
  )
}

export default App
