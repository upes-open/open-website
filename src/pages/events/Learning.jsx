import React from "react";

import learning_img_1 from "../../assets/img/events/learning/learning_img_1.jpg";
import learning_img_2 from "../../assets/img/events/learning/learning_img_2.jpg";
import learning_img_3 from "../../assets/img/events/learning/learning_img_3.jpg";
import learning_img_4 from "../../assets/img/events/learning/learning_img_4.jpg";
import learning_img_5 from "../../assets/img/events/learning/learning_img_5.jpg";

function SingleArea() {
    return (
        <section className="open-single-area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="open-single-content">
                            <div className="upcoming-open-head">
                                <div className="uc-open-head-title">
                                    <span>September, 2022</span>
                                    <h4>OPEN Learning Program</h4>
                                </div>
                                <div className="uc-open-price">
                                    <h5>By OPEN Community</h5>
                                </div>
                            </div>
                            <p>
                                Welcome to <span>Open Learning</span>, a collaborative initiative started by Open Community enabling freshmen to research in various professional sectors. Our motto, " Aware, Adopt, and Contribute," guides our work. We offer learners step-by-step directions so they can meticulously learn about various technical areas and flourish in them. A learner may select any of the specialisations to create projects for, and we will instruct them on how to begin their technical career. However, it's not just about their projects or technical growth; it's also about the connections they'll make, the opportunities they'll have, the experience and understanding they'll gain, and the exposure they'll get..{" "}
                            </p>
                            <p>
                                OPEN learning is the one-stop destination of all the vibrant learners looking for the first step to excellence. OPEN learning not only lays the path by sharing tutorials, conducting workshops, but also walks along with you on that path by helping you create and contribute to the projects.
                            </p>
                            <div className="open-single-img">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <img src={learning_img_1} alt="" />
                                    </div>
                                    <div className="col-sm-6">
                                        <img src={learning_img_2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="open-single-title mb-30">
                                <h4>
                                    Read <span>More ...</span>
                                </h4>
                            </div>
                            <p>
                                A number of workshops are regularly being conducted by student developers to augment the knowledge and experience as well as polish their technical skills.
                                We always appreciated our OPEN Learning students to lead the way with our support from the back-end. With this aim, we gave our learners assignments to gain practical knowledge and then even contribute in our projects to be hands-on with the technology.

                            </p>
                            <p>In the end OPEN learning provided great opportunities to advance further in the OPEN community and get a chance to be a part of collaboration vertical at the position of student developer. Some of these gems are: Navinya Sawarkar, Avni Goyal, and Agrima Jain.</p>
                            <div className="open-single-title mt-30 mb-10">
                                <h4>Glimpses</h4>
                            </div>
                            <div className="open-single-gallery">
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6">
                                        <img src={learning_img_3} alt="" />
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <img src={learning_img_4} alt="" />
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <img src={learning_img_5} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="open-single-shape">
                                <img src="assets/img/images/open_section_shape.png" alt="" />
                            </div>
                            <br />
                            <div className="text-center">
                                <a href="https://forms.office.com/r/mniNBQZpwp" className="btn btn-style-two">
                                    Join Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SingleArea;
