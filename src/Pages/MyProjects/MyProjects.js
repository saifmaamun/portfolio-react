import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import audi from '../../images/rsz_1audi.png';
import tour from '../../images/rsz_tour.png';
import tooth from '../../images/rsz_tooth.png';

const MyProjects = () => {
    return (
        <Container fluid id='myprojects' className="bg-dark py-5">
            <Container>
                <h1 className="text-light fw-bold my-2 py-2">MY PROJECTS</h1>
                <Row>
                    <Col className="bg-warning my-auto p-3 rounded" md={8} sm={6} XS={12}>
                        <h3>Wheels</h3>
                        <ul>
                            <li>
                                Its an website of various cars.
                            </li>
                            <li>
                                Users can select and add Cars to their cart.
                            </li>
                            <li>
                                Firebase authrntication enable.
                            </li>
                            <li>
                                Admin and User have different UI.
                            </li>
                            <li>
                                Dynamic data.
                            </li>
                            
                            <div className="pt-3">
                                <a className="btn me-3 btn-dark fw-bold" href="https://audi-car-7165b.web.app/" target="_blank" rel="noopener noreferrer"><i class="fab fa-chrome text-warning"></i></a>
                                <a className="btn me-3 btn-dark fw-bold" href="https://github.com/saifmaamun/wheels-client" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-alt  text-warning"></i></a>
                                <a className="btn me-3 btn-dark fw-bold" href="https://github.com/saifmaamun/wheels-server" target="_blank" rel="noopener noreferrer"><i class="fab fa-github text-warning"></i></a>
                                </div>
                        </ul>

                    </Col>
                    <Col md={4} sm={6} XS={12}>
                        <img className="w-100" src={audi} alt="" srcset="" />
                    </Col>
                    <Col md={4} sm={6} XS={12}>
                        <img className="w-100" src={tour} alt="" srcset="" />
                    </Col>
                    <Col className="bg-warning my-auto p-3 rounded" md={8} sm={6} XS={12}>
                        <h3>Tour The World</h3>
                        <ul>
                            <li>
                                Its an website based on idea of Tourism.
                            </li>
                            <li>
                                Users can select and add various tourist spots to their cart.
                            </li>
                            <li>
                                User can add or remove desired tourist spot from their added list.
                            </li>
                            <li>
                                Firebase authrntication enable.
                            </li>
                            <li>
                                Dynamic data.
                            </li>

                            <div className="pt-3">
                                <a className="btn me-3 btn-dark fw-bold" href="https://routing-folder.web.app/" target="_blank" rel="noopener noreferrer"><i class="fab fa-chrome text-warning"></i></a>
                                <a className="btn me-3 btn-dark fw-bold" href="https://github.com/saifmaamun/tour-the-world-client" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-alt  text-warning"></i></a>
                                <a className="btn me-3 btn-dark fw-bold" href="https://github.com/saifmaamun/tour-the-world-server" target="_blank" rel="noopener noreferrer"><i class="fab fa-github text-warning"></i></a>
                            </div>
                        </ul>

                    </Col>
                    <Col className="bg-warning my-auto p-3 rounded" md={8} sm={6} XS={12}>
                        <h3>Sweeth Tooth</h3>
                        <ul>
                            <li>
                                Its an website Dental Hospital.
                            </li>
                            <li>
                                Users can select their desired treatment.
                            </li>
                            <li>
                                All doctors info are provided.
                            </li>
                            <li>
                                Firebase authrntication enable.
                            </li>
                            <li>
                                Dynamic data.
                            </li>

                            <div className="pt-3">
                                <a className="btn me-3 btn-dark fw-bold" href="https://hello-doctor-73150.web.app//" target="_blank" rel="noopener noreferrer"><i class="fab fa-chrome text-warning"></i></a>
                                <a className="btn me-3 btn-dark fw-bold" href="https://github.com/saifmaamun/sweet-tooth" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-alt  text-warning"></i></a>
                            </div>
                        </ul>

                    </Col>
                    <Col md={4} sm={6} XS={12}>
                        <img className="w-100" src={tooth} alt="" srcset="" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default MyProjects;