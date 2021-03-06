import React from 'react';
import AboutMe from '../../AboutMe/AboutMe';
import ContactMe from '../../ContactMe/ContactMe';
import MyProjects from '../../MyProjects/MyProjects';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div id="home" className="">
            <Header></Header>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Services></Services>
            <MyProjects></MyProjects>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;