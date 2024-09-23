import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


const HeaderComponent = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: 'white' }}>
      <div
        className='homepage'
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white',
          borderBottom: "solid 5px whitesmoke",
          padding: '10px',
          margin: '0 50px',
        }}
      >
        <div className='top-section' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <div className='logo'>
            <img
              src={require('../images/CompanyLogo.png')}
              alt='Company Logo'
              className='img-fluid'
              style={{
                width: '100%',  // Adjusts based on container size
                maxWidth: '200px', // Limits max width for larger screens
                height: 'auto',
                maxHeight: '100px',
                margin: '0 auto', // Centers the logo horizontally
                borderRadius: '20px',
                backgroundColor: 'white',
              }}
            />
          </div>


          {/* Navbar */}
          <div className='navbar'>
            <Navbar expand='lg' className='bg-body-primary'>
              <Container>
                {/* Navbar Toggle for mobile view */}
                <Navbar.Toggle aria-controls='basic-navbar-nav' />

                {/* Navbar Collapse - collapses in small screen */}
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='ms-auto'>
                    <Nav.Link className='black-text' href='#home'>
                      Home
                    </Nav.Link>
                    <Nav.Link className='black-text' href='#about'>
                      About
                    </Nav.Link>
                    <Nav.Link className='black-text' href='#store-locator'>
                      Store Locator
                    </Nav.Link>
                    <Nav.Link className='black-text' href='#premium-products'>
                      Premium Products
                    </Nav.Link>
                    <Nav.Link className='black-text' href='#exclusive-products'>
                      Exclusive Products
                    </Nav.Link>
                    <Nav.Link className='black-text' href='#contact-us'>
                      Contact Us
                    </Nav.Link>
                    <Nav.Link className='black-text' href='#privacy-policy'>
                      Privacy Policy
                    </Nav.Link>
                    <Nav.Link className='black-text' href='#terms'>
                      Terms and Conditions
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
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
          }}
        >
          <input
            style={{
              padding: '5px',
              border: '1px solid',
              width: '100%',
              maxWidth: '500px',
              borderRadius: '5px',
            }}
            placeholder='Search For Products ...'
          />
          <button
            style={{
              padding: '5px 10px',
              backgroundColor: 'white',
              border: '1px solid',
              borderRadius: '5px',
              cursor: 'pointer',
              marginLeft: '5px',
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Sidebar for mobile view */}
      {showSidebar && isMobile && (
        <div
          className='sidebar'
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'black',
            transition: '2.0s',
          }}
        >
          <Nav className='flex-column text-center'>
            <Nav.Link className='red-text' href='#home' >
              Home
            </Nav.Link>
            <Nav.Link className='red-text' href='#about' >
              About
            </Nav.Link>
            <Nav.Link className='red-text' href='#store-locator' >
              Store Locator
            </Nav.Link>
            <Nav.Link className='red-text' href='#premium-products' >
              Premium Products
            </Nav.Link>
            <Nav.Link className='red-text' href='#exclusive-products' >
              Exclusive Products
            </Nav.Link>
            <Nav.Link className='red-text' href='#contact-us' >
              Contact Us
            </Nav.Link>
            <Nav.Link className='red-text' href='#privacy-policy' >
              Privacy Policy
            </Nav.Link>
            <Nav.Link className='red-text' href='#terms' >
              Terms and Conditions
            </Nav.Link>
          </Nav>
          <button
            onClick={toggleSidebar}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'red',
              color: 'white',
              border: 'none',
              padding: '10px',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      )}
    </header>
  );
};

export default HeaderComponent;
