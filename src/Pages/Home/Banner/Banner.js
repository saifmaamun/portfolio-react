import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import image from '../../../images/wave.svg';
import personalimage from '../../../images/rsz_2.png';

import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {
    return (
        <Container fluid className="pt-5 mb-5 bg-dark" style={{ backgroundImage: `url(${image}`, backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <Container className="pt-5 text-light">
                <Row>
                    <Col className="p-5 my-5" md={8} sm={6} xs={12}>
                        <h1>Hi, I'm <span className="text-secondary fw-bold">Saif Maamun</span></h1>
                        <h2>
                            I'm a Junior{' '}
                            <span style={{ color: 'gray', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['FrontEnd Web Developer', 'React Developer']}
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
                    <Col className="mb-5" md={4} sm={6} xs={12}>
                        <img className="w-75 roundedCircle" src={personalimage} alt="" srcset="" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Banner;