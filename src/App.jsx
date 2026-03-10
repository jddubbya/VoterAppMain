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

      <section className="bodyCont">
        <Header />

        <Routes>

          {/* PUBLIC ROUTE */}
          <Route path="/login" element={<LoginPage />} />

          {/* PROTECTED ROUTES */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/maps"
            element={
              <ProtectedRoute>
                <Maps selectedOption={selectedOption} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/charts"
            element={
              <ProtectedRoute>
                <Charts selectedOption={selectedOption} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/tos"
            element={
              <ProtectedRoute>
                <TOS />
              </ProtectedRoute>
            }
          />

          <Route
            path="/privacy"
            element={
              <ProtectedRoute>
                <Privacy />
              </ProtectedRoute>
            }
          />

        </Routes>

        <Footer />

      </section>

    </AuthProvider>
  );
}

export default App;
