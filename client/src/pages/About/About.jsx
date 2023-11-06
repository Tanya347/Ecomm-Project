import React from 'react'
import "./about.scss"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
      <div className="container">
        <div className="header">
          <img src="/Assets/header.jpg" alt="" />
          <div className="details">
            <h1>About Us</h1>
            <p>At Kalakari, we are on a mission to empower local Indian artisans, craftsmen, small shop owners, and DIY enthusiasts by providing them with a thriving platform to showcase and sell their exceptional creations.</p>
          </div>
        </div>

        <div className="middle">
          <div className="upper-row">
            <div className="left-col">
              <img src="/Assets/about-artisan.png" alt="" />
            </div>
            <right className="right-col">
              <h1>Our Mission</h1>
              <p>We believe that every handmade product tells a story, and by supporting local talent, we contribute to preserving and celebrating India's diverse cultural heritage. Our curated marketplace is a testament to the talent, creativity, and dedication of our artisan partners, who pour their hearts into every creation. Join us in this journey to discover, appreciate, and support the soulful artistry of India.</p>
            </right>
          </div>
          <div className="lower-row">
            <p>In addition to celebrating the work of seasoned artisans, Kalakari is a dedicated platform that warmly embraces DIY enthusiasts and artists. We understand the immense creativity and passion that go into crafting something with your own hands. Our platform provides a nurturing space for DIY artists, where they can showcase their self-made wonders and connect with a community that appreciates the art of creating from scratch.</p>
            <img src="/Assets/about-diy.png" alt="" />
          </div>
        </div>

        <div className="explore">
          <img src="/Assets/categories.jpg" alt="" />
          <div className="buttons">
            <div className="focus-button">
              <Link to="/products/new">
                <button>New Season</button>
              </Link>
            </div>
            <div className="category-button">
              <Link to="/products/text">
                <button>Textiles</button>
              </Link>
              <Link to="/products/handi">
                <button>Handcrafts</button>
              </Link>
              <Link to="/products/acc">
                <button>Accessories</button>
              </Link>
              <Link to="/products/diy">
                <button>DIY</button>
              </Link>
            </div>
            <div className="focus-button">
              <Link to="/products/sale">
                <button>Sale</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About