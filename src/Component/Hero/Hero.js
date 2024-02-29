import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import backGroundImage from '../../images/bannerbackground.png';
import { Col } from 'react-bootstrap';
import './Hero.css'
import { Link } from 'react-router-dom';


const Hero = () => {
    const [search, setSerach] = useState('')
    const getQury = e => setSerach(e.target.value)
    console.log(search);


    const containStyle = {
        backgroundImage: `url(${backGroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no=repeat',
        width: '100%',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        postion: 'relative',
        objectFit: 'contain'
    };

    return (
        <Container fluid style={containStyle} className='text-center'>
            <Container>
                <h1>Best Food waiting for your belly</h1>

                <Col className='d-flex aling-items-center justify-content-center position-relative box'>
                    <input className='form-control border text-center' onChange={getQury} id='' type='text' placeholder='Search For the Food'></input>
                   <Link to={`/SearchResult/` + search}>
                   <button>Search</button>
                   </Link>  
                   
                </Col>
            </Container>
        </Container>
    );
};

export default Hero;
