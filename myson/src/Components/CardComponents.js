import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CompanyLogo from '../images/CompanyLogo.png';


function CardComponent(props) {
  return (
    <div style={{borderTop:'3px solid whitesmoke', marginTop:'10px', padding:'20px'}}>
    <h3 style={{marginLeft:'0px', textAlign:'left', marginTop:'15px'}}>
      {props.title}
      </h3>
      <Card style={{ width: '18rem', marginTop:'50px', border:'none', padding:'10px', borderBottom:'1px solid red' }}>
  <Card.Img variant="top" src={CompanyLogo} />
  <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Product 1
          </Card.Text>
          <Card.Subtitle> 
              Rs.300
          </Card.Subtitle>
          <Button className='button' size='lg' border='none' marginBottom="none">Check Out</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardComponent;