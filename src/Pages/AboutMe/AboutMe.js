import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutMeImage from '../../images/1.png';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <Container id="aboutme" fluid className="bg-dark py-5">

            <h1 className="text-light fw-bold container my-2 py-2">ABOUT ME</h1>
            <Container className="aboutmeimage bg-warning rounded my-3 p-5 my-5" >
                <Row>
                    <Col xs={12} md={8} sm={12} className="text-start py-2 my-auto">
                        <h4 className="">I am Junior Frontend Developer able to build a Web presence from the ground up - from concept, navigation, layout and programming to UX . Skilled at writing well-designed, testable & efficient code using current best practices in Web development. Fast learner, hard worker and team player who is proficient in an array of scripting languages & multimedia Web tools.</h4>
                    </Col>
                    <Col xs={12} md={4} sm={12}>
                        <div className="">
                            <img src={aboutMeImage} className="w-100 rounded" alt="" srcset="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default AboutMe;