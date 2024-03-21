import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo2.png';
import { Link } from 'react-router-dom';
import { cartContext } from '../../App';




const Header = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const [logedIn]=useContext(cartContext)
    console.log(logedIn);
    
 

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

                    <Nav className="ms-auto">
                        <Nav.Link href='/checkout'>Cart {cart.length}</Nav.Link>
                        {
                            logedIn.isSingedIn ? (<Nav.Link href='/Login'>{logedIn.name}</Nav.Link>) : <Nav.Link href='/Login'>Login</Nav.Link>
                        }
                        {
                            logedIn.isSingedIn ?(<Nav.Link href='/Login'>SingOut</Nav.Link>):<Nav.Link href='/Login'>SingUp</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;
