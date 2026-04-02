import React from 'react'
import './Choice.css'
import Cart1 from '../../img/cart-1.png'
import { FaShoppingCart } from 'react-icons/fa'

function Choice() {
  return (
    <div className='choice'>
        <div className='choice-headings'>
            <span>Your Choice Plant</span>
            <span>Follow for more instructions</span>
        </div>

        <div className='choice-cards'>
          <div className='choice-card'>
            <img src={Cart1} className='choice-img' alt='cart1'/>
            <span>Nephrolepis exaltata</span>
            <span>Boston Fern</span>
            <div className='coice-price'>
              <span>$5</span>
              <FaShoppingCart className='choice-cart' />
            </div>
          </div>
          <div className='choice-card'>
            <img src={Cart1} className='choice-img' alt='' />
            <span>Nephrolepis exaltata</span>
            <span>Boston Fern</span>
            <div className='coice-price'>
              <span>$5</span>
              <FaShoppingCart className='choice-cart' />
            </div>
          </div>
          <div className='choice-card'>
            <img src={Cart1} className='choice-img' alt=''/>
            <span>Nephrolepis exaltata</span>
            <span>Boston Fern</span>
            <div className='coice-price'>
              <span>$5</span>
              <FaShoppingCart className='choice-cart' />
            </div>
          </div>
          <div className='choice-card'>
            <img src={Cart1} className='choice-img' alt=''/>
            <span>Nephrolepis exaltata</span>
            <span>Boston Fern</span>
            <div className='coice-price'>
              <span>$5</span>
              <FaShoppingCart className='choice-cart' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Choice