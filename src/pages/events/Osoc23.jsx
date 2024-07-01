import React from "react";
import {OsocProjects} from '../../data/OsocProjects';

function SingleArea() {
  return (
    <section className="open-single-area pt-120 pb-120">

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="open-single-content">
              <div className="upcoming-open-head">
                <div className="uc-open-head-title">
                  <span>01-07-2024 to 31-07-2024</span>
                  <h4>OPEN Summer Of Code 2024</h4>
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
              <div className="open-single-title mb-30">
                <h4>
                  OSoC <span>Projects</span>
                </h4>
                <section className="upcoming-opens-area upcoming-opens-bg pt-40 pb-80">
                  <div className="container">
                    <div className="row">
                      {OsocProjects.map((data) => (
                        <div className="col-lg-4 col-md-6">
                          <div className="upcoming-open-item mb-40">
                            <div className="upcoming-open-head">
                              <div className="uc-open-head-title">
                                <span>{data.date}</span>
                                <h4><a href="/#">{data.name}</a></h4>
                              </div>
                              <div className="uc-open-price">
                                <h5>{data.type}</h5>
                              </div>
                            </div>
                            <div className="upcoming-open-thumb">
                              <img src={data.imageURL} alt="" />
                              <div className="upcoming-open-cart">
                                <a href={data.GitHub} target="_blank" className="btn transparent-btn">GitHub</a>
                              </div>
                            </div>
                            <br />
                            <p>{data.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SingleArea;
