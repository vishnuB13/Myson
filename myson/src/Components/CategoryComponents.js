import React from 'react';

const CategoryComponents = () => {
  const images = [
    "https://dms.mydukaan.io/original/webp/media/c74f22ef-eaa2-404b-832c-7d43fc0c8d86.gif",
    "https://www.classeq.co.uk/uploads/products/classeq-g400/G400-basket-on-door.png",
    "https://www.dihr.com/sync/img/HT 11 ECO.jpg",
    "https://www.scotsice.com.au/_images/_dihr/RX101E.jpg",
    "https://www.classeq.co.uk/uploads/products/classeq-g500/G500_Rack_On_Door.png",
    "https://www.angliacateringequipment.com/wp-content/uploads/2022/09/Convotherm-Maxx-10.10-Electric-Combi-Oven-101-Shelves-GN-11-400x400.webp",
  ];

  const names = [
    "Offer Zone",
    "Blue star",
    "Winter halter",
    "Bosch",
    "Convotherm",
    "Classeq",
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
        <div key={index} style={{ textAlign: 'center', margin: '0 10px' }}>
          <img
            src={imageSrc}
            className='img-fluid category-image'
            alt={`category-${index}`}
            style={{ maxWidth: '100px', height: 'auto' }} // Adjust image size as needed
          />
          <div className='black-text' style={{ marginTop: '5px',color:'var(--black-12)' }}>
            {names[index]} {/* Display the name under each image */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryComponents;
