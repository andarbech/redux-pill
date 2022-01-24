import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/HomePage";
import Results from "./pages/PropertiesPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/properties' element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
