import React from 'react'
import './AboutUs.css'
import Plant1 from '../../img/plant-1.png'
import Plant2 from '../../img/plant-2.png'


function AboutUs() {
  return (
    <div className='about' id='about'>
        <div className='headings'>
            <span>About Us</span>
            <span>Follow instructions for more</span>
        </div>
        <div className='about-sections'>
            <div className='about-section'>
                <div className='about-img'>
                    <img src={Plant1} />
                </div>
                <div className='about-content'>
                    <span>Make your <span className='yellow-heading'>organic</span> garden</span>
                    <span>Make your organic garden a super place to live and to stay from a hectic and polluted world and also to spend your spare time perfectly.</span>
                </div>
            </div>
            <div className='about-section'>
                
                <div className='about-content'>
                    <span>Come with us <span className='yellow-heading'>grow up</span> your plants</span>
                    <span>Make your organic garden a super place to live and to stay from a hectic and polluted world and also to spend your spare time perfectly.</span>
                </div>
                <div className='about-img'>
                    <img src={Plant2} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs