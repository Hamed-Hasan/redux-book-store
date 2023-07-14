import React from 'react';
import Banner from '../components/Banner/Banner';
import Faciliteis from '../components/Facilities/Faciliteis';
import CorporateClient from '../components/CorporateClient/CorporateClient'
import Strength from '../components/Strength/Strength';
const Home = () => {
    return (
        <div>
            <Banner/>
            <Faciliteis/>
            <CorporateClient/>
            {/* product compo */}
            <Strength/>
        </div>
    );
};

export default Home;