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
            <AboutMe></AboutMe>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;