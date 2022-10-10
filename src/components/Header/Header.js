import React from "react";
import Logo from "../asset/learning1.png";

const Header = () => {
  return (
    <div>
      <div className="container">
        <img className="img-fluid h-50" src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
