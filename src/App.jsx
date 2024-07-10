import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './Pages/Home'
import SingleResult from './Pages/SingleResult'

function App() {

  const mockData = [
    {
    Id: 1,
    Name: "Desmond Woram",
    Address: "5555 E Mockingbird Lane",
    VoterStatus: "A",
    RegistrationDate: "12/11/2018"
  },
    {
    Id: 2,
    Name: "John Woram",
    Address: "1515 Ripasso Way",
    VoterStatus: "A",
    RegistrationDate: "04/10/2008"
  },
    {
    Id: 3,
    Name: "Delra Woram",
    Address: "1515 Ripasso Way",
    VoterStatus: "A",
    RegistrationDate: "10/11/2016"
  },
    {
    Id: 4,
    Name: "Cameron Woram",
    Address: "5555 E Mockingbird Lane",
    VoterStatus: "A",
    RegistrationDate: "09/03/2020"
  }
  ]

  return (
    <>
    <Routes>
      <Route path="/" element={<Home mockData={mockData}/>}></Route>
      <Route path="/:id" element={<SingleResult mockData={mockData}/>}></Route>
    </Routes>
    </>
  )
}

export default App
