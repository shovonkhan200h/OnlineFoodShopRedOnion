import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import backGroundImage from '../../images/bannerbackground.png';
import { Col } from 'react-bootstrap';


const Hero = () => {
    const containStyle = {
        backgroundImage: `url(${backGroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat:'no=repeat',
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

                <Col className='d-flex aling-items-center justify-content-center'>
                    <input className='form-control border' style={{width:'50%', borderRadius:'20px'}} ></input>
                    <button className='border border-0'>Search</button>
                </Col>
            </Container>
        </Container>
    );
};

export default Hero;
