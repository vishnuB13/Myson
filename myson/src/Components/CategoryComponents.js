import React from 'react';

const CategoryComponents = () => {
  const images = [
    "https://dms.mydukaan.io/original/webp/media/c74f22ef-eaa2-404b-832c-7d43fc0c8d86.gif",
    "https://dukaan.b-cdn.net/500x500/webp/media/248fdaa1-3bd0-44fc-8421-7f89ef6b7375.png",
    "https://dukaan.b-cdn.net/500x500/webp/media/248fdaa1-3bd0-44fc-8421-7f89ef6b7375.png",
    "https://dukaan.b-cdn.net/500x500/webp/media/248fdaa1-3bd0-44fc-8421-7f89ef6b7375.png",
    "https://dukaan.b-cdn.net/500x500/webp/media/248fdaa1-3bd0-44fc-8421-7f89ef6b7375.png",
    "https://dukaan.b-cdn.net/500x500/webp/media/248fdaa1-3bd0-44fc-8421-7f89ef6b7375.png",
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '10px',
        borderBottom: '5px solid whitesmoke',
        boxShadow: '0.5px 0.5px 1.5px 1px whitesmoke',
        overflowX: 'auto', // Enable horizontal scrolling
        whiteSpace: 'nowrap', // Prevents items from wrapping onto the next line
      }}
    >
      
        {images.map((imageSrc, index) => (
          <img
            key={index}
            src={imageSrc}
            className='img-fluid category-image'
            alt={`category-${index}`}
          />
        ))}
    </div>
  );
};

export default CategoryComponents;
