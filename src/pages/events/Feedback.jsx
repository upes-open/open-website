import React, { useState } from "react";
import axios from "axios";

function FeedbackForm() {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [excitingProjects,setExcitingProjects] = useState([]);
  const [organizeNextYear, setOrganizeNextYear] = useState(false);
  const [suggestions, setSuggestions] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProjectsError, setSelectedProjectsError] = useState(false);
  const [submissionstatus,setSubmissionStatus]=useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation if required
    const data = {
      "Name": name,
      "College/University": college,
      "Email": email,
      "Rating": rating,
      "Exciting Projects": excitingProjects,
      "Organize Next Year": organizeNextYear,
      "Suggestions": suggestions
    };
    if (excitingProjects.length === 0) {
      setSelectedProjectsError(true);
    } else {
      setSelectedProjectsError(false);
      setIsSubmitting(true);
      axios.post(process.env.REACT_APP_KEY, data)
        .then((response) => {
          console.log(response);
          setSubmissionStatus("success"); 
          // Show success message or perform other actions upon successful submission.
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
    <label htmlFor="name"className="single-line-label">Name<span className="red"> *</span></label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{width:"150%",padding:"10px"}}
        required
      /><br />
     <style>
        {`@media (max-width: 480px) {
          /* Apply styles for screens with width 480px or smaller */
          #name {
            width: 80%;          /* Set width to 100% for smaller screens */
            padding:10px;
            margin-bottom:10px;
          }
        }`}
      </style>

      <label htmlFor="college"className="single-line-label">College/University<span className="red"> *</span></label>
      <input
        type="text"
        id="college"
        name="college"
        value={college}
        onChange={(e) => setCollege(e.target.value)}
        style={{width:"150%",padding:"10px"}}
        required
      /><br />
        <style>
        {`@media (max-width: 480px) {
          /* Apply styles for screens with width 480px or smaller */
          #college {
            width: 80%;          /* Set width to 100% for smaller screens */
            padding:10px;
            margin-bottom:10px;
          }
          #label{
            margin-left:30px;
          }
        }`}
      </style>
      <label htmlFor="email"className="single-line-label">Email<span className="red"> *</span></label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{width:"150%",padding:"10px"}}
        required
      /><br />
       <style>
        {`@media (max-width: 480px) {
          /* Apply styles for screens with width 480px or smaller */
          #email {
            width: 80%;          /* Set width to 100% for smaller screens */
            padding:10px;
            margin-bottom:10px;
          }
          #label{
            margin-left:30px;
          }
        }`}
      </style>
      <br/>
      <label htmlFor="rating" className="single-line-label">How would you rate OPEN Summer of Code?<span className="red">*</span></label>
      <br/>
      <div className="rating-stars">
      {[...Array(5)].map((_, index) => (
        <label key={index}>
          <input
            type="radio"
            name="rating"
            value={index+1}
            checked={rating === String(index+1)}
            onChange={(e) => setRating(e.target.value)}
            required
          />
          <i className={`fas fa-star ${rating>=index+1 ? 'checked' : ''}`} />
        </label>
      ))}
      </div>
<br/>
     
<label htmlFor="excitingProjects"className="single-line-label">Which was the most exciting project according to you?<span className="red"> *</span></label>
<div className="project-error-message">
  {selectedProjectsError && "Please select at least one project"}
</div>

<div>
<br/>
 
  
  <label htmlFor="projectA" className="single-line">
  <input
    type="checkbox"
    id="projectA"
    name="excitingProjects"
    value="Project A"
    checked={excitingProjects.includes("Project A")}
    onChange={(e) =>
      e.target.checked
        ? setExcitingProjects([...excitingProjects, "Project A"])
        : setExcitingProjects(excitingProjects.filter(project => project !== "Project A"))
    }
  /><span class="checkmark"></span> Advanced video controller extension</label>
</div>
<div>
  
  <label htmlFor="projectB" className="single-line">
  <input
    type="checkbox"
    id="projectB"
    name="excitingProjects"
    value="Project B"
    checked={excitingProjects.includes("Project B")}
    onChange={(e) =>
      e.target.checked
        ? setExcitingProjects([...excitingProjects, "Project B"])
        : setExcitingProjects(excitingProjects.filter(project => project !== "Project B"))
    }
  /><span class="checkmark"></span> Ambulance tracking app</label>
  <br/>
</div>


<div>
  
  <label htmlFor="projectC" className="single-line">
  <input
    type="checkbox"
    id="projectC"
    name="excitingProjects"
    value="Project C"
    checked={excitingProjects.includes("Project C")}
    onChange={(e) =>
      e.target.checked
        ? setExcitingProjects([...excitingProjects, "Project C"])
        : setExcitingProjects(excitingProjects.filter(project => project !== "Project C"))
    }
  /><span class="checkmark"></span> Bio.lnk</label>
  <br/>
</div>

<div>
  
  <label htmlFor="projectD" className="single-line">
  <input
    type="checkbox"
    id="projectD"
    name="excitingProjects"
    value="Project D"
    checked={excitingProjects.includes("Project D")}
    onChange={(e) =>
      e.target.checked
        ? setExcitingProjects([...excitingProjects, "Project D"])
        : setExcitingProjects(excitingProjects.filter(project => project !== "Project D"))
    }
  /><span class="checkmark"></span> Door darshan</label>
  <br/>
</div>

<div>
  
  <label htmlFor="projectE" className="single-line">
  <input
    type="checkbox"
    id="projectE"
    name="excitingProjects"
    value="Project E"
    checked={excitingProjects.includes("Project E")}
    onChange={(e) =>
      e.target.checked
        ? setExcitingProjects([...excitingProjects, "Project E"])
        : setExcitingProjects(excitingProjects.filter(project => project !== "Project E"))
    }
  /><span class="checkmark"></span> Lost and Found web app</label>
  <br/>
</div>

<div>
  
  <label htmlFor="projectF" className="single-line">
  <input
    type="checkbox"
    id="projectF"
    name="excitingProjects"
    value="Project F"
    checked={excitingProjects.includes("Project F")}
    onChange={(e) =>
      e.target.checked
        ? setExcitingProjects([...excitingProjects, "Project F"])
        : setExcitingProjects(excitingProjects.filter(project => project !== "Project F"))
    }
  /><span class="checkmark"></span> MeetingMinutes-MoM generator</label>
  <br/>
</div>

<div>
  
  <label htmlFor="projectG" className="single-line">
  <input
    type="checkbox"
    id="projectG"
    name="excitingProjects"
    value="Project G"
    checked={excitingProjects.includes("Project G")}
    onChange={(e) =>
      e.target.checked
        ? setExcitingProjects([...excitingProjects, "Project G"])
        : setExcitingProjects(excitingProjects.filter(project => project !== "Project G"))
    }
  /><span class="checkmark"></span> Resource Sharing App</label>
  <br/>
</div>

<div>
  
  <label htmlFor="projectH" className="single-line">
  <input
    type="checkbox"
    id="projectH"
    name="excitingProjects"
    value="Project H"
    checked={excitingProjects.includes("Project H")}
    onChange={(e) =>
      e.target.checked
        ? setExcitingProjects([...excitingProjects, "Project H"])
        : setExcitingProjects(excitingProjects.filter(project => project !== "Project H"))
    }
  /><span class="checkmark"></span> Sensitive information blurring app</label>
  <br/>
</div>

<div>
  
  <label htmlFor="projectI" className="single-line">
  <input
    type="checkbox"
    id="projectI"
    name="excitingProjects"
    value="Project I"
    checked={excitingProjects.includes("Project I")}
    onChange={(e) =>
      e.target.checked
        ? setExcitingProjects([...excitingProjects, "Project I"])
        : setExcitingProjects(excitingProjects.filter(project => project !== "Project I"))
    }
  /><span class="checkmark"></span> Swayam Bazaar</label>
  <br/>
</div>

<div>
  
  <label htmlFor="projectJ" className="single-line">
  <input
    type="checkbox"
    id="projectJ"
    name="excitingProjects"
    value="Project J"
    checked={excitingProjects.includes("Project J")}
    onChange={(e) =>
      e.target.checked
        ? setExcitingProjects([...excitingProjects, "Project J"])
        : setExcitingProjects(excitingProjects.filter(project => project !== "Project J"))
    }
  /><span class="checkmark"></span> TechConnect</label>
  <br/>
</div>

<div>
  
  <label htmlFor="projectK" className="single-line">
  <input
    type="checkbox"
    id="projectK"
    name="excitingProjects"
    value="Project K"
    checked={excitingProjects.includes("Project K")}
    onChange={(e) =>
      e.target.checked
        ? setExcitingProjects([...excitingProjects, "Project K"])
        : setExcitingProjects(excitingProjects.filter(project => project !== "Project K"))
    }
  /><span class="checkmark"></span> Vaccination recording system</label>
  <br/>
</div>

<br/>

<label htmlFor="organizeNextYear" className="single-line-label">Would you like to organize OSoC again next year?<span className="red"> *</span></label>
<br/>
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
        checked={organizeNextYear===false}
        onChange={() => setOrganizeNextYear(false)}
        required
      />
      
      <label htmlFor="organizeNo"><span class="icheckmark"></span>No</label><br />
      </div>
      <br/>
     <label htmlFor="suggestions"className="single-line-label">Suggestions<span className="red"> *</span></label>
      <textarea
        id="suggestions"
        name="suggestions"
        value={suggestions}
        onChange={(e) => setSuggestions(e.target.value)}
        rows="6"
        cols="50"
        style={{ width: "150%", padding: "10px"}}
        required
      ></textarea><br />
      <br/>
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
