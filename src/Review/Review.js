import React from 'react'
import './Review.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Autoplay, Pagination } from 'swiper/modules'

import Review1 from '../img/review-1.jpg'
import Review2 from '../img/review-2.jpg'

function Review() {
  return (
    <div className='review' id='review'>
      
      <div className='review-headings'>
        <span>Customer Review</span>
        <span>Follow instructions for more</span>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        modules={[Pagination,Autoplay]}
  autoplay={{
    delay: 3000,           // 3 seconds
    disableOnInteraction: false
  }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className='review-slide'>
            <span>This plant shop is magnificent and the staff is very helpful and supportive and i have made numerous visits to this shop and nothing else feels more comfortable and enjoyable experience than this.</span>
            <div className='review-content'>
                <img src={Review1} alt="" />
                <div className='slide-headings'>
                    <span>John Doe</span>
                    <span>Designer</span>
                </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='review-slide'>
            <span>This plant shop is magnificent and the staff is very helpful and supportive and i have made numerous visits to this shop and nothing else feels more comfortable and enjoyable experience than this.</span>
            <div className='review-content'>
                <img src={Review1} alt="" />
                <div className='slide-headings'>
                    <span>John Doe</span>
                    <span>Designer</span>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='review-slide'>
            <span>This plant shop is magnificent and the staff is very helpful and supportive and i have made numerous visits to this shop and nothing else feels more comfortable and enjoyable experience than this.</span>
            <div className='review-content'>
                <img src={Review2} alt="" />
                <div className='slide-headings'>
                    <span>John Doe</span>
                    <span>Designer</span>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='review-slide'>
            <span>This plant shop is magnificent and the staff is very helpful and supportive and i have made numerous visits to this shop and nothing else feels more comfortable and enjoyable experience than this.</span>
            <div className='review-content'>
                <img src={Review1} alt="" />
                <div className='slide-headings'>
                    <span>John Doe</span>
                    <span>Designer</span>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='review-slide'>
            <span>This plant shop is magnificent and the staff is very helpful and supportive and i have made numerous visits to this shop and nothing else feels more comfortable and enjoyable experience than this.</span>
            <div className='review-content'>
                <img src={Review1} alt="" />
                <div className='slide-headings'>
                    <span>John Doe</span>
                    <span>Designer</span>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='review-slide'>
            <span>This plant shop is magnificent and the staff is very helpful and supportive and i have made numerous visits to this shop and nothing else feels more comfortable and enjoyable experience than this.</span>
            <div className='review-content'>
                <img src={Review1} alt="" />
                <div className='slide-headings'>
                    <span>John Doe</span>
                    <span>Designer</span>
                </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

    </div>
  )
}

export default Review