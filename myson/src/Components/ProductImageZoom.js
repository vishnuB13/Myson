import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

const ProductImageZoom = ({ imageSrc }) => {
  return (
    <div className="product-image-zoom">
      <Zoom>
        <img
          src={imageSrc}
          alt="Product"
          style={{ width: '500px', height: '500px', objectFit: 'cover', border:'solid 1px whitesmoke' }}
        />
      </Zoom>
    </div>
  );
};

export default ProductImageZoom;
