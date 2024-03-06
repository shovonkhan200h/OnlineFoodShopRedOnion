import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo2.png';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';






const Header = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];



    return (

        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <Link to='/'>
                        <img
                            src={logo}
                            alt=''
                            height='50px'
                        />
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto"> {/* 'ms-auto' class aligns items to the right */}
                       <Nav.Link href='/checkout'>Cart {cart.length}</Nav.Link>
                        <Nav.Link>Login</Nav.Link>
                        <Button>Sing Up</Button>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;
