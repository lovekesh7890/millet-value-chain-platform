import React from 'react';
import Hero from './hero';
import Navbar from './navbar';
import Information from './information';
import Future from './future';
import Impact from './impact';
import JoinUs from './joinUs';

import Footer from '../footer';

function HomePage() {
    return ( 
        <>
            <Navbar/>
            <Hero />
            <Information />
            <Future />
            <Impact />
            <JoinUs />
            <Footer/>
        </>
    );
}

export default HomePage;