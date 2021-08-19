import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <img
            className="header__logo"
            src="https://www.searchpng.com/wp-content/uploads/2019/01/Myntra-logo-png-icon-715x715.png"
          />

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <strong>MEN</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <strong>WOMEN</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <strong>KIDS</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <strong>HOME & LIVING</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <strong>BEAUTY</strong>
                </Link>
              </li>
            </ul>
            <div className="icons">
              <PersonOutlineIcon />
              <FavoriteBorderIcon />
              <LocalMallOutlinedIcon />
            </div>
          </div>
          <form className="d-flex">
            <button className="btn btn-outline-success" type="submit">
              <Link to="/cart">
                <div className="basket">
                  <AiOutlineShoppingCart className="cart-icon" />
                  <span>4</span>
                </div>
              </Link>
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
