import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../Images/logo.png';
import './Footer.css';
const Footer = () => {
    return (
        <footer id="footer" >
            <div className="container">
                <div className="row text-center text-lg-start text-md-start pt-4">
                    <div className="col-lg-5 ">
                        <div>
                            <Navbar.Brand >
                                <NavLink to='/home' className='nav-link nav-link-custom text-white'>
                                    <img
                                        src={logo}

                                        height="30"
                                        className="d-inline-block align-top"
                                        alt="React Bootstrap logo"
                                    />
                                </NavLink>
                            </Navbar.Brand>
                            <div className="footer-text" style={{ color: "#fff" }}>
                                <strong>Mon: </strong> Fri 8am-7pm
                                <br />
                                <br />
                                <strong>Saturday: </strong> 9am-4pm
                                <br />
                                <br />
                                <strong>Sunday: </strong> CLOSED
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <p className='text-white mt-lg-3  mt-5 ms-lg-2'><b>Navigation</b></p>
                        <NavLink to='/about' className='nav-link nav-link-custom'>About</NavLink>
                        <NavLink to='/services' className='nav-link nav-link-custom'>Services</NavLink>
                        <NavLink to='/location' className='nav-link nav-link-custom'>Locations & Directions</NavLink>
                        <NavLink to='/appointments' className='nav-link nav-link-custom'>Appointments</NavLink>

                    </div>
                    <div className="col-lg-3 text-center">
                        <p className='text-white mt-lg-3  mt-5 ms-lg-2 text-lg-center'><b>Subscribe</b></p>
                        <p className="text-white">Subscribe to get the latest news
                            from us</p>
                        <div className="footer-input">

                            <input type="email" placeholder="Email" required />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
                <div className="row mt-4" style={{ borderTop: "1px solid rgba(223, 235, 241, 0.1)" }}>
                    <div className="col-lg-8">
                        <div className="d-flex justify-content-lg-start justify-content-md-start justify-content-center align-items-center py-3 text-white">
                            <p>© Pawsy. All rights reserved</p>

                        </div>

                    </div>
                    <div className="col-lg-4">
                        <div className="d-flex justify-content-center align-items-center py-3 text-white">
                            <h6>Build with ❤ by <a href="https://shahriakhan.me" target="_blank" rel="noreferrer">Shahria Jaman  Khan</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;