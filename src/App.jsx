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

// Login PIN imports
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";

// VoCheck
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import TOS from './Pages/TOS';
import Privacy from './Pages/Privacy';
import Maps from './Pages/Maps';
import Charts from './Pages/Charts';
import LoginPage from './Pages/LoginPage';


function App() {
  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem('selectedOption') || '');
  return (

    <AuthProvider>
      <Routes>
        {/* PUBLIC ROUTE */}
        <Route path="/login" element={<LoginPage />} />

        {/* PROTECTED APP */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <section className="bodyCont">
                <Header />
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/tos" element={<TOS />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/maps" element={<Maps />} />
                  <Route path="/charts" element={<Charts />} />
                </Routes>
                <Footer className="footerCont" />
              </section>
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  )
};

export default App;
