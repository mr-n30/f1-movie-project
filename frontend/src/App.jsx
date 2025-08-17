import { useState } from 'react'
import Navbar from './assets/components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main-container'>
      <iframe src="https://www.youtube.com/embed/CT2_P2DZBR0?si=7TjVZhcQWuPzc-eE&autoplay=1&mute=1&loop=1&playlist=CT2_P2DZBR0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <Navbar />
      <button className='watch-trailer-button'><a href='https://youtu.be/CT2_P2DZBR0?si=5X7VW2SAQPvls_a9' target='_blank'>Watch Trailer</a></button>
    </div>
  )
}

export default App
