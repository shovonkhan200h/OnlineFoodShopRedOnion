import React from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import logo from '../../images/logo2.png'
import loginWithGoogle from '../Utility/loginManager';
import backGroundImage from '../../images/bannerbackground.png';
import './Login.css'


const Login = () => {

    const containStyle = {
        backgroundImage: `url(${backGroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no=repeat',
        width: 'auto',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        postion: 'relative',
        objectFit: 'contain'
    };

    return (
        <Container fluid style={containStyle}>
            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                        <Image src={logo} width='400px' />
                    </Col>

                    <Col lg='12' className='mt-5 d-flex align-items-center justify-content-center'>
                        <Form.Group>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Email"
                                className='mb-2'
                            />

                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"

                            />

                            <div className="d-grid gap-2 mt-2 btnss">
                                <Button variant="primary" onClick={loginWithGoogle}>
                                    Sing In
                                </Button>
                                <p className='text-center'>OR</p>
                                <Button variant="secondary" >
                                    Sing In with Google
                                </Button>
                                <Button variant="secondary">
                                    Create a New Account
                                </Button>
                            </div>

                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </Container>


    );
};

export default Login;