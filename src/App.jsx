import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import SingleResult from './Pages/SingleResult'
import Header from './Components/Header'
import Footer from './Components/Footer'
import TOS from './Pages/TOS'
import Privacy from './Pages/Privacy'
import Maps from './Pages/Maps'
import Charts from './Pages/Charts'
<Route path="/charts" element={<Charts selectedOption={selectedOption} />}></Route>
import { useState } from 'react'

function App() {
  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem('selectedOption') || '');
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>}></Route>
      <Route path="/:id" element={<SingleResult/>}></Route>
      <Route path="/tos" element={<TOS/>}></Route>
      <Route path="/privacy" element={<Privacy/>}></Route>
      <Route path="/statistics" element={<Statistics selectedOption={selectedOption} />}></Route>
      <Route path="/maps" element={<Maps selectedOption={selectedOption} />}></Route>
      <Route path="/charts" element={<Charts selectedOption={selectedOption} />}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
