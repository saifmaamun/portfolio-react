import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import certificate from '../../images/NYX-Certificate-Tulee Prep Guide -Final.png'

const Experience = () => {
    return (
        <Container id="experience" fluid className="bg-dark py-5">


            <h1 className="text-light fw-bold container my-2 py-2">Experience</h1>
            <Container className=" bg-warning my-3 p-5 my-5" >
                <Row>
                    <Col className="bg-warning my-auto p-3 rounded" md={8} sm={6} XS={12}>
                        <h2>Mern Stack Developer</h2>
                        <h5>Nyx Wolves Freelance Business Solutions Private Limited (Chennai)</h5>
                        <h6>03/2022 to 06/2022 </h6>
                        <ul>
                            <li>
                                Worked on an AR based website named Xarwin (like  <a href='https://www.plugxr.com/'>PlugXR </a>)

                            </li>
                            <li>
                                Implemented the authentication part. Where user can both Signup & Login using Google or via their Email.
                            </li>
                            <li>
                                Implemented User AR Module upload section. Where user can upload new AR Modules, edit existing Modules, delete Modules & publish to Marketplace.

                            </li>

                        </ul>

                    </Col>
                    <Col md={4} sm={6} XS={12}>
                        <img className="w-100" src={certificate} alt="" srcset="" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Experience;