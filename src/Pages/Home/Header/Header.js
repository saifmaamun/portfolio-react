import React from 'react';
import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className="fw-bold fs-4 text-warning">Saif Maamun</Navbar.Brand>
                <div class="">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#aboutme">About Me</Nav.Link>
                        <Nav.Link href="#myprojects">My Projects</Nav.Link>
                        <Button className="btn btn-warning">
                            <a className="text-decoration-none text-dark fw-bold" href="https://drive.google.com/file/d/16TyxSSp_YmKQb7YsP0_vpOSdmI9x_ejg/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download Resume</a>
                        </Button>
                    </Nav>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;