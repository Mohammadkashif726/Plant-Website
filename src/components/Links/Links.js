import React from 'react'
import './Links.css'

function Links() {
  return (
    <div className='links'>
        <div className='newsletter'>
            <span>Subscribe to our newsletter</span>
            <div className='newsletter-content'>
                <input placeholder='Your Email Address'></input>
                <button>Subscribe</button>
            </div>
        </div>
        <div className='link-lists'>
            <div className='link-list'>
                <span className='link-list-heading'>IndorePlants.</span>
            </div>
            <div className='link-list'>
                <span>Quick Links</span>
                <ul>
                    <li><a href='/'>Plants</a></li>
                    <li><a href='/'>Flowers</a></li>
                    <li><a href='/'>Gardening</a></li>
                    <li><a href='/'>Seed</a></li>
                    <li><a href='/'>Shipping</a></li>
                </ul>
            </div>
            <div className='link-list'>
                <span>Popular Services</span>
                <ul>
                    <li><a href='/'>Plants</a></li>
                    <li><a href='/'>Flowers</a></li>
                    <li><a href='/'>Gardening</a></li>
                    <li><a href='/'>Seed</a></li>
                    <li><a href='/'>Shipping</a></li>
                </ul>
            </div>
            <div className='link-list'>
                <span>Contact Us</span>
                <ul>
                    <li><a href='/'>Plants</a></li>
                    <li><a href='/'>Flowers</a></li>
                    <li><a href='/'>Gardening</a></li>
                    <li><a href='/'>Seed</a></li>
                    <li><a href='/'>Shipping</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Links