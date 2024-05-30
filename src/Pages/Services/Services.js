import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import shape from '../../images/hexagon-geometrical-shape-outline-svgrepo-com.svg'

const Services = () => {
    return (
        <Container fluid className="bg-dark py-3">
            <h1 className="text-light container fw-bold">MY SERVICES</h1>
            <Container className="py-2 my-5">
                <Row>
                    <Col xs={12} sm={3}>
                        <div className="text-center text-warning">
                            <i class="fa-sharp fa-solid fa-gauge-high fa-5x pb-3"></i>
                            <h5>Fast load times and lag free interaction, my highest priority.</h5>
                        </div>
                    </Col>
                    <Col xs={12} sm={3}>
                        <div className="text-center text-warning">
                            <i class="fa fa-mobile-alt fa-5x pb-3"></i>
                            <h5>My layouts will work on any device, big or small.</h5>
                        </div>
                    </Col>
                    <Col xs={12} sm={3}>
                        <div className="text-center text-warning">
                            <i class="fa fa-lightbulb fa-5x pb-3"></i>
                            <h5>Strong preference for easy to use, intuitive UX/UI.</h5>
                        </div>
                    </Col>
                    <Col xs={12} sm={3}>
                        <div className="text-center text-warning">
                            <i class="fa fa-rocket fa-5x pb-3"></i>
                            <h5>Websites don't have to be static, I love making pages come to life.</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Services;