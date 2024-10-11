import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSlider = () => {
  return (
    <div className='banner-container' >
      <Slider
        dots={true} // Show dots for navigation
        infinite={true} // Infinite loop
        speed={500} // Transition speed in milliseconds
        slidesToShow={1} // Number of slides to show at once
        slidesToScroll={1} // Number of slides to scroll
        draggable={true} // Enable dragging with mouse
        swipe={true} // Enable swipe for touch devices
        swipeToSlide={true} // Smooth swipe between slides
        touchThreshold={10} // Adjust sensitivity of swiping
        autoplay={true} // Enable auto scroll
        autoplaySpeed={2000} // Scroll every 2 seconds
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        <div className='banner-image'><img src="https://mccoymart.com/post/wp-content/uploads/Bosch-Dishwashers-Redefining-Indian-Kitchen-Cleanup.jpg" alt='DishWasher' style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
        ></img></div>
        <div className='banner-image'><img src="https://www.dinegear.com/wp-content/uploads/2023/04/Best-Panel-Ready-Dishwashers.jpg" alt='Dishwasher deals' style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
        ></img></div>
        <div className='banner-image'><img src="https://mahajanelectronics.com/cdn/shop/articles/Mahajan_banner_16.jpg?v=1701840167" alt='CompanyLogo' style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
        ></img></div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
