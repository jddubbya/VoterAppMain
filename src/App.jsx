import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import SingleResult from './Pages/SingleResult'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/:id" element={<SingleResult/>}></Route>
    </Routes>
    </>
  )
}

export default App
