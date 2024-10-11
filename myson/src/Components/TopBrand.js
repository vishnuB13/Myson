import React from 'react';
import './CardComponent.css'; // Import the external CSS file


const TopBrands = () => {
  const images = [
    ,
    "https://www.classeq.co.uk/uploads/products/classeq-g400/G400-basket-on-door.png",
    "https://www.dihr.com/sync/img/HT 11 ECO.jpg",
    "https://www.scotsice.com.au/_images/_dihr/RX101E.jpg",
    "https://www.classeq.co.uk/uploads/products/classeq-g500/G500_Rack_On_Door.png",
    "https://www.angliacateringequipment.com/wp-content/uploads/2022/09/Convotherm-Maxx-10.10-Electric-Combi-Oven-101-Shelves-GN-11-400x400.webp","https://www.classeq.co.uk/uploads/products/classeq-g400/G400-basket-on-door.png",
    "https://www.dihr.com/sync/img/HT 11 ECO.jpg",
    "https://www.scotsice.com.au/_images/_dihr/RX101E.jpg",
  ];

  const names = [

    "",
    "Winter halter",
    "Bosch",
    "Convotherm",
    "Classeq",
    "Blue star",
    "Winter halter",
    "Bosch",
    "Convotherm",
  ];

  return (<>

   <div
      className='main-container'
    >
                    <h5 style={{ fontWeight:'600', textAlign: 'left', fontFamily:'sans-serif' }}>Shop from Top Brands</h5>

<div className='card-container top-container'>
      {images.map((imageSrc, index) => (
        <div className='top-brand-container' key={index} style={{ textAlign: 'center', margin: '0 10px' }}>
          <img
            src={imageSrc}
            className='top-brand-image'
            alt={`category-${index}`}
            // Adjust image size as needed
          />
          <div className='black-text top-brand-name' style={{ marginTop: '5px',color:'var(--black-12)' }}>
            {names[index]} {/* Display the name under each image */}
          </div>
        </div>
      ))}
      </div>
    </div>
  </>
   
  );
};

export default TopBrands;
