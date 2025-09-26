/* 
* Name: App.jsx
* Type: 
* Arguments: none
* Description: The entry point for the RPM application that renders the
*              entire application. Provides a container for child components.
*              Imports all pages and components, and is the wrapper component
*              for the router.
*/

// Imports ///////////////////////////////////////////////////
// React
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// VoCheck
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import TOS from './Pages/TOS';
import Privacy from './Pages/Privacy';
import Maps from './Pages/Maps';
import Charts from './Pages/Charts';


function App() {
  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem('selectedOption') || '');
  return (
    <>
      <section className="bodyCont">
        <Header />
        <Routes>
          <Route path="/" element={<Home selectedOption={selectedOption} setSelectedOption={setSelectedOption} />}></Route>
          <Route path="/tos" element={<TOS />}></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
          <Route path="/maps" element={<Maps selectedOption={selectedOption} />}></Route>
          <Route path="/charts" element={<Charts selectedOption={selectedOption} />}></Route>
        </Routes>
        <Footer className="footerCont"/>
      </section>
    </>
  )
};

export default App;