import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import './Services.css';
const Services = () => {
    const { isLoading } = useAuth();
    return (
        <section id="services" className="py-5">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-8">
                        <div className="sup-text">Service</div>
                        <h2 className=" my-4">What We <span className="color-shift">Offer</span></h2>
                    </div>
                    <div className="col-lg-4">
                        <p className="sub-text mt-lg-5">Praesent condimentum luctus tellus, nec egestas dolor convallis
                        </p>
                    </div>
                </div>
                <div className="row gy-5 mt-lg-4">
                    {isLoading ? [...new Array(8)].map((item, index) => (<div className="col-lg-3 col-md-6 d-flex justify-content-center align-items-center" key={index}>
                        <Link to="/services/id" className="card-custom"></Link>
                    </div>)) : <></>}

                </div>
            </div>
        </section>
    );
};

export default Services;