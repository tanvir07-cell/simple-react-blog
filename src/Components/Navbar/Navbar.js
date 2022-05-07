import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../Assets/Image/logo.png";
import DarkMode from "../DarkMode/DarkMode";
import "./Navbar.css";

const Navbar = () => {
  // ami kon path e asi tar jonne react router theke useLocation ti use korbo:
  const { pathname } = useLocation();

  return (
    <nav
      style={
        pathname.includes("blog") ? { display: "none" } : { display: "flex" }
      }
    >
      <div className="logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="link-container">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Home
        </NavLink>
        <NavLink
          to="/videos"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Videos
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Login
        </NavLink>
        <DarkMode></DarkMode>
      </div>
    </nav>
  );
};

export default Navbar;
