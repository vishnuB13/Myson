import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';


const HeaderComponent = () => {
  const [showSidebar, setShowSidebar] = useState(false);



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
                maxWidth: '300px', // Limits max width for larger screens
                height: 'auto',
                maxHeight: '100px',
                margin: '0 auto', // Centers the logo horizontally
                borderRadius: '20px',
                backgroundColor: 'white',
              }}
            />
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
                width: '45px'

              }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>


          {/* Menu */}
          <div className='navbar'>
            <Navbar expand='lg' className='bg-body-primary'>
              <Container>
                {/* Navbar Toggle for mobile view */}
                <Navbar.Toggle aria-controls='basic-navbar-nav' />

                {/* Navbar Collapse - collapses in small screen */}
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='ms-auto'>
                    {/* Home Icon */}
                    <Nav.Link className='black-text nav-link' href='#home'>
                      <FontAwesomeIcon icon={faHome} /> Home
                    </Nav.Link>

                    {/* Wishlist Icon */}
                    <Nav.Link className='black-text nav-link' href='#about'>
                      <FontAwesomeIcon icon={faHeart} /> WishList
                    </Nav.Link>

                    {/* Account Icon */}
                    <Nav.Link className='black-text nav-link' href='#store-locator'>
                      <FontAwesomeIcon icon={faUser} /> Account
                    </Nav.Link>

                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
        <div id='category-menu' style={{ marginTop: '10px' }}>
  <ul className="category-list">
    <li>Store Locator</li>
    <li className="separator">|</li>
    <li>Terms & Conditions</li>
    <li className="separator">|</li>
    <li>Privacy Policy</li>
    <li className="separator">|</li>
    <li>Furniture</li>
    <li className="separator">|</li>
    <li>Kitchenware</li>
    <li className="separator">|</li>
    <li>Contact</li>
    <li className="separator">|</li>
    <li>About</li>
  </ul>
</div>

      </div>
    </header>
  );
};

export default HeaderComponent;



// {/* <Nav.Link className='red-text' href='#premium-products' >
//               Premium Products
//             </Nav.Link>
//             <Nav.Link className='red-text' href='#exclusive-products' >
//               Exclusive Products
//             </Nav.Link>
//             <Nav.Link className='red-text' href='#contact-us' >
//               Contact Us
//             </Nav.Link>
//             <Nav.Link className='red-text' href='#privacy-policy' >
//               Privacy Policy
//             </Nav.Link>
//             <Nav.Link className='red-text' href='#terms' >
//               Terms and Conditions
//             </Nav.Link> */}




// {/* Sidebar for mobile view */ }
// {/* {showSidebar && isMobile && (
//         <div
//           className='sidebar'
//           style={{
//             position: 'fixed',
//             top: 0,
//             left: showSidebar ? '0' : '-100%', // Animation to slide in from the left
//             width: '100%',
//             height: '100%',
//             backgroundColor: 'white',
//             zIndex: 999,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             color: 'black',
//             transition: 'left 0.5s ease', // Transition for smooth sliding effect
//           }}
//         >
//           <Nav className='flex-column text-center'>
//             <Nav.Link className='red-text' href='#home'>
//               Home
//             </Nav.Link>
//             <Nav.Link className='red-text' href='#about'>
//               WishList
//             </Nav.Link>
//             <Nav.Link className='red-text' href='#store-locator'>
//               Account
//             </Nav.Link>
//           </Nav>
//           <button
//             onClick={toggleSidebar}
//             style={{
//               position: 'absolute',
//               top: '20px',
//               right: '20px',
//               background: 'red',
//               color: 'white',
//               border: 'none',
//               padding: '10px',
//               cursor: 'pointer',
//             }}
//           >
//             Close
//           </button>
//         </div>
//       )} */}

// // Handle screen resizing
// useEffect(() => {
//   const handleResize = () => {
//     setIsMobile(window.innerWidth <= 768);
//   };

//   window.addEventListener('resize', handleResize);

//   return () => {
//     window.removeEventListener('resize', handleResize);
//   };
// }, []);

// const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

// // Function to toggle sidebar visibility
// const toggleSidebar = () => {
//   setShowSidebar(!showSidebar);
// };