import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <span>IndorePlants</span>
        </div>
                <div className='navbar-right'>
                    <ul>
                        <li><a href='#hero'>Home</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#popular'>Popular</a></li>
                        <li><a href='#review'>Review</a></li>
                    </ul>
                </div>

    </div>
  )
}

export default Navbar