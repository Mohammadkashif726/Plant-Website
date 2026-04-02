import React from 'react'
import './Cards.css'
import { TbTruckDelivery } from 'react-icons/tb'
import { CiHeadphones } from 'react-icons/ci'
import { RiPlantFill } from 'react-icons/ri'
import { AiTwotoneDollarCircle } from 'react-icons/ai'

function Cards() {
  return (
    <div className='cards'>
        <div className='card'>
            <div className='card-content'>
                <TbTruckDelivery className='icon' size="50" /> 
            <span>Fast Delivery</span>
            </div>
            <span>Our delivery is fast paced and on time. Through our vast network of delivery vehicles</span>
        </div>
        <div className='card'>
            <div className='card-content'>
                <CiHeadphones className='icon' size="50" /> 
            <span>Great Customer Service</span>
            </div>
            <span>Our delivery is fast paced and on time. Through our vast network of delivery vehicles</span>
        </div>
        <div className='card'>
            <div className='card-content'>
                <RiPlantFill className='icon' size="50" /> 
            <span>Original Plants</span>
            </div>
            <span>Our delivery is fast paced and on time. Through our vast network of delivery vehicles</span>
        </div>
        <div className='card'>
            <div className='card-content'>
                <AiTwotoneDollarCircle className='icon' size="50" /> 
            <span>Affordable Price</span>
            </div>
            <span>Our delivery is fast paced and on time. Through our vast network of delivery vehicles</span>
        </div>
    </div>
  )
}

export default Cards