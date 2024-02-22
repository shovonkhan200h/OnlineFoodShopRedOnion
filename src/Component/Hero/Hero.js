import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import backGroundImage from '../../images/bannerbackground.png';
import { Col } from 'react-bootstrap';
import './hero.css'

const Hero = () => {
    const containStyle = {
        backgroundImage: `url(${backGroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80vh',
        display: 'flex',
        alignItems: 'center', // Corrected spelling here
        justifyContent: 'center', // Optional: horizontal centering
        postion:'relative'
    };

    return (
        <Container fluid style={containStyle} className='text-center'>
            <Container>
                <h1>Best Food waiting for your belly</h1>

                <Col className='search-box'>
                    <input className='form-control'></input>
                    <button className='search-btn'>Search</button>
                </Col>
            </Container>
        </Container>
    );
};

export default Hero;
