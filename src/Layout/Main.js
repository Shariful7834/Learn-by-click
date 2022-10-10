import React from "react";
import { Outlet } from "react-router-dom";
import Navbars from "../components/Navbar/Navbars";

const Main = () => {
  return (
    <div>
      <Navbars></Navbars>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
