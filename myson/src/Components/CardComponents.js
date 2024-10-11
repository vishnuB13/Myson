import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import products from '../Constants/Products';
import './CardComponent.css'; // Import the external CSS file
import { useMediaQuery } from 'react-responsive'; // Install react-responsive package


function CardComponent(props) {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className="main-container">
      <h4 style={{ fontWeight:'600', textAlign: 'left', fontFamily:'sans-serif' }}>{props.title}</h4>

      <div className="card-container">
        {products.map((el, index) => (
          <div className="card-wrapper" key={index}>
            <Card className="card">
              <Card.Img className="card-image img-fluid" variant="top" src={el.imageUrl} />
              <div>
              <Card.Body>
                <Card.Title className="card-title">{el.name}</Card.Title>
              </Card.Body>
              </div>
              <Button className="btn btn-primary card-button">
                {isMobile ? 'ADD +' : 'ADD TO CART'}
              </Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardComponent;
