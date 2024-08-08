import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import SingleResult from './Pages/SingleResult'
import Header from './Components/Header'
import Footer from './Components/Footer'
import TOS from './Pages/TOS'
import Privacy from './Pages/Privacy'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/:id" element={<SingleResult/>}></Route>
      <Route path="/tos" element={<TOS/>}></Route>
      <Route path="/privacy" element={<Privacy/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App