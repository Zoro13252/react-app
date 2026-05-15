import { useState } from 'react'
import './App.css'
import { Head } from './assets/Components/Header/Header.jsx'
import { Body } from './assets/Components/Body/body.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head />
      <Body />
    </>
  )
}

export default App
