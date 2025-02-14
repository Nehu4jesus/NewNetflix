import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
// import Header from './Components/Header/Header'
// import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />  
    </>
  )
}

export default App
