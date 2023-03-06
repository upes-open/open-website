import React from "react";
import {useState} from 'react';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";

function RegisterArea() {
  function onChange(props) {
    console.log("Captcha value:", props);
  }
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[contact,setContact]=useState('');
  const[SAP,setSAP]=useState('');
  const[branch,setBranch]=useState('');
  const[course,setCourse]=useState('');
  const[year,setYear]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name,email,contact,SAP,branch,course,year);
    const data={
      "Name":name,
      "Email":email,
      "Contact":contact,
      "sap":SAP,
      "Branch":branch,
      "Course":course,
      "Year":year
    }
    axios.post(process.env.React_App_sheets_Api,data).then((response)=>{
      console.log(response);
      setName('');
      setEmail('');
      setContact('');
      setSAP('');
      setBranch('');
      setCourse('');
      setYear('');
    })
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
                  <input type="number" placeholder="Your SAP ID" required value={SAP} onChange={(e)=>setSAP(e.target.value)}/>
                </div>
                <div className="row">
                  <input type="text" placeholder="Your Branch" required value={branch} onChange={(e)=>setBranch(e.target.value)} />
                </div>
                <div className="row">
                  <input type="text" placeholder="Your Course" required  value={course} onChange={(e)=>setCourse(e.target.value)}/>
                </div>
                <div className="row">
                  <input type="number" placeholder="Current year" required value={year} onChange={(e)=>setYear(e.target.value)}/>
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
                  <button type="submit" className="register btn btn-style-two">Register</button>
                </div>
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
