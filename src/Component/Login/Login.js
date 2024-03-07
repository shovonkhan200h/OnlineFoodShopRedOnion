import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../images/logo2.png'

const Login = () => {
    return (
        <Container >
            
            <Col className='d-flex align-items-center flex-column'>
                <Col className='d-flex align-items-center flex-column'>
                <img src={logo} alt='' width='400px' className='img-fluid mb-5 mt-5'/>
                <p>Welcome Back</p>
                </Col>
                
                <Col className='mt-5'>
                <form>
                    <input placeholder='Email'></input>
                    <input placeholder='Password'></input>
                    <button>Sing In</button>
                    <p>Or</p>
                    <button>Sing In with Google</button>
                </form>
                </Col>
                
            </Col>
        
        </Container>
        
    );
};

export default Login;