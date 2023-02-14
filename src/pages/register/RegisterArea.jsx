import React from "react";

function RegisterArea() {
  return (
    <section className="contact-area pt-120 pb-120">
      <div className="container">
        <div className="row">
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
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="row">
                  <input type="email" placeholder="Your Mail" />
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
                  <a href="/#" className="register btn btn-style-two">
                    Register
                  </a>
                </div>
                {/* <button className="">Register</button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterArea;
