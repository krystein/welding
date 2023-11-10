import React from 'react';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlideData } from '../data/SlideData';



const Carousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };



  return (
    <div className='container'>
          <div className='d-flex justify-content-between p-2'>
            <h3>Images</h3>
      <Link to="/ImageGallery"><button className='btn btn-primary'>more</button></Link>
      </div>
      <Slider {...settings}>
          {SlideData.map((slide, index) => {
            return (
              <div key={index}>
                <img src={slide.image} alt={slide.alt} className='img-thumbnail' />
              </div>
            )
          })}
      </Slider>

    </div>
  );
};

export default Carousel;
