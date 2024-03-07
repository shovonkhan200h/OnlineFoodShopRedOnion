import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import logo from '../../images/logo2.png'
import loginWithGoogle from '../Utility/loginManager';


const Login = () => {
    return (
        <Container >

            
                <Row className='d-flex align-items-center flex-column text-center'>
                    <Col>
                    <img src={logo} alt='' width='400px' className='mb-5 mt-5 img-fluid' />
                    <p>Welcome Back</p>
                    </Col>
                    
                    <Col>
                    <form className='form-group'>
                        <input placeholder='Email' className='form-control mb-2'></input>
                        <input placeholder='Password' className='form-control mb-2'></input>
                        
                        <div className="d-grid">
                            <Button variant="primary" size="md" onClick={loginWithGoogle} className='mb-2'>
                                Sing In
                            </Button>
                            <p>Or</p>
                            <Button variant="primary" size="md" className='mb-2'>
                                Sing In
                            </Button>

                            <Button variant="primary" size="md">
                                Sing In
                            </Button>
                        </div>
                    </form>
                    </Col>
                   
                </Row>
            

        </Container>

    );
};

export default Login;