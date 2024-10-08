import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import products from '../Constants/Products';
import './CardComponent.css'; // Import the external CSS file

function CardComponent(props) {
  return (
    <div className="main-container">
      <h3 className="title">{props.title}</h3>

      <div className="card-container">
        {products.map((el, index) => (
          <div className="card-wrapper" key={index}>
            <Card className="card">
              <Card.Img className="card-image" variant="top" src={el.imageUrl} />
              <Card.Body>
                <Card.Title className="card-title">{el.name}</Card.Title>
                <Card.Text className="card-text">Rs.{el.price}</Card.Text>
              </Card.Body>
              <Button className="btn btn-primary card-button">ADD TO CART</Button>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardComponent;
