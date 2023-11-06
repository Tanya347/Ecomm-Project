import React from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import "./navbar.scss"

const Navbar = () => {

  const [open,setOpen] = useState(false)

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
            <Link className ="link" to="/products/acc">Accessories</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/text">Textiles</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/handi">Handicrafts</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/diy">DIY</Link>
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
            <Link className ="link" to="/about">About</Link>
          </div>
          <div className="item">
            <HashLink className ="link" to="#contact" smooth={true} duration={500}>Contact</HashLink>
          </div>
          <div className="item">
            <Link className ="link" to="/">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon/>
            <Link to="/login" className='link'>
              <PersonOutlineOutlinedIcon/>
            </Link>
            <Link to="/wishlist" className='link'>
              <FavoriteBorderOutlinedIcon/>
            </Link>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>2</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  )
}

export default Navbar