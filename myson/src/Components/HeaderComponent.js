import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faHeart, faUser, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faTwitter,faYoutube,faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';
import products from '../Constants/Products';

const HeaderComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [inputWidth, setInputWidth] = useState(0); // Track the input width dynamically
  const [isFocused, setIsFocused] = useState(false); // State for handling blur effect
  const [showModal, setShowModal] = useState(false); // State to control modal visibility\

  const [inputTop, setInputTop] = useState(0); 


    // Reference for input width
    const inputRef = React.useRef(null);
    useEffect(() => {
      if (inputRef.current) {
        setInputWidth(inputRef.current.offsetWidth); // Dynamically track input width
        const inputRect = inputRef.current.getBoundingClientRect();
        setInputTop(inputRect.bottom); // Set modal top position right below the input field
      }
    }, [showModal]); // Run when the modal is shown
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const handleMenuToggle = () => {
      setIsMenuOpen((prev) => !prev); // Toggle the menu open state
    };
  
    const handleCloseMenu = () => {
      setIsMenuOpen(false); // Close the menu
    };
  



 

  const closeModal = () => {
    setShowModal(false);
    setIsFocused(false); // Remove blur effect
  };


  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: 'white' }}>
      <div className='homepage'>
        <div className='top-section' style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          
          {/* Logo and Hamburger Menu */}
          <div className='logo-hamburger'>
            {/* Navbar Toggle for mobile view */}
            {isMobile && (
              <div className='hamburger'>
                <button onClick={handleMenuToggle} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                  <span className='navbar-toggler-icon'>
                    <div></div>
                    <div></div>
                    <div></div>
                  </span>
                </button>
              </div>
            )}
            <div className='logo'>
              <img
                src={require('../images/CompanyLogo.png')}
                alt='Company Logo'
                className='img-fluid'
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  height: 'auto',
                  maxHeight: '100px',
                  margin: '0 auto',
                  borderRadius: '20px',
                  backgroundColor: 'white',
                }}
              />
            </div>
          </div>

          {/* Search Bar */}
          <div
            className='searchbar'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              padding: '10px 0',
              marginTop: isMobile ? '10px' : '0',
            }}
          >
            <input
              ref={inputRef}
              style={{
                border: 'none',
                width: '100%',
                maxWidth: '500px',
                borderRadius: '5px',
                backgroundColor: 'whitesmoke',
                padding: '10px',
              }}
              placeholder='Search For Products, brands...'
              onFocus={() => setShowModal(true)} // Show modal on focus
            />
            <button
              style={{
                backgroundColor: '#d86f70',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginLeft: '-8px',
                padding: '10px',
                color: 'white',
                width: '45px',
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          {/* Navbar */}
          <div className='navbar' style={{ display: isMobile ? 'none' : 'block' }}>
            <Navbar expand='lg' className='bg-body-primary'>
              <Container>
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='ms-auto'>
                    <Nav.Link className='nav-link' href='#home'>
                      <FontAwesomeIcon icon={faHome} /> <span className='black-text nav-link'>Home</span>
                    </Nav.Link>
                    <Nav.Link className='nav-link' href='#about'>
                      <FontAwesomeIcon icon={faHeart} /> <span className='black-text nav-link'>Wishlist</span>
                    </Nav.Link>
                    <Nav.Link className='nav-link' href='#store-locator'>
                      <FontAwesomeIcon icon={faUser} /> <span className='black-text nav-link'>Account</span>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>

        {/* Category Menu */}
        <div id='category-menu' className='category-menu' style={{ display: isMobile ? 'none' : 'block', marginTop: '10px' }}>
          <ul className='category-list'>
            <li><a className='black-text' href='#home'>Store Locator</a></li>
            <li className='separator'>|</li>
            <li><a className='black-text' href='#home'>Terms & Conditions</a></li>
            <li className='separator'>|</li>
            <li><a className='black-text' href='#home'>Privacy Policy</a></li>
            <li className='separator'>|</li>
            <li><a className='black-text' href='#home'>Dishwasher</a></li>
            <li className='separator'>|</li>
            <li><a className='black-text' href='#home'>Kitchenware</a></li>
            <li className='separator'>|</li>
            <li><a className='black-text' href='#home'>Contact</a></li>
            <li className='separator'>|</li>
            <li><a className='black-text' href='#home'>About</a></li>
          </ul>
        </div>

        {/* Modal with images */}
        {showModal && (
  <div
    className='modal'
    style={{
      top: `${inputTop + 10}px`, // Set modal just below input
    }}
    onClick={closeModal} // Close modal when clicking outside
  >
    <div
    className='modal-div'
      style={{
        width: inputWidth + 100,
      }}
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
                    <button className="close-button" onClick={closeModal}>×</button>

      <div className='modal-div-row' >
        {products.map((product, index) => (
          <div style={{display:'block'}}>
          <img
            key={index}
            src={product.imageUrl} // Replace with your image URLs
            alt={`Product ${index}`}
            style={{ width: '90px', height: '90px', borderRadius: '10px', border: 'solid 2px whitesmoke' }}
          />
          <h6 style={{font:'small-caption', color:'black'}}>{product.name}</h6>
          </div>
        ))}

      </div>

     
      
    </div>
  </div>
)}


        

        {/* Mobile Menu */}
        {isMobile && (
          <div className='mobile-menu' style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.3s ease-in-out', position: 'fixed', top: 0, right: 0, width: '80%', height: '100vh', backgroundColor: 'whitesmoke', zIndex: 1000 }}>
            {/* Close Button */}
            <h4 style={{fontWeight:'bold', marginTop:'15px', marginLeft:'30px', fontFamily:'sans-serif'}}>Menu</h4>
            <button onClick={handleCloseMenu} style={{ background: 'none', color: 'red', border: 'none', cursor: 'pointer', position: 'absolute', top: '10px', right: '20px', fontSize: '24px' }}>
              <FontAwesomeIcon icon={faTimes} />
            </button>

            {/* Navbar items for mobile */}
            <div className='navbar' style={{marginTop:'30px',borderBottom:'solid 3px whitesmoke', borderTop:'solid 0.5px black'}}>
              <Nav className='ms-auto'>
                <Nav.Link className=' black-text' href='#home'>
                  <p style={{padding:'0px', marginBottom:'0px'}} className='black-text '>Home</p>
                </Nav.Link>
                <Nav.Link className=' black-text' href='#about'>
                  <p style={{padding:'0px', marginBottom:'0px'}} className='black-text'>Wishlist</p>
                </Nav.Link>
                <Nav.Link className=' black-text' href='#store-locator'>
                  <p style={{padding:'0px', marginBottom:'0px'}} className='black-text'>Account</p>
                </Nav.Link>
              </Nav>
            </div>

            {/* Category Menu for mobile - line by line without separator */}
            <div className='category-menu' style={{ marginTop: '10px', borderBottom:'solid 3px whitesmoke', borderTop:'solid 0.5px black' }}>
              <ul className='category-list' style={{ listStyle: 'none', padding: '0', display: 'flex', flexDirection: 'column', textAlign: 'left',gap:'10px'}}>
                <li><a className='black-text' href='#home'>Store Locator</a></li>
                <li><a className='black-text' href='#terms'>Terms & Conditions</a></li>
                <li><a className='black-text' href='#privacy'>Privacy Policy</a></li>
                <li><a className='black-text' href='#dishwasher'>Dishwasher</a></li>
                <li><a className='black-text' href='#kitchenware'>Kitchenware</a></li>
                <li><a className='black-text' href='#contact'>Contact</a></li>
                <li><a className='black-text' href='#about'>About</a></li>
              </ul>
            </div>
            <div style={{ listStyle: 'none', gap: '10px',display:'flex', marginTop:'25px',justifyContent:'center', position:'absolute',bottom:'0', marginLeft:'30px', borderTop:'solid 0.5px black' }}>
          <li>
            <FontAwesomeIcon icon={faFacebook} style={{ color: 'black' }} />
          </li>
          <li>
            <FontAwesomeIcon icon={faTwitter} style={{ color: 'black' }} />
          </li>
          <li>
            <FontAwesomeIcon icon={faYoutube} style={{ color: 'black' }} />
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} style={{ color: 'black' }} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} style={{ color: 'black' }} />
          </li>
        </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;












