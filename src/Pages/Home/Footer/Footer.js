import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid className="bg-dark py-5">

            <Container>
                <Row>
                    <Col className="text-center" xs={3}>
                        <a className="btn btn-warning" href="https://www.facebook.com/maamunsaif/" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-facebook-f fa-2x"></i>
                        </a>
                    </Col>
                    <Col className="text-center" xs={3}>
                        <a className="btn btn-warning" href="https://github.com/saifmaamun" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-github fa-2x"></i>
                        </a>
                    </Col>
                    <Col className="text-center" xs={3}>
                        <a className="btn btn-warning" href="https://www.linkedin.com/in/saif-maamun-720a33216/" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-linkedin fa-2x"></i>
                        </a>
                    </Col>
                    <Col className="text-center" xs={3}>
                        <a className="btn btn-warning" href="https://twitter.com/imsaifmaamun" target="_blank" rel="noopener noreferrer">
                            <i class="fab fa-twitter-square fa-2x"></i>
                        </a>
                    </Col>
                </Row>
            </Container>
            <p className="text-center text-light pt-5">Copyright © 2020, All Rights Reserved</p>
        </Container>
    );
};

export default Footer;