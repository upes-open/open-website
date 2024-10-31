import React, { useState } from "react";
import { useForm } from "react-hook-form"
import { database } from "../firebase/firebase";
import { ref as dbref,set} from "firebase/database";
import { uploadBytes, getDownloadURL, ref as storageRef} from "firebase/storage";
import { imgDB } from "../firebase/firebase";
import { v4 } from "uuid"
import toast, { Toaster } from 'react-hot-toast';

const RegisterForm = ({ onSuccess, setShowWhatsAppLink }) => {
  // const storage = GetStorage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [showIndividualForm, setShowIndividualForm] = useState(false);
  const [showTeamForm, setShowTeamForm] = useState(false);
  const [showButtons, setShowButtons] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegisterIndividually = () => {
    setShowIndividualForm(true);
    setShowButtons(false);
  };
  const handleRegisterTeam = () => {
    setShowTeamForm(true);
    setShowButtons(false);
  };

  const handleUpload = async (file) => {
    const imgs = storageRef(imgDB, `Imgs/${v4()}`)
    const snapshot = await uploadBytes(imgs, file);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  }

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      let paymentScreenshotUrl = '';
  
      if (data.paymentScreenshot && data.paymentScreenshot.length > 0) {
        const file = data.paymentScreenshot[0];
        paymentScreenshotUrl = await handleUpload(file);
      }
  
      if (!database) {
        throw new Error("Firebase database not initialized");
      }
      console.log(data.name)
      const reference = dbref(database, `gamingRegistrations/${data.teamName || data.name}`);
      const registrationData = { ...data, paymentScreenshot: paymentScreenshotUrl };
  
      await set(reference, registrationData).then(() => {
        reset();
        toast.success('Registration successful!');
        setShowButtons(true);
        setShowIndividualForm(false);
        setShowTeamForm(false);
      });
    } catch (error) {
      console.error("Error sending data to Firebase", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster />
      <br /><br />
      {showButtons && (
        <div style={{ display: 'flex', gap: '16px', marginLeft: '-110px' }}>
          <button className="btn btn-style-two" onClick={handleRegisterTeam}>
            Register in a Team
          </button>
          <button className="btn btn-style-two" onClick={handleRegisterIndividually}>
            Register Individually
          </button>
        </div>
      )}


      {showTeamForm && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <input
              type="text"
              placeholder="Team Name"
              required
              {...register("teamName")}
            />
          </div>
          <h5 style={{ 'color': 'black', marginLeft: '-20px' }}>Student 1 Details</h5>
          <br />
          <div className="row">
            <input
              type="text"
              placeholder="Student 1 Name"
              required
              {...register("student1Name")}
            />
          </div>
          <div className="row">
            <input
              placeholder="Student 1 SAP ID"
              required
              {...register("student1Sap")}
            />
          </div>
          <div className="row">
            <input
              type="email"
              pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
              placeholder="Student 1 College Mail"
              required
              {...register("student1Email")}
            />
          </div>
          <div className="row">
            <input
              type="tel"
              maxLength="12"
              title="Ten digits code"
              placeholder="Student 1 Contact"
              required
              {...register("student1Contact")}
            />
          </div>
          <div className="row">
            <input
              placeholder="Student 1 Valorant ID"
              required
              {...register("student1ValorantID")}
            />
          </div>

          <h5 style={{ 'color': 'black', marginLeft: '-20px' }}>Student 2 Details</h5>
          <br />
          <div className="row">
            <input
              type="text"
              placeholder="Student 2 Name"
              required
              {...register("student2Name")}
            />
          </div>
          <div className="row">
            <input
              placeholder="Student 2 SAP ID"
              required
              {...register("student2Sap")}
            />
          </div>
          <div className="row">
            <input
              type="email"
              pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
              placeholder="Student 2 College Mail"
              required
              {...register("student2Email")}
            />
          </div>
          <div className="row">
            <input
              type="tel"
              maxLength="12"
              title="Ten digits code"
              placeholder="Student 2 Contact"
              required
              {...register("student2Contact")}
            />
          </div>
          <div className="row">
            <input
              placeholder="Student 2 Valorant ID"
              required
              {...register("student2ValorantID")}
            />
          </div>

          <h5 style={{ 'color': 'black', marginLeft: '-20px' }}>Student 3 Details</h5>
          <br />
          <div className="row">
            <input
              type="text"
              placeholder="Student 3 Name"
              required
              {...register("student3Name")}
            />
          </div>
          <div className="row">
            <input
              placeholder="Student 3 SAP ID"
              required
              {...register("student3Sap")}
            />
          </div>
          <div className="row">
            <input
              type="email"
              pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
              placeholder="Student 3 College Mail"
              required
              {...register("student3Email")}
            />
          </div>
          <div className="row">
            <input
              type="tel"
              maxLength="12"
              title="Ten digits code"
              placeholder="Student 3 Contact"
              required
              {...register("student3Contact")}
            />
          </div>
          <div className="row">
            <input
              placeholder="Student 3 Valorant ID"
              required
              {...register("student3ValorantID")}
            />
          </div>

          <h5 style={{ 'color': 'black', marginLeft: '-20px' }}>Student 4 Details</h5>
          <br />
          <div className="row">
            <input
              type="text"
              placeholder="Student 4 Name"
              required
              {...register("student4Name")}
            />
          </div>
          <div className="row">
            <input
              placeholder="Student 4 SAP ID"
              required
              {...register("student4Sap")}
            />
          </div>
          <div className="row">
            <input
              type="email"
              pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
              placeholder="Student 4 College Mail"
              required
              {...register("student4Email")}
            />
          </div>
          <div className="row">
            <input
              type="tel"
              maxLength="12"
              title="Ten digits code"
              placeholder="Student 4 Contact"
              required
              {...register("student4Contact")}
            />
          </div>
          <div className="row">
            <input
              placeholder="Student 4 Valorant ID"
              required
              {...register("student4ValorantID")}
            />
          </div>

          <h5 style={{ 'color': 'black', marginLeft: '-20px' }}>Student 5 Details</h5>
          <br />
          <div className="row">
            <input
              type="text"
              placeholder="Student 5 Name"
              required
              {...register("student5Name")}
            />
          </div>
          <div className="row">
            <input
              placeholder="Student 5 SAP ID"
              required
              {...register("student5Sap")}
            />
          </div>
          <div className="row">
            <input
              type="email"
              pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
              placeholder="Student 5 College Mail"
              required
              {...register("student5Email")}
            />
          </div>
          <div className="row">
            <input
              type="tel"
              maxLength="12"
              title="Ten digits code"
              placeholder="Student 5 Contact"
              required
              {...register("student5Contact")}
            />
          </div>
          <div className="row">
            <input
              placeholder="Student 5 Valorant ID"
              required
              {...register("student5ValorantID")}
            />
          </div>

          <div>
            <label>Registration Fee: 400</label>
            <img style={{
              width: '400px',
              marginLeft: '-30px'
            }} src="https://i.postimg.cc/3Jh6pQBh/Whats-App-Image-2024-10-30-at-17-53-58-d97be71f.jpg" alt="QR Code" />
          </div>
          <br /> <br />
          <div>
            <label style={{ width: '400px' }} htmlFor="">Upload Payment screenshot</label>
            <input type="file" accept="image/*" {...register('paymentScreenshot')} />
          </div>
          <br />
          <button type="submit" className="register btn btn-style-two" style={{ color: 'black' }}>
            Register
          </button>
        </form>
      )}

      {showIndividualForm && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <input type="text" placeholder="Your Name" required {...register("name")} />
          </div>
          <div className="row">
            <input placeholder="Your SAP ID" required {...register("sap")} />
          </div>
          <div className="row">
            <input
              type="email"
              pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
              placeholder="Your College Mail"
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
            <input placeholder="Your Valorant ID" required {...register("valorantID")} />
          </div>
          <div>
            <label>Registration Fee: 100</label>
            <img src="https://i.postimg.cc/3Jh6pQBh/Whats-App-Image-2024-10-30-at-17-53-58-d97be71f.jpg" alt="QR Code"
              style={{
                width: '400px',
                marginLeft: '-30px'
              }} />
          </div>
          <br />
          <div>
            <label style={{ width: '400px' }} htmlFor="">Upload Payment screenshot</label>
            <input type="file" accept="image/*" {...register('paymentScreenshot')} />
          </div>
          <br />
          <button type="submit" className="register btn btn-style-two" disabled={isSubmitting} style={{ color: 'black' }}>
            {isSubmitting ? 'Submitting...' : 'Register'}
          </button>
        </form>

      )}
    </>
  );
};

function RegisterArea() {
  const [showWhatsAppLink, setShowWhatsAppLink] = useState(false);

  const handleRegistrationSuccess = () => {
    console.log('Registration successful!');
  };

  return (
    <section className="contact-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 pl-45 pt-50">
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
                  upesopen@gmail.com
                </li>
              </ul>
            </div>
            <div className="contact-form">
              <RegisterForm
                onSuccess={handleRegistrationSuccess}
                setShowWhatsAppLink={setShowWhatsAppLink}
              />
              {showWhatsAppLink && (
                <div>
                  <p style={{ color: "black" }}>Join our discord channel:</p>
                  <a
                    href="/discord"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Join here
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterArea;
