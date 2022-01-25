import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/HomePage/";
import Login from './pages/Login';
import Results from "./pages/PropertiesPage";
import { useSelector } from "react-redux";
import Singup from 'pages/Singup';


function App() {
  const { userToken } = useSelector((state) => state.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={userToken !== "" ? <Home /> : <Login />} />
        <Route path='/properties' element={<Results />} />
        <Route path="/sign-up" element={<Singup/>} />
      <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
