import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Navbars from "../components/Navbar/Navbars";

const Main = () => {
  return (
    <div>
      <Navbars></Navbars>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
