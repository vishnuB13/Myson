import React, { useState } from 'react';
import './ProductPage.css';
import ProductImageZoom from './ProductImageZoom';
import Product1 from '../images/Product1.jpg'
import Product2 from '../images/Product2.jpg'
import MainProduct from '../images/MainProduct.jpg'
const ProductPage = () => {
  const productImages = [MainProduct, Product1, Product2];
  const product = {
    productName:"Noise Icon 2 Elite Edition 1.8'' Display with Metallic Body and Bluetooth Calling Smartwatch  (Elite Black Strap, Regular)",
    availability:"Instock",
    price:'1,999'
  }
  const tableData = [
    { word: 'L x D x H', description: '1220 x 670 x 1260' },
    { word: 'NO OF SHELVES', description: 'BASE + 3' },
    { word: 'TEMPERATURE RANGE', description: '04 TO 14' },
    { word: 'REFRIGERATION TYPE', description: 'VENTILATED' },
    { word: 'MOVEMENT', description: 'BOOT / WHEEL' },
  ];

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
        <span style={{textAlign:'left', fontFamily:'sans-serif',fontSize:'18px',fontWeight:'400'}}>{product.productName}</span>
        <h6 style={{textAlign:'left',color:'black', paddingTop:'5px'}}>Availability: <span style={{color:'green',fontWeight:'bold'}}>{product.availability}</span></h6>
        <div className='product-description'>
        <p >
         <ol >
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
        <div className='more-details'>
        <div style={{margin:'0px', padding:'0px'}}>
  <p style={{color:'#878787',textAlign:'left'}}>
    Delivery : <span style={{color:'#212121'}}>Delivery within 2 days.<br />if ordered before 12:00 pm</span>
    
  </p>
</div>


<div className="table-container">
      <table>
        <thead>
          <tr>
            <th colSpan="2">
              <h3 className="specifications-title">Specifications</h3>
            </th>
          </tr>
        </thead>
        <tbody className="table-body">
          {tableData.map((item, index) => (
            <tr key={index}>
              <td style={{color:'#878787'}} data-label="Word">{item.word}</td>
              <td style={{fontSize:'bold',color:'black'}} data-label="Description">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
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
