import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="top-menu">
        <div className="logo-menu">
          <span className="BAChain">BAChain</span>
          <span className="Transparency">Transparency</span>
        </div>
        <div className="user-menu">
          <div className="Ellipse-211"></div>
          <span className="username">Username</span>
        </div>
      </div>
    </>
  );
};

export default Header;
