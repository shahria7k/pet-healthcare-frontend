import Skeleton from '@mui/material/Skeleton';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/logo.png';
import './Header.css';


const Header = () => {

    const { user, signOut, isLoading } = useAuth();
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" className="">
                <Container className="py-lg-2 nav-container">
                    <Navbar.Brand>
                        <NavLink to='/home' className='nav-link nav-link-custom text-white'>
                            <img
                                src={logo}

                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </NavLink>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <NavLink to='/about' className='nav-link nav-link-custom'>About</NavLink>
                            <NavLink to='/services' className='nav-link nav-link-custom'>Services</NavLink>
                            <NavLink to='/location' className='nav-link nav-link-custom'>Locations & Directions</NavLink>
                            <NavLink to='/appointments' className='nav-link nav-link-custom'>Appointments</NavLink>


                        </Nav>
                        <Nav>
                            <NavLink to="/dashboard" className='nav-link nav-link-custom'>{isLoading ? <div style={{ width: "90px" }}><Skeleton variant="text" /></div> : "Dashboard"}</NavLink>
                            <NavDropdown title={user ? user.displayName : 'Account'} id="collasible-nav-dropdown" style={{ background: "transparent" }}>
                                {/* <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                                {user ? (<><NavLink to='/home' className='nav-link nav-link-custom'>Home</NavLink>
                                    <NavLink to='/about' className='nav-link nav-link-custom'>{user ? user.displayName : "name"}</NavLink></>) : ""}
                                {
                                    user ? <li className='nav-link nav-link-custom' onClick={() => signOut()} >Sign Out</li> : <><NavLink to='/signin' className='nav-link nav-link-custom' >Sign In</NavLink><NavLink to='/signup' className='nav-link nav-link-custom' >Sign Up</NavLink></>
                                }

                                {/* <NavDropdown.Item href="#action/3.4" onClick={() => handleLogIn(false)}>Logout</NavDropdown.Item> */}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    );
};

export default Header;