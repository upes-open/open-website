import React from "react";
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import '../../assets/css/register.css';
import Modal from 'react-modal';
import { useForm} from "react-hook-form"
import { database} from "../firebase/firebase";
import { set,ref } from "firebase/database";
import toast, { Toaster } from 'react-hot-toast';

Modal.setAppElement('#root');

function OpenRegister() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    reset,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    setIsSubmitting(true);
    const verticals = [];
    if (data.engagement) verticals.push("engagement");
    if (data.collaboration) verticals.push("collaboration");
    if (data.marketing) verticals.push("marketing");

    const teams = [];
    if (data["student-developer"]) teams.push("Student Developer");
    if (data.photography) teams.push("Photography");
    if (data.design) teams.push("Design");
    if (data.editorial) teams.push("Editorial");
    if (data.PR) teams.push("PR Team");
    if (data["social-media"]) teams.push("Social Media Team");

    const processedData = { ...data, verticals, teams };
    delete processedData.engagement;
    delete processedData.collaboration;
    delete processedData.marketing;
    delete processedData["student-developer"];
    delete processedData.photography;
    delete processedData.design;
    delete processedData.editorial;
    delete processedData.PR;
    delete processedData["social-media"];

    console.log(processedData);
    
    const reference = ref(database, 'registrations/' + data.name); 
    set(reference, processedData)
      .then(() => {
        console.log("Data successfully sent to Firebase");
        reset();
        toast.success('Registration successfull!')
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("Error sending data to Firebase", error);
        toast.error(`${error}`)
        setIsSubmitting(false);
      });
  };
  return (
    <section className="contact-area pt-120 pb-120">
      <div><Toaster /></div>
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
                  <input placeholder="Your SAP ID" required {...register("sap")}/>
                </div>
                <div className="row">
                  <input type="text" placeholder="Your Branch" required {...register("branch")}/>
                </div>
                <div className="row">
                  <input type="text" placeholder="Your Course" required {...register("course")}/>
                </div>
                <div className="row">
                  <input placeholder="Current year" required {...register("number")}/>
                </div>
                <div className="row">
                  <span>Your birth date:</span><input type="date" placeholder="Birth Date" required {...register("birth-date")}/>
                </div>
                <div id="div2">
                  <p style={{ color: '#7E7E7E', width: '350px' }}> <a href="#" style={{color:'red'}} onClick={openModal}>Click here</a> to know about different verticals</p>
                  <p style={{ color: '#7E7E7E' }}>Interested Vertical</p>
                  <input id="input2" type="checkbox" {...register("engagement")} /> <label id="label2">Engagement</label>
                  <br />
                  <input id="input2" type="checkbox" {...register("collaboration")} /> <label >Collaboration</label>
                  <br />
                  <input id="input2" type="checkbox" {...register("marketing")} /> <label>Marketing</label>
                </div>
                <br />
                <div id="div2">
                  <p style={{ color: '#7E7E7E' }}>Interested team</p>
                  <input id="input2" type="checkbox" {...register("student-developer")} /> <label id="label2" style={{width:'250px'}}>Student Developer(Collaboration vertical)</label>
                  <br />
                  <input id="input2" type="checkbox" {...register("photography")} /> <label style={{width:'250px'}}>Photography (Engagement vertical)</label>
                  <br />
                  <input id="input2" type="checkbox" {...register("design")} /> <label style={{width:'250px'}}>Design (Engagement vertical)</label>
                  <br />
                  <input id="input2" type="checkbox" {...register("editorial")} /> <label style={{width:'250px'}}>Editorial (Engagement vertical)</label>
                  <br />
                  <input id="input2" type="checkbox" {...register("PR")} /> <label style={{width:'250px'}}>PR Team (Marketing vertical)</label>
                  <br />
                  <input id="input2" type="checkbox" {...register("social-media")} /> <label style={{width:'250px'}}>Social Media Team (Marketing vertical)</label>
                </div>
                <br/>
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
                <button type="submit" className="register btn btn-style-two" disabled={isSubmitting} style={{color:'black'}}>
                    {isSubmitting ? 'Submitting...' : 'Register'}
                  </button>
                  <br />
                  <p style={{'color':'black'}}>Incase you are unable to register here, kindly fill the google form: <a href="https://forms.gle/nxaCkP71ExrDM8ELA" target="blank">Form</a></p>
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
        <img src="https://i.postimg.cc/DzGpSY6q/Screenshot-2024-07-24-173448.png" alt="Verticals" style={{ width: '100%' }} />
      </Modal>
    </section>
  );
}

export default OpenRegister;
