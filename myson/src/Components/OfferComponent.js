import React from 'react';
import Under199 from '../images/Under199.jpg';
import Under299 from '../images/Under299.jpg';
import Under399 from '../images/Under399.jpg';
import Under499 from '../images/Under499.jpg';
import MainOffer from '../images/MainOffer.jpg';

const OfferComponent = () => {
  return (
    <div className='offer-component'>
      <div className='offer-under'>
        <div 
          className='offer-image' 
          style={{ backgroundImage: `url(${Under199})` }}
        ></div>
        <div 
          className='offer-image' 
          style={{ backgroundImage: `url(${Under299})` }}
        ></div>
        <div 
          className='offer-image' 
          style={{ backgroundImage: `url(${Under399})` }}
        ></div>
        <div 
          className='offer-image' 
          style={{ backgroundImage: `url(${Under499})` }}
        ></div>
      </div>
      <div className='offer-zone'>
        <div 
          className='main-offer' 
          style={{ backgroundImage: `url(${MainOffer})` }}
        ></div>
      </div>
    </div>
  );
};

export default OfferComponent;
