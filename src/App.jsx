import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import SingleResult from './Pages/SingleResult'
import Header from './Components/Header'
import Footer from './Components/Footer'
import TOS from './Pages/TOS'
import Privacy from './Pages/Privacy'
import userManager from './Pages/UserManager'
import Maps from './Pages/Maps'
import Charts from './Pages/Charts'
import UserManager from './Pages/UserManager'
import { useState } from 'react'
import Login from './Pages/Login'

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
      <Route path="/userManager" element={<UserManager selectedOption={selectedOption} />}></Route>
      <Route path="/maps" element={<Maps selectedOption={selectedOption} />}></Route>
      <Route path="/charts" element={<Charts selectedOption={selectedOption} />}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App;
