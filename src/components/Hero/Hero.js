import React from 'react'
import './Hero.css'
import Cart1 from '../../img/cart-1.png'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <div className='hero' id='hero'>
        <div className='hero-left'>
          <span><span className='yellow-heading'>Plants</span> make a <br/> positive <span className='yellow-heading'>impact</span> on<br />your environment</span><br />
          <span>Plants are an essential component of our environment. we need plants to provide clean air for our daily life to breath, and also the greenry add to the environment.</span>
          <div className='hero-buttons'>
            <button>Shop Now</button>
            <button>Know More</button>

          </div>
          <div className="social-icons">
  <FaFacebook />
  <FaInstagram />
  <FaTwitter />
  <FaLinkedin />
</div>
        </div>
        <div className='hero-right'>
            <img src={Cart1} alt=''></img>
        </div>
    </div>
  )
}

export default Hero