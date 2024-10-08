import React from 'react';


const OfferComponent = () => {
  return (
    <div className='offer-component'>
      <div className='offer-under'>
        <div 
          className='offer-image' 
          style={{ backgroundImage: `url(https://img.choice.com.au/-/media/c5a5f0f1e9e74146830805eb0e53f32c.ashx?w=660&jq=80%20660w)` }}
        ></div>
        <div 
          className='offer-image' 
          style={{ backgroundImage: `url(https://phx-finish-me-prod.husky-2.rbcloud.io/media/ctqpymuv/15-things-you-should-never-put-in-the-dishwasher.jpg)` }}
        ></div>
        <div 
          className='offer-image' 
          style={{ backgroundImage: `url(https://www.checkatrade.com/blog/wp-content/uploads/2020/05/Install-dishwasher-2.jpg)` }}
        ></div>
        <div 
          className='offer-image' 
          style={{ backgroundImage: `url(https://asset.kompas.com/crops/F48ZNxc5OIAcDPGhOubt77lOuKs=/12x51:932x664/750x500/data/photo/2023/01/17/63c62ee25e6af.jpg)` }}
        ></div>
      </div>
      <div className='offer-zone'>
        <div 
          className='main-offer' 
          style={{ backgroundImage: `url(https://hafeleappliances.com/images/TempBlog/banner-dishwasher.jpg)` }}
        ></div>
      </div>
    </div>
  );
};

export default OfferComponent;
