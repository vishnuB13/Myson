import React from 'react';

const FooterComponent = () => {
  return (
    <footer style={{  padding: '20px 0' }}>
      <div id='last' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '20px' }}>

        {/* Logo and description on the left */}
        <section id="footer-logo" style={{ flexGrow: 1, maxWidth: '33%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px' }}>
          <img
            src={require('../images/CompanyLogo.png')}
            alt="Company Logo"
            className="img-fluid"
            style={{
              width: '100%',
              maxWidth: '200px',
              height: 'auto',
              maxHeight: '100px',
              marginBottom: '10px',
              borderRadius: '20px',
            }}
          />
          <p style={{ textAlign: 'left', margin: '0', padding: '0', width: '100%' }}>
            Since our establishment in 2018, MYSON has swiftly risen as India's leading hub for pet parents.
            With a wide array of furniture and kitchenwares, we fulfill all your kitchen requirements with unparalleled quality and attention.
            With a presence in 2 physical retail outlets spanning Kerala, we're continually expanding our reach to serve you better.
          </p>
        </section>

        {/* Links */}
        <section id="links" style={{ flexGrow: 1, maxWidth: '33%', padding: '20px' }}>
          <ul>
            <h3>Links</h3>
            <li>Kitchen</li>
            <li>Furniture</li>
            <li>Shops</li>
          </ul>
        </section>

        {/* Contact Us */}
        <section id="contact-us" style={{ flexGrow: 1, maxWidth: '33%', padding: '20px' }}>
          <ul>
            <h3>Contact Us</h3>
            <li style={{ marginBottom: '8px' }}>Call Us at 8606387883</li>
            <li style={{ marginBottom: '8px' }}>www.myson.in</li>
            <ul>
              <li style={{ marginBottom: '8px' }}>Facebook</li>
              <li style={{ marginBottom: '8px' }}>Twitter</li>
              <li style={{ marginBottom: '8px' }}>YouTube</li>
              <li style={{ marginBottom: '8px' }}>LinkedIn</li>
              <li style={{ marginBottom: '8px' }}>Instagram</li>
            </ul>
          </ul>
        </section>
      </div>
      <h6>© 2024 MYSON Private Limited</h6>
    </footer>
  );
};

export default FooterComponent;
