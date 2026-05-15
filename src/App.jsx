import { useState } from 'react'
import './App.css'
import { Head } from '/src/assets/Components/Header/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head />
    </>
  )
}

export default App
