import React from 'react';
import HomeBanner from './sections/HomeBanner/HomeBanner.js';
import { HomeWrapper, FirstSection, BgMask, FirstSectionGrid ,Header1 } from './style.js';

const Home = () => {
    return (
        <HomeWrapper className="test">
            <HomeBanner></HomeBanner>
        </HomeWrapper>
    );
};
export default Home;
