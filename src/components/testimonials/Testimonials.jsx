import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/AVTR1.jpeg'
import AVTR2 from '../../assets/AVTR2.JPG'
import AVTR3 from '../../assets/AVTR3.jpg'
import AVTR6 from '../../assets/AVTR6.JPG'
import AVTR5 from '../../assets/AVTR5.JPG'
import AVTR9 from '../../assets/AVTR9.jpeg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide, SwiperSlider } from 'swiper/react';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

    const data = [
        {
            avatar: AVTR1,
            name: 'Hong-Kong',
            review : 'Spent 6 months there doing an internship for Pelago, an event platform, selling tickets for event as a digital marketing junior',
        },
        {
            avatar: AVTR2,
            name: 'Sydney',
            review : 'Spent 1 year and half working as a waitress and doing for my farm work to to provide my world tour',
        },
        {
            avatar: AVTR3,
            name: 'Phillipines',
            review : 'Spent 1 month there touring the islands',
        },
        {
            avatar: AVTR6,
            name: 'Bali',
            review : 'Spent 6 months there doing an internship for Pro Surf School, a surf camp, as a community manager',
        },
        {
            avatar: AVTR5,
            name: 'Salar de Uyuni',
            review : 'Started my world tour in South America touring Brazil, Peru and Bolivia',
        },
        {
            avatar: AVTR9,
            name: 'Food',
            review : 'From Pao de queijo to Banh mi with a bit of Pasta alla gricia or Nasi Goreng, here are my favorites worldwide.',
        },
    ]

    return (
        <section id='testimonials'>
            <h5>My world tour</h5>
            <h2> Testimonials</h2>

            <Swiper className="container testimonials__container"
            //cant be bothered
            // install Swiper modules
            modules={[ Pagination]} spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
            {
                data.map(({avatar, name, review}, index) => {
                    return (
                    <SwiperSlide key={index} className="testimonial">
                        <div className="client__avatar">
                            <img src={avatar}/>
                        </div>
                        <h5 className="client__name"> {name}</h5>
                            <small className="client__review">
                                {review}
                            </small>
                    </SwiperSlide>
                    )
                })
            }
            </Swiper>
        </section>
    )
}

export default Testimonials
