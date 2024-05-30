import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import donate from '../../images/donation camp.png'
import power from '../../images/powervision.png';
import tour from '../../images/rsz_tour.png';
import tooth from '../../images/rsz_tooth.png';

const MyProjects = () => {
    return (
        <Container fluid id='myprojects' className="bg-dark py-5">
            <Container>
                <h1 className="text-light fw-bold my-2 py-2">MY PROJECTS</h1>
                <Row>
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
                    <Col md={4} sm={6} XS={12}>
                        <img className="w-100" src={power} alt="" srcset="" />
                    </Col>
                    <Col className="bg-warning my-auto p-3 rounded" md={8} sm={6} XS={12}>
                        <h3>Power Vision</h3>
                        <ul>
                            <li>
                                Fully build using Redux.
                            </li>
                            <li>
                                Custom Login Signup.
                            </li>
                            <li>
                                User can see all products as well as just one by clicking on them
                            </li>
                            <li>
                                Can edit or add new product if logged in
                            </li>
                            <li>
                                Can sell products from details page.
                            </li>
                            <li>
                                Real time update on every change
                            </li>
                            <li>
                                Custom maintains every state changed by user.
                            </li>
                            <li>
                                Updated filtering functions
                            </li>
                            <li>
                                Updated updating products
                            </li>
                            <li>
                                Interactive UX/UI
                            </li>

                            <div className="pt-3">
                                <a className="btn me-3 btn-dark fw-bold" href="https://power-vision-live.vercel.app/" target="_blank" rel="noopener noreferrer"><i class="fab fa-chrome text-warning"></i></a>
                                <a className="btn me-3 btn-dark fw-bold" href="https://github.com/saifmaamun/redux-frontend" target="_blank" rel="noopener noreferrer"><i class="fab fa-github-alt  text-warning"></i></a>
                                <a className="btn me-3 btn-dark fw-bold" href="https://github.com/saifmaamun/redux-backend" target="_blank" rel="noopener noreferrer"><i class="fab fa-github text-warning"></i></a>
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