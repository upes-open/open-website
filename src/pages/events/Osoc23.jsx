import React, { useState } from "react";
import { Col, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import axios from 'axios';

function SingleArea() 
{
  const [modal,setmodal]=useState(false)
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name,email);
    const data={
      "Name":name,
      "Email":email,
    }
    
    setIsSubmitting(true);

    axios.post(process.env.REACT_APP_KEY2,data).then((response)=>{
      console.log(response);
      setName('');
      setEmail('');
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setIsSubmitting(false); 
    });
  }
  return (
    <section className="open-single-area pt-120 pb-120">

      <Modal
      size="lg"
      isOpen={modal}
      toggle={()=>setmodal(!modal)}
      >
        <ModalHeader toggle={()=>setmodal(!modal)} className="modal-heading">
          <h6 style={{color:'black'}}>Enter your mail id for future updates and newsletter.</h6>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit} method="POST">
            <Row>
            <Col lg={12}>
                <div>
                  <label htmlFor="name" style={{color:'black'}}>
                    Name
                  </label>
                  <input type="text" className="form-control" placeholder="Enter your name" value={name}
                    onChange={(e)=>setName(e.target.value)}/>
                </div>
              </Col>
              <Col lg={12}>
                <div>
                  <label htmlFor="email" style={{marginTop:'20px',color:'black'}}>
                    Email
                  </label>
                  <input type="email" className="form-control" placeholder="Enter your email" value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
              </Col>
            </Row>
            <button type="submit" style={{margin:'10px',height:'40px',backgroundColor:'#a1cd3a',color:'black',border:'none',borderRadius:'5px',width:'100px',cursor:'pointer',marginLeft:'2px'}}>{isSubmitting ? "Submitting..." : "Submit"}</button> 
          </form>
        </ModalBody>
      </Modal>


      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="open-single-content">
              <div className="upcoming-open-head">
                <div className="uc-open-head-title">
                  <span>07-07-2023 to 07-08-2023</span>
                  <h4>OPEN Summer Of Code 2023</h4>
                </div>
                <div className="uc-open-price">
                  <h5>Online</h5>
                </div>
              </div>
              <p>
                <span>OPEN Summer Of Code</span> is a unique initiative that provides open source enthusiasts with the opportunity to gain practical experience by working on real-world problem statements. It serves as a platform where individuals, regardless of their level of expertise, can contribute to open source projects and collaborate with a community of like-minded individuals.{" "}
              </p>
              <p>
              OSoC is open to everyone, without any restrictions on participation. Whether you are a beginner or an experienced professional, if you have a passion for open source and a desire to make a difference, you are welcome to join OSoC. We believe that diversity and inclusivity are vital for the success of open source projects, and we encourage individuals from all backgrounds to participate.
              </p>

              <div className="open-single-title mb-30">
                <h4>
                  How to <span>Participate?</span>
                </h4>
                <br />
                <p>To participate in OSoC, simply follow these steps:</p>
              </div>
              <p>
              <span>Join our Discord community:</span> After registering with the provided link below, join our active Discord server, where you will find a vibrant community of mentors and participants.
              </p>
              <p>
                <span>Interact with our mentors:</span> Engage with our experienced mentors on Discord. They are there to guide and support you throughout your journey in OSoC. Feel free to ask questions, seek advice, and discuss project ideas with them.
              </p>
              <p>
                <span>Choose an issue to resolve:</span> Browse through the list of open source projects available for OSoC. You can find these projects on our website. Select an issue that interests you and aligns with your skills and expertise. Each issue represents a real-world problem that you can contribute to solving.
              </p>
              <p>
                <span>Assign yourself the chosen issue:</span> Once you have identified the issue you wish to resolve, assign it to yourself on the project's GitHub repository. This will ensure that the community knows you are working on it and can provide assistance if needed.
              </p>
              <p>
                <span>Start contributing:</span> Dive into the project and start working on the assigned issue. Use the resources available, collaborate with other participants, and leverage the mentorship to make meaningful contributions. Remember, every contribution counts and makes a difference.
              </p>
              <p>
                <span>Showcase your work:</span> As you make progress on the issue, share updates with the community. You can do this by posting regular updates on Discord, sharing code snippets, or creating documentation. This not only helps others understand your work but also allows you to receive feedback and suggestions from the community.
              </p>
              <p>
                <span>Complete and submit your contribution:</span> Once you have resolved the assigned issue, ensure that your code is clean, well-documented, and tested. Submit your contribution to the project's GitHub repository through a pull request. Our mentors will review your work and provide valuable feedback to help you improve.
              </p>
              <p>
              By following these steps, you can actively participate in OSoC, gain hands-on experience, and contribute to the open source community.
              <br />
               Join OSoC today and embark on a journey of learning, collaboration, and impact in the world of open source.
              </p>
              
              <button className="btn btn-style-two" onClick={()=>setmodal(true)}>Registration Closed</button> 
              <a href="/leaderboard" className="btn btn-style-two">View Leaderboard</a>
{/*                 Commented out feedback form button */}
              <a href="/Feedback" className="btn btn-style-two">Feedback</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SingleArea;
