import React from 'react';
import './Testimonial.css'; // Import the CSS file

const Testimonial = () => {
  return (
    <>
    <h3 >Our Customer Loves Us</h3>
    <div style={{display:'flex', borderBottom:'solid 1px #d6252b '}}>
        <div className="testimonial-container">
      <div className="testimonial-card">
        <div className="testimonial-image">
          <img src="https://via.placeholder.com/150" alt="User" />
        </div>
        <div className="testimonial-content">
          <p className="testimonial-text">
            "This service has been fantastic! The team was professional, and the results exceeded our expectations. I would highly recommend them to anyone looking for high-quality work."
          </p>
          <p className="testimonial-author">- John Doe</p>
        </div>
      </div>
    </div><div className="testimonial-container">
      <div className="testimonial-card">
        <div className="testimonial-image">
          <img src="https://via.placeholder.com/150" alt="User" />
        </div>
        <div className="testimonial-content">
          <p className="testimonial-text">
            "This service has been fantastic! The team was professional, and the results exceeded our expectations. I would highly recommend them to anyone looking for high-quality work."
          </p>
          <p className="testimonial-author">- John Doe</p>
        </div>
      </div>
    </div><div className="testimonial-container">
      <div className="testimonial-card">
        <div className="testimonial-image">
          <img src="https://via.placeholder.com/150" alt="User" />
        </div>
        <div className="testimonial-content">
          <p className="testimonial-text">
            "This service has been fantastic! The team was professional, and the results exceeded our expectations. I would highly recommend them to anyone looking for high-quality work."
          </p>
          <p className="testimonial-author">- John Doe</p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Testimonial;
