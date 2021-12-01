import React from 'react';
import AboutMe from '../../AboutMe/AboutMe';
import MyProjects from '../../MyProjects/MyProjects';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div id="home" className="">
            <Header></Header>
            <Banner></Banner>
            <MyProjects></MyProjects>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;