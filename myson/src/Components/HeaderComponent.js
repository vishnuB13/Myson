import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';

const HeaderComponent = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: 'white' }}>
      <div
        className='homepage'
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          borderBottom: 'solid 5px whitesmoke',
          padding: '10px 30px',
          margin: '0 50px',
        }}
      >
        <div className='top-section' style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo and Hamburger Menu */}
          <div className='logo-hamburger' style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
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
            {/* Navbar Toggle for mobile view */}
            <div className='hamburger'>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
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
              marginTop: isMobile ? '10px' : '0', // Move the search bar to the second line on mobile
            }}
          >
            <input
              style={{
                border: 'none',
                width: '100%',
                maxWidth: '500px',
                borderRadius: '5px',
                backgroundColor: 'whitesmoke',
                padding: '10px',
              }}
              placeholder='Search For Products ...'
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

          {/* Menu */}
          <div className='navbar'>
            <Navbar expand='lg' className='bg-body-primary'>
              <Container>
                {/* Navbar Collapse - collapses in small screen */}
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='ms-auto'>
                    {/* Home Icon */}
                    <Nav.Link className='nav-link' href='#home'>
                      <FontAwesomeIcon icon={faHome} /> <a href='#home' className='black-text nav-link'>Home</a>
                    </Nav.Link>
                    {/* Wishlist Icon */}
                    <Nav.Link className='nav-link' href='#about'>
                      <FontAwesomeIcon icon={faHeart} /> <a href='#home' className='black-text nav-link'>Wishlist</a>
                    </Nav.Link>
                    {/* Account Icon */}
                    <Nav.Link className='nav-link' href='#store-locator'>
                      <FontAwesomeIcon icon={faUser} /> <a href='#home' className='black-text nav-link'>Account</a>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>

        {/* Category Menu */}
        <div id='category-menu' style={{ marginTop: '10px' }}>
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
      </div>
    </header>
  );
};

export default HeaderComponent;
