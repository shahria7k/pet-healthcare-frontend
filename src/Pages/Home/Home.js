import React from 'react';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';
import Testimonials from './Components/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;