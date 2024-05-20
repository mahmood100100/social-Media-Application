import React from 'react';
import './Auth.css'
import Logo from "../../assets/img/logo.png";
import { Outlet } from 'react-router-dom';

function Auth() {
  return (
    <>
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Social Media</h1>
          <h4>Explore the ideas throughout the world</h4>
        </div>
      </div>
      <Outlet />
    </div>
      
    </>
  );
}

export default Auth;
