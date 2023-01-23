import React from 'react';
import Counter from './Counter';
function FeaturesArea() {
  return (
	  <section className="features-area features-bg pt-120 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title title-style-two text-center mb-60">
                <span>what we give players</span>
                <h2>Our <span>Verticals</span></h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-md-6">
              <div className="features-item mb-30">
                <div className="features-head mb-35">
                  <div className="product-tag"><a href="/#">Collaboration</a></div>
                  <h4>Brain of our community</h4>
                  <p>Consecur adipcig eiusod tempor the inci did dolore mana is aliqsua Unimd minim thats tempor dolore adipcig</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="features-item mb-30">
                <div className="features-head mb-35">
                  <div className="product-tag"><a href="/#">Engagment</a></div>
                  <h4>Heart of our community</h4>
                  <p>Consecur adipcig eiusod tempor the inci did dolore mana is aliqsua Unimd minim thats tempor dolore adipcig</p>
                </div>
              </div>
            </div>
          </div>
          <Counter/>
        </div>
      </section>
  )
}
export default FeaturesArea;
