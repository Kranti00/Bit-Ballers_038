import React from "react";
import { Route, Routes } from "react-router-dom";
import WhiteSpace from "../components/WhiteSpace/WhiteSpace";
import Template from "../components/Template/Template";
import Navbar from "../components/HomePage/navbar";
import PrivateRoute from "./PrivateRoute";
import Main from "../components/HomePage/Main";
import { HomePage } from "../components/HomePage/HomePage";
import About from "../components/AboutAndWork/About";
import WorkingProcess from "../components/AboutAndWork/WorkingProcess";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/About" element={<About/>}/>
        <Route path="/Work" element={<WorkingProcess/>}/>
      <Route path="/" element={<Main />} />
      <Route path="/homePage" element={<HomePage />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route
          path="/whiteSpace/path"
          element={
            <PrivateRoute>
              <WhiteSpace />
            </PrivateRoute>
          }
        />
        <Route
          path="/template/path"
          element={
            <PrivateRoute>
              <Template />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
