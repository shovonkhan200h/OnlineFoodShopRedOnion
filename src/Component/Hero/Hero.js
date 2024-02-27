import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import backGroundImage from '../../images/bannerbackground.png';
import { Col,Row } from 'react-bootstrap';
import './Hero.css'


const Hero = () => {
    const containStyle = {
        backgroundImage: `url(${backGroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat:'no=repeat',
        width:'100%',
        height: '80vh',
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        postion:'relative',
        objectFit:'contain'
    };

    return (
        <Container fluid style={containStyle} className='text-center'>
            <Container>
                <h1>Best Food waiting for your belly</h1>

                <Col className='d-flex aling-items-center justify-content-center position-relative box'>
                    <input className='form-control border'></input>
                    <button>Search</button>
                </Col>
            </Container>
        </Container>
    );
};

export default Hero;
