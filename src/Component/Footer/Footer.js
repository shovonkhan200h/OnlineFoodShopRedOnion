import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';



const Footer = () => {
    return (
        <Container fluid className='bg-dark text-white' style={{ height: 'auto', width:'100%' }}>
            <Container>
                <Row>
                    <Col className='mt-5 mb-5' lg={6} md={6}>
                        <img src='https://i.imgur.com/yjIXdog.png' alt='' width='300px' />
                    </Col>

                    <Col className='mt-5 mb-5' lg={6} md={6} sm={12}>
                        <Row>
                            <Col lg={6} md={6}>
                                <ul className='list-unstyled'>
                                    <li>About Food Online</li>
                                    <li>Read Our Blog</li>
                                    <li>Sing up to deliver</li>
                                    <li>add your restuarent</li>
                                </ul>
                            </Col>

                            <Col lg={6} md={6}>
                                <ul className='list-unstyled'>
                                    <li>About Food Online</li>
                                    <li>Read Our Blog</li>
                                    <li>Sing up to deliver</li>
                                    <li>add your restuarent</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>

                    <Col>
                        <Row>
                            <Col><small>Copyright @2024 </small></Col>
                            
                            <Col className='text-center'>
                                <ul className='list-inline'>
                                    <li className='list-inline-item me-5'>Privacy Policy</li>
                                    <li className='list-inline-item me-5'>Terms of Use</li>
                                    <li className='list-inline-item'>Pricing</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>


            </Container>


        </Container>
    );
};

export default Footer;