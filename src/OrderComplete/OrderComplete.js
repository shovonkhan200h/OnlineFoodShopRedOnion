import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Map from './Map';





const OrderComplete = () => {
    const getDataFromLc = JSON.parse(localStorage.getItem('userInfo'))
    
    
    return (
        <Container>
            <Row>
                <Col>
                 <Map></Map>
                </Col>

                <Col className='d-flex flex-column justify-content-center align-items-center'>
                    <img src='https://i.imgur.com/OuZU71p.png' alt='' width='200px'></img>
                    <h2>Your Location {getDataFromLc.postCode}</h2>
                    <h2>Shop Location {}</h2>

                    <h2>09:00</h2>
                    <p>Estimated Delivery</p>

                    <div>
                        <div>
                            <img src='' alt=''></img>
                            <p>Rider Name:</p>
                        </div>

                        <Button>Contact</Button>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default OrderComplete;