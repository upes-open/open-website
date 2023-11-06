import React, { useEffect } from 'react';
import WOW from 'wowjs';
import '../../assets/css/MediaMorph.css';
function Privacypolicy() {
  useEffect(() => {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true,
      loop: Infinity,
    }).init();
  }, []);

  return (
    <section className="inner-about-area fix">
      <div className="container">
      <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8">
                  <div className="section-title title-style-three text-center mb-20">
                    <br/>
                    <h2>PRIVACY <span>POLICY</span></h2>
                    </div>
                    <div className='inner-about-content'>
                    <h5>Privacy Policy for MediaMorph Chrome Extension</h5>
                    
                   
                    <p>
  Effective Date: 1 Nov 2023
  <br /><br />
  <strong>1. Introduction</strong>
  <br /><br />
  Thank you for using the MediaMorph Chrome extension. The MediaMorph Extension is an open-source project developed by the OPEN Community UPES. This Privacy Policy outlines our commitment to transparency and respect for your privacy. The Extension does not collect any personal information from its users.
  <br /><br />
  <strong>2. Information We Do Not Collect</strong>
  <br /><br />
  No Data Collection: We want to assure you that the MediaMorph Extension does not collect any personal data or usage information from its users.
  <br /><br />
  Open Source: The source code for the MediaMorph Extension is publicly available on our GitHub repository: <a href="https://github.com/upes-open/MediaMorph" target="_blank">https://github.com/upes-open/MediaMorph</a>. You are welcome to review the code to verify that it does not collect any data.
  <br /><br />
  <strong>3. How We Use the Extension</strong>
  <br /><br />
  The MediaMorph Extension is designed to enhance media player functionalities, offering features such as video speed control, sound adjustment, OCR functionality, clickable video links, picture-in-picture, video seek controls for YouTube shorts, colorblind modes, and more. Our aim is to improve your media player experience without intruding on your privacy.
  <br /><br />
  <strong>4. Data Sharing and Disclosure</strong>
  <br /><br />
  Since the MediaMorph Extension does not collect any data, there is no data to share or disclose to third parties.
  <br /><br />
  <strong>5. Security</strong>
  <br /><br />
  We are committed to ensuring the security and integrity of the MediaMorph Extension's code. Our open-source project welcomes contributions from the community and is subject to regular code review.
  <br /><br />
  <strong>6. Your Choices</strong>
  <br /><br />
  Open Source: The MediaMorph Extension is open source, and you can review the code on our GitHub repository to confirm that it does not collect any data: <a href="https://github.com/upes-open/MediaMorph" target="_blank">https://github.com/upes-open/MediaMorph</a>.
  <br /><br />
  Uninstall: You can stop using the MediaMorph Extension at any time by uninstalling it from your Chrome browser.
  <br /><br />
  <strong>7. Changes to this Privacy Policy</strong>
  <br /><br />
  While we do not collect data, we may update this Privacy Policy from time to time for operational or legal reasons. We will notify you of any material changes through the Extension or other means.
  <br /><br />
  <strong>8. Contact Us</strong>
  <br /><br />
  If you have any questions or concerns about this Privacy Policy or the MediaMorph Chrome Extension, please contact us through our GitHub repository or at <a href="https://www.instagram.com/upesopen_/" target="_blank">https://www.instagram.com/upesopen_/</a>.
</p>

</div>
                </div>
              </div>
      </div>
    </section>
  );
}

export default Privacypolicy;
