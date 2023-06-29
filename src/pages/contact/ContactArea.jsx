import React from 'react';

function ContactArea() {

  return (
	<section className="contact-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div id="contact-map">
              {/* <iframe src="https://maps.google.com/maps?width=100&amp;height=700&amp;hl=en&amp;q=upes&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" height={300} width={400} frameborder="0"></iframe> */}
              </div>
            </div>
            <div className="col-lg-6 pl-45">
              <div className="section-title title-style-three mb-20">
                <h2>CONTACT US</h2>
              </div>
              <div className="contact-info-list mb-40">
                <ul>
                  <li><i className="fas fa-map-marker-alt" />Bidholi Campus, UPES, Dehradun, India</li>
                  <li><i className="fas fa-envelope" />upesopen@gmail.com</li>
                </ul>
              </div>
              <div className="contact-form">
                <form>
                  <textarea name="message" id="message" placeholder="Write Message..." defaultValue={""} />
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Your Mail" />
                    </div>
                  </div>
                  <button>SUBMIT MESSAGE</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default ContactArea