import React from "react";
import { useState } from 'react';
import axios from 'axios';
import ReCAPTCHA from "react-google-recaptcha";
import '../../assets/css/register.css';
import Modal from 'react-modal';
import { useForm} from "react-hook-form"

Modal.setAppElement('#root');

function OpenRegister() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function onChange(props) {
    console.log("Captcha value:", props);
  }
  const openModal = (event) => {
    event.preventDefault();
    setModalIsOpen(true);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const vertical = [];
    if (data.engagement) vertical.push("engagement");
    if (data.collaboration) vertical.push("collaboration");
    if (data.marketing) vertical.push("marketing");

    const processedData = { ...data, vertical };
    delete processedData.engagement;
    delete processedData.collaboration;
    delete processedData.marketing;
    console.log(processedData)
  }

  return (
    <section className="contact-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 pl-45">
            <div className="section-title text-center title-style-three mb-20 mt-40">
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <input type="text" placeholder="Your Name" required {...register("name")}/>
                </div>
                <div className="row">
                  <input
                    type="email"
                    pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
                    placeholder="Your Mail"
                    required
                    {...register("email")}
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
                    {...register("contact")}
                  />
                </div>
                <div className="row">
                  <input type="number" placeholder="Your SAP ID" required {...register("sap")}/>
                </div>
                <div className="row">
                  <input type="text" placeholder="Your Branch" required {...register("branch")}/>
                </div>
                <div className="row">
                  <input type="text" placeholder="Your Course" required {...register("course")}/>
                </div>
                <div className="row">
                  <input type="number" placeholder="Current year" required {...register("number")}/>
                </div>
                <div className="row">
                  <input type="date" placeholder="Birth Date" required {...register("birth-date")}/>
                </div>
                <div id="div2">
                  <p style={{ color: '#7E7E7E', width: '350px' }}> <a href="#" style={{color:'red'}} onClick={openModal}>Click here</a> to know about different verticals</p>
                  <p style={{ color: '#7E7E7E' }}>Interested Vertical</p>
                  <input id="input2" type="checkbox" {...register("engagement")}/> <label id="label2">Engagement</label>
                  <br />
                  <input id="input2" type="checkbox" {...register("collaboration")}/> <label >Collaboration</label>
                  <br />
                  <input id="input2" type="checkbox" {...register("marketting")}/> <label>Marketing</label>
                </div>
                <br />
                <div className="row">
                  <input type="text" placeholder="Resume/Portfolio link" required {...register("resume")}/>
                </div>
                <div className="row">
                  <input type="text" placeholder="Anything you want to share with us!!" {...register("about")}/>
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            marginTop:'100px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            height:'400px',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor:'beige',
            marginBottom:'20px',
          },
        }}
      >
        <button onClick={() => setModalIsOpen(false)} style={{ float: 'right',cursor:'pointer',color:'red' }}>X</button>
        <h2 style={{color:'black'}}>Different Verticals</h2>
        <img src="https://i.postimg.cc/T3nL2LVc/Screenshot-2024-07-21-152319.png" alt="Verticals" style={{ width: '100%' }} />
      </Modal>
    </section>
  );
}

export default OpenRegister;
