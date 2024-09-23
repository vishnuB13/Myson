import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CompanyLogo from '../images/CompanyLogo.png';


function CardComponent() {
  return (
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
        <Button className='button' size='lg' border='none'>Check Out</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;