import React, { useState } from 'react';
import './ProductPage.css';
import ProductImageZoom from './ProductImageZoom';
import Product1 from '../images/Product1.jpg'
import Product2 from '../images/Product2.jpg'
import MainProduct from '../images/MainProduct.jpg'
const ProductPage = () => {
  const productImages = [MainProduct, Product1, Product2];
  const product = {
    productName:"CLASSIC CORRIAN YELLOW",
    availability:"Instock",
    price:'1,999'
  }

  // State to track the current main image
  const [mainImage, setMainImage] = useState(productImages[0]);

  return (
    <div className="product-page">
      
      {/* Left Side - Main Product Image */}
      <div className="product-image-container">
      <div className='product-main-image'>
      <ProductImageZoom imageSrc={mainImage} />

      </div>
        {/* Below Main Image - Preview Images */}
        <div className="product-preview-images">
          {productImages.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt={`Product Preview ${index + 1}`}
              className="product-preview-image"
              onClick={() => setMainImage(imageSrc)} // Set the clicked image as the main image
            />
          ))}
        </div>
      </div>

      {/* Right Side - Product Details */}
      <div className="product-details">
        <h3 style={{textAlign:'left', fontFamily:"sans-serif", fontWeight:'bold'}}>{product.productName}</h3>
        <h6 style={{textAlign:'left',color:'black'}}>Availability: <span style={{color:'green',fontWeight:'bold'}}>{product.availability}</span></h6>
        <div className='product-description'>
        <p >
         <ol style={{margin:'0px', padding:'0px'}}>
          <li> 8mm toughened clear glass</li>
          <li>Electronic digital thermostat for refrigeration counter</li>
          <li>Rear removable electrocoated aluminium sliding doors</li>
          <li>6mm shelf glass with ss mirror fiinish stopper</li>
          <li>High bright led lighting : pure white / warm white</li>
          <li>304 grade steel finish with matt & mirror combination</li>
          <li>Changeable corian and engraving work with unique corian insertion</li>
         </ol>
        </p>
        </div>
        <div className="product-price-div">
        <p className="product-price" >Rs.{product.price}</p>
        </div>

        {/* Buttons */}
        <div className="product-actions">
          <button className="enquire-btn">Enquire Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
