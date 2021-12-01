import React from 'react';
import { Container } from 'react-bootstrap';

const ContactMe = () => {
    return (
        <Container fluid id="contact" className="bg-dark pt-5">
            <Container className="text-center ">

                <a href="mailto:sadifmamun@gmail.com" class="text-decoration-none text-warning fw-bold fs-3">Contact With Me</a>
            </Container>
            <Container></Container>
        </Container>
    );
};

export default ContactMe;