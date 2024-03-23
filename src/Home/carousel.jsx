import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img11 from './010.jpg'
import './First.css'
const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (


    <Slider {...settings} >
      <div>
        <div className='scrol-page-start'>
          <div className='content-slider-1'>
            <p >"Fantastic experience! The project team was attentive, knowledgeable, and dedicated to delivering the best possible outcome. They kept us informed every step of the way and were always available to address any concerns. We're thrilled with the results!"

            </p>
            <div className='Author-slider'>-Mohan Raj <br />Bangalore</div>
          </div>
          <div className='profile-image-1'>
            <img src={img11} alt="" className='profile-slide-1' />
          </div>
        </div>
      </div>
      <div>
        <div className='scrol-page-start'>
          <div className='content-slider-1'>
            <p > "Top-notch service! The project team was professional, reliable, and went above and beyond to ensure our satisfaction. They delivered on time and within budget, and the final product exceeded our expectations. A pleasure to work with, and we look forward to future collaborations!"</p>
            <div className='Author-slider'>-Pankaj <br />Hyderabad</div>
          </div>
          <div className='profile-image-1'>
            <img src={img11} alt="" className='profile-slide-1' />
          </div>
        </div>
      </div>
      <div>
        <div className='scrol-page-start'>
          <div className='content-slider-1'>
            <p > "Exceptional communication and collaboration! The project team was responsive, proactive, and dedicated to understanding our needs. They delivered a solution that not only met our requirements but also exceeded our expectations. Highly recommend their services!"</p>
            <div className='Author-slider'>-Mathew<br />Coimbatore</div>
          </div>
          <div className='profile-image-1'>
            <img src={img11} alt="" className='profile-slide-1' />
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default CarouselSlider;
