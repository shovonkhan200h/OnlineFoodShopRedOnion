import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo2.png';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { cartContext } from '../../App';
import { getAuth, signOut } from "firebase/auth";


const Header = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const [logedIn,setLoggedInUser] = useContext(cartContext)
    

    const handleSingOut = () => {
        const auth = getAuth();
            signOut(auth).then(() => {
                setLoggedInUser(false); // Update the context after sign-out
            }).catch((error) => {
                console.error("Sign out error:", error);
            })
    }

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
                        <Nav.Link as={Link} to='/Login'>
                            {
                                logedIn.isSingedIn ? (<div className='d-flex gap-2'>
                                    <div><img src={logedIn.photo} alt='' width='20px' className='rounded' /></div>
                                    <div><p>{logedIn.name}</p></div>
                                </div>) : 'Login'
                            }
                        </Nav.Link>

                        {
                            logedIn.isSingedIn ? (<Button onClick={handleSingOut}>Sing Out</Button>) : (<Button to='/Login'>Sing Up</Button>)
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Header;
