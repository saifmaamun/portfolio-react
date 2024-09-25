import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import donate from '../../images/donation camp.png'
import game from '../../images/GamePlan.png';

import tooth from '../../images/rsz_tooth.png';

const MyProjects = () => {
    return (
        <Container fluid id='myprojects' className="bg-dark py-5">
            <Container>
                <h1 className="text-light fw-bold my-2 py-2">MY PROJECTS</h1>
                <Row>
                    {/* Donation Camp */}
                    <Col className="bg-warning my-auto p-3 rounded" md={8} sm={6} XS={12}>
                        <h3>Donation Camp</h3>
                        <ul>
                            <li>
                                A Charity Website where user can search and donate various sector.


                            </li>
                            <li>
                                A Fully Functional and Responsive for all kind of devices.

                            </li>
                            <li>
                                Customized Authentication with Next Auth and Private Routing enable.

                            </li>
                            <li>
                                User Role Based Actions

                            </li>
                            <li>
                                Separate User and Admin role.
                            </li>
                            <li>

                                Basic CRUD Operation.
                            </li>
                            <li>
                                Admin can delete, add any products, review, and order by others. Can make Admin.

                            </li>
                            <li>

                                Added Pie Chart, Bar Chart for Better Data Visualization.
                            </li>

                            <div className="pt-3">
                                <a className="btn me-3 btn-dark fw-bold" href="https://donation-camp-client.vercel.app/" target="_blank" rel="noopener noreferrer"><i class="fab fa-chrome text-warning"></i></a>
                                <a className="btn me-3 btn-dark fw-bold" href="https://github.com/saifmaamun/donation-camp-client" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-alt  text-warning"></i></a>
                                <a className="btn me-3 btn-dark fw-bold" href="https://github.com/saifmaamun/donation-nextJS" target="_blank" rel="noopener noreferrer"><i class="fab fa-github text-warning"></i></a>
                            </div>
                        </ul>

                    </Col>

                    <Col md={4} sm={6} XS={12}>
                        <img className="w-100" src={donate} alt="" srcset="" />
                    </Col>
                    {/* Donation Camp */}

                    {/* Game Space*/}

                    <Col md={4} sm={6} XS={12}>
                        <img className="w-100" src={game} alt="" srcset="" />
                    </Col>
                    <Col className="bg-warning my-auto p-3 rounded" md={8} sm={6} XS={12}>
                        <h3>Game Space</h3>
                        <ul>
                            <li>
                                Game Space is designed to provide a user-friendly interface for booking sports facilities.
                            </li>
                            <li>
                                User registration and authentication
                            </li>
                            <li>
                                Facility booking with available time slots

                            </li>
                            <li>
                                Viewing schedules for facilities

                            </li>
                            <li>
                                Managing user profiles and booking history

                            </li>
                            <li>

                                Search functionality to filter facilities by name
                            </li>
                            <li>
                                Real time update on every change
                            </li>
                            <li>
                                Custom maintains every state changed by user.
                            </li>

                            <li>
                                Interactive UX/UI
                            </li>

                            <div className="pt-3">
                                <a className="btn me-3 btn-dark fw-bold" href="https://game-space-ten.vercel.app/" target="_blank" rel="noopener noreferrer"><i class="fab fa-chrome text-warning"></i></a>
                                <a className="btn me-3 btn-dark fw-bold" href="https://github.com/saifmaamun/game-space" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-alt  text-warning"></i></a>
                                <a className="btn me-3 btn-dark fw-bold" href="https://github.com/saifmaamun/gameplan" target="_blank" rel="noopener noreferrer"><i class="fab fa-github text-warning"></i></a>
                            </div>
                        </ul>

                    </Col>
                    {/* Game Space */}

                    {/* Sweet Tooth */}

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
                    {/* Sweet Tooth */}
                </Row>
            </Container>
        </Container>
    );
};

export default MyProjects;