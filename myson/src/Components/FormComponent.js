import React, { useState, useEffect } from 'react';
import './FormComponent.css'; // Assuming you put the styles here

const ConsultationForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component mounts
    setAnimate(true);
  }, []);

  // Show form when the app first loads
  useEffect(() => {
    setShowForm(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted");
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <>
      {showForm && (
        <div className="overlay">
          <div className="form-container">
            <button className="close-button" onClick={handleClose}>×</button>
            <h5 style={{ fontWeight: 'bolder', textAlign: 'center' }}>Get a Free Consultation</h5>
            <form style={{ marginTop: '25px' }} onSubmit={handleSubmit}>
              <div className="form-group">
                <label style={{ textAlign: 'left', fontWeight: 'bold' }} htmlFor="name">Full Name<span style={{ color: 'red' }}> *</span></label>
                <input type="text" id="name" name="name" placeholder='Your full name' required />
              </div>
              <div className="form-group">
                <label style={{ textAlign: 'left', fontWeight: 'bold' }} htmlFor="mobile">
                  Mobile Number<span style={{ color: 'red' }}> *</span>
                </label>
                <input type="tel" id="mobile" name="mobile" placeholder="Your mobile number" required />
              </div>

              <button
                className="animated-button"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ConsultationForm;
