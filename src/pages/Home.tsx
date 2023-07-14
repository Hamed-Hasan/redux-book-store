import React from 'react';
import Banner from '../components/Banner/Banner';
import Faciliteis from '../components/Facilities/Faciliteis';
import CorporateClient from '../components/CorporateClient/CorporateClient'
import Strength from '../components/Strength/Strength';
import CountOurNumbers from '../components/CountOurNumbers/CountOurNumbers';
import Benefits from '../components/Benefites/Benefits';
import Footer from '../layouts/Footer';
import CounterComponent from '../redux/CounterComponent';
const Home = () => {
    return (
        <div>
            <CounterComponent/>
            <Banner/>
            <Faciliteis/>
            <CorporateClient/>
            {/* product compo */}
            <Strength/>
            <CountOurNumbers/>
            <Benefits/>
            <Footer/>
        </div>
    );
};

export default Home;