import { useState } from 'react'
import Navbar from './assets/components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <Navbar />
      <button className='watch-trailer-button'>Watch Trailer</button>
    </div>
  )
}

export default App
