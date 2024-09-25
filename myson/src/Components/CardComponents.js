import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CompanyLogo from '../images/CompanyLogo.png';

function CardComponent(props) {
  return (
    <div style={{ borderTop: '3px solid whitesmoke', marginTop: '5px', padding: '80px' }}>
      <h3 style={{ margin: 'auto', textAlign: 'left', marginTop: '15px' }}>{props.title}</h3>
      
      <div style={styles.cardContainer}>
        {/* Repeat this structure for each card */}
        <div style={styles.cardWrapper}>
          <Card style={styles.card}>
            <Card.Img style={styles.cardImage} variant="top" src={CompanyLogo} />
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Kitchen Utensil</Card.Title>
              <Card.Text style={styles.cardText}>Rs.1500</Card.Text>
            </Card.Body>
            <Button style={styles.cardButton}>ADD TO CART</Button>
          </Card>
        </div>

        {/* Add more cards as needed */}
        <div style={styles.cardWrapper}>
          <Card style={styles.card}>
            <Card.Img style={styles.cardImage} variant="top" src={CompanyLogo} />
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Kitchen Utensil</Card.Title>
              <Card.Text style={styles.cardText}>Rs.1500</Card.Text>
            </Card.Body>
            <Button style={styles.cardButton}>ADD TO CART</Button>
          </Card>
        </div>
          {/* Add more cards as needed */}
          <div style={styles.cardWrapper}>
          <Card style={styles.card}>
            <Card.Img style={styles.cardImage} variant="top" src={CompanyLogo} />
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Kitchen Utensil</Card.Title>
              <Card.Text style={styles.cardText}>Rs.1500</Card.Text>
            </Card.Body>
            <Button style={styles.cardButton}>ADD TO CART</Button>
          </Card>
        </div>  {/* Add more cards as needed */}
        <div style={styles.cardWrapper}>
          <Card style={styles.card}>
            <Card.Img style={styles.cardImage} variant="top" src={CompanyLogo} />
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Kitchen Utensil</Card.Title>
              <Card.Text style={styles.cardText}>Rs.1500</Card.Text>
            </Card.Body>
            <Button style={styles.cardButton}>ADD TO CART</Button>
          </Card>
        </div>  {/* Add more cards as needed */}
        <div style={styles.cardWrapper}>
          <Card style={styles.card}>
            <Card.Img style={styles.cardImage} variant="top" src={CompanyLogo} />
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Kitchen Utensil</Card.Title>
              <Card.Text style={styles.cardText}>Rs.1500</Card.Text>
            </Card.Body>
            <Button style={styles.cardButton}>ADD TO CART</Button>
          </Card>
        </div>  {/* Add more cards as needed */}
        <div style={styles.cardWrapper}>
          <Card style={styles.card}>
            <Card.Img style={styles.cardImage} variant="top" src={CompanyLogo} />
            <Card.Body>
              <Card.Title style={styles.cardTitle}>Kitchen Utensil</Card.Title>
              <Card.Text style={styles.cardText}>Rs.1500</Card.Text>
            </Card.Body>
            <Button style={styles.cardButton}>ADD TO CART</Button>
          </Card>
        </div>
        {/* Repeat for other cards */}
      </div>
    </div>
  );
}

const styles = {
  cardContainer: {
    display: 'flex',
    overflowX: 'auto',
    gap: '35px',
    paddingBottom: '10px',
    paddingTop:'30px'
  },
  cardWrapper: {
    flex: '0 0 auto',
    width: '250px',
    height:'400px'
  },
  card: {
    width: '100%',
    height: '350px',
    border: 'none',
    
  },
  cardImage: {
    border: '3px solid whitesmoke',
    borderRadius: '10px',
    width: '100%',
    height: '250px',
  },
  cardTitle: {
    textAlign: 'left',
  },
  cardText: {
    textAlign: 'left',
    color: 'black',
    fontWeight: 'bolder',
  },
  cardButton: {
    width: '100%',
    color: 'white',
    backgroundColor: 'black',
    borderRadius: '0 0 15px 15px',
    height: '45px',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    padding:'5px'
  },
};

export default CardComponent;
