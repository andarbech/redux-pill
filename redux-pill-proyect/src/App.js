import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Results from "./pages/Results";
import FilterPage from "./pages/FilterPage";
import Singup from 'pages/Singup';
import Login from 'pages/Home/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path='/results' element={<Results />} />
        <Route path='/sing-up' element={<Singup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
