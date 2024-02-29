import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {products} from './../Data/Data'
import { Container,Col,Row, Button } from 'react-bootstrap';
import SingleProduct from '../Product/SingleProduct';


const SearchResult = () => {
    const {search} = useParams()
    const SearchResult = products.filter(food => food.name.toLowerCase().includes(search.toLowerCase()));
    const [isHover, setHover] = useState(-1)
    const handleMouseEnter = (index) => {
        setHover(index)
    }

    const handleMouseLeave = () => {
        setHover(-1)
    }

    return (
        <Container className=' d-flex flex-column align-items-center justify-content-center text-center'>
            <h2>Serach Results</h2>
            <hr />
           <Row className='mt-5'>
                {
                    SearchResult.slice(0, 6).map((item, index) =>
                        <Col style={{ cursor: 'pointer', marginBottom:'20px',boxShadow: isHover === index ? '0 5px 13px 0px rgb(210, 210, 210)' : '' }}
                            className='p-5'
                            xl={4} lg={4} md={6} sm={12} 
                            key={item.id}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            
                        >
                            
                            <SingleProduct product={item}></SingleProduct>
                            

                        </Col>)
                }
                
            </Row>

            <Button className='mb-5 d-flex aling-items-center justify-content-center' style={{width:'500px'}}>See All Food</Button>
        </Container>
    );
};

export default SearchResult;