import React from 'react';
import { Link } from 'react-router-dom';
import heroCat from '../../../../Images/Group1.png';
import './Banner.css';
const Banner = () => {
    return (
        <section className='gradient-bg' id="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 py-lg-5">
                        <div className="d-flex flex-column justify-content-center h-100 p-lg-5">
                            <p className="sup-text  my-md-2 my-1 mt-5">Vet & Shop</p>
                            <h2 className="main-text my-3">We Taking <br /> Care For <br />
                                <span className="color-shift">Your Pets</span>
                            </h2>
                            <p className="sub-text my-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae molestie nibh.
                            </p>
                            <Link to="/appoinments" className="btn mt-4">Make an Appointment</Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-lg-5 p-4"><img src={heroCat} alt="" className="img-fluid" /></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;