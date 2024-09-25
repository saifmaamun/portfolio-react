import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image from '../../../images/wave.svg';
import personalimage from '../../../images/2.jpg';
import './Banner.css'
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {

    return (
        <Container fluid className="pt-5 myimage pb-3 bg-dark" style={{
            backgroundImage: `url(${image}`, backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <Container className="pt-5 text-light">
                <Row>
                    <Col className="p-5 my-5" md={8} sm={12} >
                        <h1>Hi, I'm <span className="text-secondary fw-bold">Saif Maamun</span></h1>
                        <h2>
                            I'm a {' '}
                            <span style={{ color: 'gray', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['FrontEnd Web Developer', 'React Developer', 'MERN Stack Developer',]}
                                    loop
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>

                        </h2>

                    </Col>
                    <Col className="mb-5" md={4} sm={12}>

                        <div >
                            <img className="w-75 rounded" src={personalimage} alt="" srcset="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Banner;