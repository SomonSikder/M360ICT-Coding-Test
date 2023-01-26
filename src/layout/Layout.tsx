import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../pages/Home";
import SingleLaunch from "../pages/SingleLaunch";

const Layout = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/singleLaunch" element={<SingleLaunch />} />
      </Routes>
    </div>
  );
};

export default Layout;
