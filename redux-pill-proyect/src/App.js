import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Results from "./pages/Results";
import FilterPage from "./pages/FilterPage";
import Singup from "pages/Singup";
import Login from "pages/Login";
import { useSelector } from "react-redux";

function App() {
  const { userToken } = useSelector((state) => state.user);

  console.log(userToken);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={userToken !== "" ? <Home /> : <Login />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/results" element={<Results />} />
        <Route path="/sign-up" element={<Singup />} />
        <Route
          path="/login"
          element={userToken !== "" ? <Home /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
