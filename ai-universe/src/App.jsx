import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import SortButton from './components/SortButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Heading/>
     <SortButton />
    </div>
  )
}

export default App
