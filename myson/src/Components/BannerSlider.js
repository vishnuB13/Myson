import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSlider = () => {
  return (
    <div style={{ width: '100%', overflow: 'hidden', padding: '30px', marginTop:'15px' }}>
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
        autoplaySpeed={4000} // Scroll every 2 seconds
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
        <div><img src="https://dukaan.b-cdn.net/1440x1440/webp/media/2418b97e-0104-4785-a914-92ef4a75ede9.png" alt='CompanyLogo' style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
        ></img></div>
        <div><img src="https://dukaan.b-cdn.net/1440x1440/webp/media/2418b97e-0104-4785-a914-92ef4a75ede9.png" alt='CompanyLogo' style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
        ></img></div>
        <div><img src="https://dukaan.b-cdn.net/1440x1440/webp/media/2418b97e-0104-4785-a914-92ef4a75ede9.png" alt='CompanyLogo' style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
        ></img></div>
      </Slider>
    </div>
  );
};

export default BannerSlider;
