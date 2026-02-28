import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import Attendance from './pages/Attendance';
import Certificate from './pages/Certificate';

import { RegistrationProvider } from './context/RegistrationContext';

function App() {
  return (
    <RegistrationProvider>
      <BrowserRouter>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register/:id" element={<Register />} />
              <Route path="/attendance/:id" element={<Attendance />} />
              <Route path="/certificate" element={<Certificate />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </RegistrationProvider>
  );
}

export default App;
