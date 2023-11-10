import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/reducers/authReducer";
import { MenuIcon } from "../../assets/Icons";

const Header = ({ openSidebar, setOpenSidebar }) => {
  const dispatch = useDispatch();

  const userLogout = () => {
    dispatch(logout("admin-token"));
  };

  return (
    <div className="header-camp flex">
      <div className="wrapWidth wrap flex items-center">
        <div className="left flex items-center">
          <Link to="/" className="logo-img flex items-center justify-center">
            <img src="../images/logo.svg" className="logo" />
          </Link>
        </div>
        <div className="center flex items-center justify-center">
          <div className="menu-list flex items-center justify-center">
            <div className="menu-item">About</div>
            <div className="menu-item">Roadmap</div>
            <div className="menu-item">Mint</div>
            <div className="menu-item">Faqs</div>
          </div>
        </div>
        <div className="right flex items-center justify-end">
          <button className="btn-signup button">Sign Up Now</button>
        </div>
        <div
          className="menu-icon flex items-center justify-center"
          onClick={(e) => {
            e.stopPropagation();
            setOpenSidebar(!openSidebar);
          }}
        >
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
