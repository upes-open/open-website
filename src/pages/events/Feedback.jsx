import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";


function FeedbackForm() {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [excitingProjects, setExcitingProjects] = useState([]);
  const [organizeNextYear, setOrganizeNextYear] = useState(false);
  const [suggestions, setSuggestions] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProjectsError, setSelectedProjectsError] = useState(false);
  const [submissionstatus, setSubmissionStatus] = useState(false);

  const appSettings = {
    apiKey: "AIzaSyCBRP_et_Sg44bXes0snM6O_S1AV2-uUsA",
    authDomain: "upes-open.firebaseapp.com",
    databaseURL: "https://upes-open-default-rtdb.firebaseio.com",
    projectId: "upes-open",
    storageBucket: "upes-open.appspot.com",
    messagingSenderId: "924316504730",
    appId: "1:924316504730:web:d4f5194765043273274523",
    measurementId: "G-4WSLMC7LVR"
  };

  const app = initializeApp(appSettings);
  const database = getDatabase(app);
  const feedbacksDB = ref(database, "feedbacks");

  const resetForm = () => {
    setName("");
    setCollege("");
    setEmail("");
    setRating("");
    setExcitingProjects([]);
    setOrganizeNextYear(false);
    setSuggestions("");
    setSelectedProjectsError(false);
    setSubmissionStatus("");
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    //Form validation if required
    const data = {
      "Name": name,
      "CollegeOrUniversity": college,
      "Email": email,
      "Rating": rating,
      "ExcitingProjects": excitingProjects,
      "OrganizeNextYear": organizeNextYear,
      "Suggestions": suggestions
    };
    console.log(data);
    if (excitingProjects.length === 0) {
      setSelectedProjectsError(true);
    } else {
      setSelectedProjectsError(false);
      setIsSubmitting(true);
      push(feedbacksDB,data)
        .then((response) => {
          console.log(response);
          setSubmissionStatus("success"); // Show success message or perform other actions upon successful submission.
          resetForm();
        })
        .catch((error) => {
          console.error(error);
          // Handle error, show error message, etc.
        })
        .finally(() => {
          setIsSubmitting(false); // Reset submitting state after form submission
        });
    }
  };


  return (
    <section className="contact-area pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10 pl-45 pt-50">
            <div className="section-title text-center title-style-three mb-20">
              <h2>Feedback for OSOC'23</h2>
            </div>
            {/* Contact info */}
            <div className="contact-info-list text-center mb-40">
              <ul className="contact-list">
                <li className="contact-item">
                  <i className="fas fa-map-marker-alt" />
                  Bidholi Campus, UPES, Dehradun, India
                </li>
                <li className="contact-item">
                  <i className="fas fa-envelope" />
                  upesopen@gmail.com
                </li>
              </ul>
            </div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className="single-line-label">Name<span className="red"> *</span></label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: "100%", padding: "10px" }}
                className="input-long"
                required
              /><br />

              <label htmlFor="college" className="single-line-label">College/University<span className="red"> *</span></label>
              <input
                type="text"
                id="college"
                name="college"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                style={{ width: "100%", padding: "10px" }}
                className="input-long"
                required
              /><br />

              <label htmlFor="email" className="single-line-label">Email<span className="red"> *</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: "100%", padding: "10px" }}
                className="input-long"
                required
              /><br />
              <br />
              <label htmlFor="rating" className="single-line-label">How would you rate OPEN Summer of Code?<span className="red">*</span></label>
              <br />
              <div className="rating-stars">
                {[...Array(5)].map((_, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={index + 1}
                      checked={rating === String(index + 1)}
                      onChange={(e) => setRating(e.target.value)}
                      required
                    />
                    <i className={`fas fa-star ${rating >= index + 1 ? 'checked' : ''}`} />
                  </label>
                ))}
              </div>
              <br />

              <label htmlFor="excitingProjects" className="single-line-label">Which was the most exciting project according to you?<span className="red"> *</span></label>
              <div className="project-error-message">
                {selectedProjectsError && "Please select at least one project"}
              </div>

              <div>
                <br />


                <label htmlFor="projectA" className="single-line">
                  <input
                    type="checkbox"
                    id="projectA"
                    name="excitingProjects"
                    value="Advanced video controller extension"
                    checked={excitingProjects.includes("Advanced video controller extension")}
                    onChange={(e) =>
                      e.target.checked
                        ? setExcitingProjects([...excitingProjects, "Advanced video controller extension"])
                        : setExcitingProjects(excitingProjects.filter(project => project !== "Advanced video controller extension"))
                    }
                  /><span class="checkmark"></span> Advanced video controller extension</label>
              </div>
              <div>

                <label htmlFor="projectB" className="single-line">
                  <input
                    type="checkbox"
                    id="projectB"
                    name="excitingProjects"
                    value="Ambulance tracking app"
                    checked={excitingProjects.includes("Ambulance tracking app")}
                    onChange={(e) =>
                      e.target.checked
                        ? setExcitingProjects([...excitingProjects, "Ambulance tracking app"])
                        : setExcitingProjects(excitingProjects.filter(project => project !== "Ambulance tracking app"))
                    }
                  /><span class="checkmark"></span> Ambulance tracking app</label>
                <br />
              </div>


              <div>

                <label htmlFor="projectC" className="single-line">
                  <input
                    type="checkbox"
                    id="projectC"
                    name="excitingProjects"
                    value="Bio.lnk"
                    checked={excitingProjects.includes("Bio.lnk")}
                    onChange={(e) =>
                      e.target.checked
                        ? setExcitingProjects([...excitingProjects, "Bio.lnk"])
                        : setExcitingProjects(excitingProjects.filter(project => project !== "Bio.lnk"))
                    }
                  /><span class="checkmark"></span> Bio.lnk</label>
                <br />
              </div>

              <div>

                <label htmlFor="projectD" className="single-line">
                  <input
                    type="checkbox"
                    id="projectD"
                    name="excitingProjects"
                    value="Door darshan"
                    checked={excitingProjects.includes("Door darshan")}
                    onChange={(e) =>
                      e.target.checked
                        ? setExcitingProjects([...excitingProjects, "Door darshan"])
                        : setExcitingProjects(excitingProjects.filter(project => project !== "Door darshan"))
                    }
                  /><span class="checkmark"></span> Door darshan</label>
                <br />
              </div>

              <div>

                <label htmlFor="projectE" className="single-line">
                  <input
                    type="checkbox"
                    id="projectE"
                    name="excitingProjects"
                    value="Lost and Found web app"
                    checked={excitingProjects.includes("Lost and Found web app")}
                    onChange={(e) =>
                      e.target.checked
                        ? setExcitingProjects([...excitingProjects, "Lost and Found web app"])
                        : setExcitingProjects(excitingProjects.filter(project => project !== "Lost and Found web app"))
                    }
                  /><span class="checkmark"></span> Lost and Found web app</label>
                <br />
              </div>

              <div>

                <label htmlFor="projectF" className="single-line">
                  <input
                    type="checkbox"
                    id="projectF"
                    name="excitingProjects"
                    value="MeetingMinutes-MoM generator"
                    checked={excitingProjects.includes("MeetingMinutes-MoM generator")}
                    onChange={(e) =>
                      e.target.checked
                        ? setExcitingProjects([...excitingProjects, "MeetingMinutes-MoM generator"])
                        : setExcitingProjects(excitingProjects.filter(project => project !== "MeetingMinutes-MoM generator"))
                    }
                  /><span class="checkmark"></span> MeetingMinutes-MoM generator</label>
                <br />
              </div>

              <div>

                <label htmlFor="projectG" className="single-line">
                  <input
                    type="checkbox"
                    id="projectG"
                    name="excitingProjects"
                    value="Resource Sharing App"
                    checked={excitingProjects.includes("Resource Sharing App")}
                    onChange={(e) =>
                      e.target.checked
                        ? setExcitingProjects([...excitingProjects, "Resource Sharing App"])
                        : setExcitingProjects(excitingProjects.filter(project => project !== "Resource Sharing App"))
                    }
                  /><span class="checkmark"></span> Resource Sharing App</label>
                <br />
              </div>

              <div>

                <label htmlFor="projectH" className="single-line">
                  <input
                    type="checkbox"
                    id="projectH"
                    name="excitingProjects"
                    value="Sensitive information blurring app"
                    checked={excitingProjects.includes("Sensitive information blurring app")}
                    onChange={(e) =>
                      e.target.checked
                        ? setExcitingProjects([...excitingProjects, "Sensitive information blurring app"])
                        : setExcitingProjects(excitingProjects.filter(project => project !== "Sensitive information blurring app"))
                    }
                  /><span class="checkmark"></span> Sensitive information blurring app</label>
                <br />
              </div>

              <div>

                <label htmlFor="projectI" className="single-line">
                  <input
                    type="checkbox"
                    id="projectI"
                    name="excitingProjects"
                    value="Swayam Bazaar"
                    checked={excitingProjects.includes("Swayam Bazaar")}
                    onChange={(e) =>
                      e.target.checked
                        ? setExcitingProjects([...excitingProjects, "Swayam Bazaar"])
                        : setExcitingProjects(excitingProjects.filter(project => project !== "Swayam Bazaar"))
                    }
                  /><span class="checkmark"></span> Swayam Bazaar</label>
                <br />
              </div>

              <div>

                <label htmlFor="projectJ" className="single-line">
                  <input
                    type="checkbox"
                    id="projectJ"
                    name="excitingProjects"
                    value="TechConnect"
                    checked={excitingProjects.includes("TechConnect")}
                    onChange={(e) =>
                      e.target.checked
                        ? setExcitingProjects([...excitingProjects, "TechConnect"])
                        : setExcitingProjects(excitingProjects.filter(project => project !== "TechConnect"))
                    }
                  /><span class="checkmark"></span> TechConnect</label>
                <br />
              </div>

              <div>

                <label htmlFor="projectK" className="single-line">
                  <input
                    type="checkbox"
                    id="projectK"
                    name="excitingProjects"
                    value="Vaccination recording system"
                    checked={excitingProjects.includes("Vaccination recording system")}
                    onChange={(e) =>
                      e.target.checked
                        ? setExcitingProjects([...excitingProjects, "Vaccination recording system"])
                        : setExcitingProjects(excitingProjects.filter(project => project !== "Vaccination recording system"))
                    }
                  /><span class="checkmark"></span> Vaccination recording system</label>
                <br />
              </div>

              <br />

              <label htmlFor="organizeNextYear" className="single-line-label">Would you like to organize OSoC again next year?<span className="red"> *</span></label>
              <br />
              <div className="radio-options">

                <input
                  type="radio"
                  id="organizeYes"
                  name="organizeNextYear"
                  value="Yes"
                  checked={organizeNextYear === true}
                  onChange={() => setOrganizeNextYear(true)}
                  required
                />

                <label htmlFor="organizeYes"><span class="icheckmark"></span>Yes</label>


                <input
                  type="radio"
                  id="organizeNo"
                  name="organizeNextYear"
                  value="No"
                  checked={organizeNextYear === false}
                  onChange={() => setOrganizeNextYear(false)}
                  required
                />

                <label htmlFor="organizeNo"><span class="icheckmark"></span>No</label><br />
              </div>
              <br />
              <label htmlFor="suggestions" className="single-line-label">Suggestions<span className="red"> *</span></label>
              <textarea
                id="suggestions"
                name="suggestions"
                value={suggestions}
                onChange={(e) => setSuggestions(e.target.value)}
                rows="4"
                cols="50"
                style={{ width: "100%", padding: "10px" }}
                required
              ></textarea><br />
              <br />
              <div className={`submission-status ${submissionstatus === "success" ? "success" : ""}`}>
                {submissionstatus === "success" && "Submitted successfully."}
              </div>
              <input
                type="submit"
                value={isSubmitting ? "Submitting..." : "Submit"}
                disabled={isSubmitting}
                className="submit-button"
              />


            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedbackForm;
