import React, { useState, useEffect } from 'react';
import './FormComponent.css'; // Assuming you put the styles here

const ConsultationForm = () => {
  const [showForm, setShowForm] = useState(false);

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
            <h2>Get a Free Consultation</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number:</label>
                <input type="tel" id="mobile" name="mobile" required />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ConsultationForm;
