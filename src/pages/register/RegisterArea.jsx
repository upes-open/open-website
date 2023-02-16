import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

function RegisterArea() {
  function onChange(props) {
    console.log("Captcha value:", props);
  }
  return (
    <section className="contact-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 pl-45">
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
                  opencommunity@ddn.upes.ac.in
                </li>
              </ul>
            </div>
            <div className="contact-form">
              <form>
                <div className="row">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="row">
                  <input
                    type="email"
                    pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
                    placeholder="Your Mail"
                    required
                  />
                </div>
                <div className="row">
                  <input
                    type="tel"
                    pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                    maxlength="12"
                    title="Ten digits code"
                    placeholder="Your contact"
                    required
                  />
                </div>
                <div className="row">
                  <input type="number" placeholder="Your SAP ID" required />
                </div>
                <div className="row">
                  <input type="text" placeholder="Your Branch" required />
                </div>
                <div className="row">
                  <input type="text" placeholder="Your Course" required />
                </div>
                <div className="row justify-content-center">
                  <ReCAPTCHA
                    sitekey="6LeL030kAAAAAM7htliL3__El0Gm1-J22HbQOqqM"
                    onChange={onChange}
                  />
                </div>
                <br />
                <br />
                <div className="row justify-content-center">
                  <a href="#" className="register btn btn-style-two">
                    Register
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterArea;
