import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import HowWork from '../HowWork/HowWork';
import LikeUs from '../LikeUs/LikeUs';
import OurService from '../OurService/OurService';
import Testimonail from '../Testimonail/Testimonail';
import Trust from '../Trust/Trust';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <HowWork></HowWork>
            <OurService></OurService>
            <Trust></Trust>
            <LikeUs></LikeUs>
            <Testimonail></Testimonail>
        </div>
    );
};

export default Home;