import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import Sucursales from './Sucursales';
import Categoria from './Categoria';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/sucursales" element={<Sucursales />} />
        
<Route path="/categoria/:nombre" element={<Categoria />} />
        
      </Routes>
    </Router>
  );
}

export default App;
