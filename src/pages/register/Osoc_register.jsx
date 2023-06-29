import React from "react";
import {useState} from 'react';
import axios from 'axios';

function RegisterArea() {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[contact,setContact]=useState('');
    const[github,setGithub]=useState('');
    const[university,setUniversity]=useState('');
    const[year,setYear]=useState('');
    const [successMessage, setSuccessMessage] = useState('');
  
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(name,email,contact,github,university,year);
      const data={
        "Name":name,
        "Email":email,
        "Contact":contact,
        "Github":github,
        "University":university,
        "Year":year
      }
      axios.post(process.env.REACT_APP_KEY,data).then((response)=>{
        console.log(response);
        setSuccessMessage("Registration successful!");
        setName('');
        setEmail('');
        setContact('');
        setGithub('');
        setUniversity('');
        setYear('');
      })
    }

return (
    <section className="contact-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 pl-45 pt-50">
            <div className="section-title text-center title-style-three mb-20">
              <h2>Register for OSOC'23</h2>
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
              <form onSubmit={handleSubmit} method="POST">
                <div className="row">
                  <input type="text" placeholder="Your Name" required onChange={(e)=>setName(e.target.value)} value={name}/>
                </div>
                <div className="row">
                  <input
                    type="email"
                    pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
                    placeholder="Your Mail"
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div className="row">
                  <input
                    type="tel"
                    //pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
                    maxLength="12"
                    title="Ten digits code"
                    placeholder="Your contact"
                    required
                    value={contact}
                    onChange={(e)=>setContact(e.target.value)}
                  />
                </div>
                <div className="row">
                  <input type="url" placeholder="Github Link" required value={github} onChange={(e)=>setGithub(e.target.value)}/>
                </div>
                <div className="row">
                  <input type="text" placeholder="Your University" required value={university} onChange={(e)=>setUniversity(e.target.value)} />
                </div>
                <div className="row">
                  <input type="number" placeholder="Year of graduation" required value={year} onChange={(e)=>setYear(e.target.value)}/>
                </div>
                <br />
                <br />
                <div className="row justify-content-center">
                  <button type="submit" className="register btn btn-style-two">Register</button>
                </div>
                <br />
                {successMessage && (
          <div>
            <span id="msg" style={{ color: 'black' }}>{successMessage}</span> {/* Display the success message */}
            <p style={{ color: 'black', fontSize:'25px'}}>Click <a style={{ color: 'red' }} href="http://discord.gg/2rnWsvkX">here</a> to join the discord server.</p> {/* Display the join link */}
          </div>
        )}
              </form>
              <span id="msg"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterArea;
