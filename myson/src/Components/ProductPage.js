import React from 'react';
import './ProductPage.css';

const ProductPage = () => {
  return (
    <div className="product-page">
      {/* Left Side - Product Images */}
      <div className="product-images">
        <img src="/path/to/image1.jpg" alt="Product Image 1" className="product-image" />
        <img src="/path/to/image2.jpg" alt="Product Image 2" className="product-image" />
        <img src="/path/to/image3.jpg" alt="Product Image 3" className="product-image" />
      </div>

      {/* Right Side - Product Details */}
      <div className="product-details">
        <h2>Product Title</h2>
        <p className="product-description">
          This is a detailed description of the product. It explains the features, benefits, and other relevant information.
        </p>
        <p className="product-price">$99.99</p>
        
        {/* Buttons */}
        <div className="product-actions">
          <button className="add-to-cart-btn custom-btn">Add to Cart</button>
          <button className="enquire-btn custom-btn">Enquire</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;