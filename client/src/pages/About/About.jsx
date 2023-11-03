import React from 'react'
import "./about.scss"

const About = () => {
  return (
    <div className='about'>
      <div className="container">
        <div className="header">
          <img src="/Assets/header.jpg" alt="" />
          <div className="details">
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odio eligendi tempora assumenda officia, aliquid, cumque aspernatur corrupti harum corporis rerum minima eum aliquam quod laborum nisi quasi sit dolore?</p>
          </div>
        </div>

        <div className="middle">
          <div className="upper-row">
            <div className="left-col">
              <img src="/Assets/about-artisan.png" alt="" />
            </div>
            <right className="right-col">
              <h1>Our Mission</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, quas? Doloremque dicta repellat cupiditate deleniti, vel dolore optio? Earum dignissimos provident repudiandae animi delectus minima inventore, libero harum? Quidem, minima.</p>
            </right>
          </div>
          <div className="lower-row">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit voluptatibus, cumque quod necessitatibus eos eius provident id, nemo distinctio atque esse molestiae ducimus sed magnam non adipisci modi mollitia alias.</p>
            <img src="/Assets/about-diy.png" alt="" />
          </div>
        </div>

        <div className="explore">
          <img src="/Assets/categories.jpg" alt="" />
          <div className="buttons">
            <div className="focus-button">
              <button>New Season</button>
            </div>
            <div className="category-button">
              <button>Textiles</button>
              <button>Handcrafts</button>
              <button>Accessories</button>
              <button>Handicrafts</button>
              <button>DIY</button>
            </div>
            <div className="focus-button">
              <button>Sale</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About