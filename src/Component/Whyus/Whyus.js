import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { postData } from '../Data/Data';

const Whyus = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        setPost(postData)
    }, [])

    return (
        <Container className='mt-5 mb-5 d-flex aling-items-center justify-content-center flex-column'>
            <h2 className=''>Why you choose us</h2>
            <hr/>
            <Row className='d-flex aling-items-center text-center justify-content-center'>
                {
                    post.map((post,index) =>
                        <Col lg={4} md={6} key={index} className='d-flex aling-items-center justify-content-center p-5'>
                            <Card style={{ width: '18rem',border:'none' }}>
                                <Card.Img variant="top" src={post.img} />
                                <Card.Body>
                                    <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>
                                        {post.desc}
                                    </Card.Text>
                                    <Button variant="primary">See More</Button>
                                </Card.Body>
                            </Card>
                        </Col>)
                }
            </Row>
        </Container>
    );
};

export default Whyus;