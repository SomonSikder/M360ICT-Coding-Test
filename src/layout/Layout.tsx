import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SingleLaunch from "../pages/SingleLaunch";
const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/singleLaunch/:flight_number" element={<SingleLaunch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
