import React from 'react';
import { Link } from 'react-router-dom';
import doc from "../../../../Images/Group2.png";
const About = () => {
    return (
        <section className="container-fluid bg-white py-5">
            <div className="container">
                <div className="row py-5">
                    <div className="col-lg-6 text-center">
                        <img src={doc} alt="" className="img-fluid" />
                    </div>
                    <div className="col-lg-6">
                        <div className="py-lg-5">
                            <div className="sup-text">About us</div>
                            <h2 className="main-text my-3 text-black">We Love to Take Care of
                                <span className="color-shift ps-3">Your Pets</span>
                            </h2>
                            <p className="sub-text my-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae molestie nibh.
                            </p>
                            <Link to="/appoinments" className="btn mt-4">Make an Appointment</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;