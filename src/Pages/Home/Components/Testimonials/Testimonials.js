import React, { useEffect, useState } from 'react';
import "./Testimonials.css";
const Testimonials = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('/users.json').then(res => res.json()).then(data => setUsers(data));
    }, []);
    return (
        <section className="container-fluid pt-5" id="testimonial">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="sup-text">Service</div>
                        <h2 className="my-4"> See What Our Client <span className="color-shift ms-3">Say</span></h2>
                    </div>
                    <div className="col-lg-4">
                        <p className="sub-text mt-lg-5">We Care for Paws
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row py-5">
                        {
                            users.map(item => (
                                <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center text-dark text-decoration-none" key={item.id}>

                                    <div className="card-custom p-3 text-center" style={{ height: "auto", textDecoration: "none" }}>
                                        <div>
                                            <img src={item.image} alt="" className="img-fluid rounded my-3" />
                                        </div>
                                        <h4>{item.name}</h4>
                                        <p>{item.quote}</p>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Testimonials;