import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import logo from '../../images/logo2.png'


const Login = () => {
    return (
        <Container >

            <Row className='d-flex align-items-center flex-column'>
                <Col className='d-flex align-items-center flex-column'>
                    <img src={logo} alt='' width='400px' className='mb-5 mt-5' />
                    <p>Welcome Back</p>
                </Col>

                <Col className='mt-5'>
                    <form className='form-group d-flex flex-column fromCn align-items-center'>
                        <input placeholder='Email' className='form-control mb-2'></input>
                        <input placeholder='Password' className='form-control mb-2'></input>
                        <Button>Sing In</Button>
                        <p className='mt-3'>Or</p>
                        <Button className='mb-4'>Sing In with Google</Button>
                        <Button style={{background:'transparent',color:'black'}} className='mb-5'>Create New Account</Button>
                    </form>
                </Col>

            </Row>

        </Container>

    );
};

export default Login;