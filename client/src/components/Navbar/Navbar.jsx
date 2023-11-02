import React from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img className="india" src="/Assets/india.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>RUP</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className ="link" to="/products/1">Jewelery</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Textiles</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Handicrafts</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/4">DIY</Link>
          </div>
        </div>

        <div className="center">
          <Link className='link' to="/">Kalakari</Link>
        </div>
        
        <div className="right">
        <div className="item">
            <Link className ="link" to="/">Homepage</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">About</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Contact</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon/>
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar