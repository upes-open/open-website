import React, { useState, useEffect } from "react";
import axios from 'axios';

const RegisterForm = ({ onSuccess, setShowWhatsAppLink }) => {
  const [formData, setFormData] = useState({
    name: '',
    college: '',
    sapid: '',
    roll: '',
    email: '',
    reference: '',
    phone: '',
    branch: '',
    year: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        process.env.REACT_APP_FORM_URL,
        { sheet1: { ...formData } },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(response)

      setSuccessMessage('Registration successful!');
      setShowWhatsAppLink(true); // Set to true after successful submission
    } catch (error) {
      console.error('Error:', error);
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (successMessage) {
      setFormData({
        name: '',
        college: '',
        sapid: '',
        roll: '',
        email: '',
        reference: '',
        phone: '',
        branch: '',
        year: '',
      });
    }
  }, [successMessage]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={handleChange}
          value={formData.name}
        />
      </div>
      <div className="row">
        <input
          type="text"
          name="college"
          placeholder="College"
          required
          onChange={handleChange}
          value={formData.college}
        />
      </div>
      <div className="row">
        <input
          type="text"
          name="sapid"
          inputMode="numeric"
          placeholder="Your Sapid (write NA if not applicable)"
          required
          onChange={handleChange}
          value={formData.sapid}
        />
      </div>
      <div className="row">
        <input
          type="text"
          name="roll"
          placeholder="Your Rollno. (write NA if not applicable)"
          required
          onChange={handleChange}
          value={formData.roll}
        />
      </div>
      <div className="row">
        <input
          type="text"
          name="email"
          placeholder="Your email"
          required
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      <div className="row">
        <input
          type="text"
          name="reference"
          placeholder="Reference email id"
          required
          onChange={handleChange}
          value={formData.reference}
        />
      </div>
      <div className="row">
        <input
          type="text"
          name="phone"
          placeholder="Your Phone no.(Whatsapp)"
          required
          onChange={handleChange}
          value={formData.phone}
        />
      </div>
      <div className="row">
        <input
          type="text"
          name="branch"
          placeholder="Your Branch"
          required
          onChange={handleChange}
          value={formData.branch}
        />
      </div>
      <div className="row">
        <input
          type="text"
          name="year"
          inputMode="numeric"
          placeholder="Academic Year"
          required
          onChange={handleChange}
          value={formData.year}
        />
      </div>
      <br />
      <br />
      <div className="row justify-content-center">
        {isLoading ? (
          <button
            type="submit"
            className="register btn btn-style-two"
            disabled
          >
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
              style={{ color: 'black' }}
            ></span>
            Loading...
          </button>
        ) : (
          <button type="submit" className="register btn btn-style-two">
            Register
          </button>
        )}
      </div>
      <br />
      {error && <span style={{ color: 'red' }}>{error}</span>}
      {successMessage && (
        <div>
          <span id="msg" style={{ color: 'black' }}>
            {successMessage}
          </span>
        </div>
      )}
    </form>
  );
};

function RegisterArea() {
  const [showWhatsAppLink, setShowWhatsAppLink] = useState(false);

  const handleRegistrationSuccess = () => {
    console.log('Registration successful!');
  };

  return (
    <section className="contact-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 pl-45 pt-50">
            <div className="section-title text-center title-style-three mb-20">
              <h2>Register</h2>
            </div>
            <div className="contact-info-list text-center mb-40">
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt" />
                  Bidholi Campus, UPES, Dehradun, India
                </li>
                <li>
                  <i className="fas fa-envelope" />
                  upesopen@gmail.com
                </li>
              </ul>
            </div>
            <div className="contact-form">
              <RegisterForm
                onSuccess={handleRegistrationSuccess}
                setShowWhatsAppLink={setShowWhatsAppLink}
              />
              {showWhatsAppLink && (
                <div>
                  <p style={{ color: "black" }}>Join our discord channel:</p>
                  <a
                    href="/discord"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join here
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterArea;
