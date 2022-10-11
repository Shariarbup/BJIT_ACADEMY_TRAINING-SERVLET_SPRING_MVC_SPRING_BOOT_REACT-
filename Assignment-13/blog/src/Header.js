import React from 'react'
import { Navbar, Container, Nav, Brand, Link } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">BD Life Hackers</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Blog</Nav.Link>
                        <Nav.Link href="#pricing">Contract</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header