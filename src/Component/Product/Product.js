import React, { useEffect, useState } from 'react';
import { products } from '../Data/Data';
import Container from 'react-bootstrap/esm/Container';
import SingleProduct from './SingleProduct';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './product.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = () => {
    const [product, setProduct] = useState([])
    const [filterProduct, setFilterProduct] = useState([])
    const [activeCat, setActiveCat] = useState('')
    const [isHover, setHover] = useState(-1)

    useEffect(() => {
        setProduct(products)
        setFilterProduct(products)
    }, [])


    const filterProducts = (category) => {
        setActiveCat(category)
        const filterd = products.filter(item => item.category === category)
        setFilterProduct(filterd)

    }

    const handleMouseEnter = (index) => {
        setHover(index)
    }

    const handleMouseLeave = () => {
        setHover(-1)
    }

    

    return (
        <Container className='my-5 text-center'>
            <div className='mt-5 btnGp'>
                <button onClick={() => filterProducts('breakfast')} className={activeCat === 'breakfast' ? 'active' : ''}>breakfast</button>
                <button onClick={() => filterProducts('lunch')} className={activeCat === 'lunch' ? 'active' : ''}>Lunch</button>
                <button onClick={() => filterProducts('dinner')} className={activeCat === 'dinner' ? 'active' : ''}>Dinner</button>
            </div>
            <Row className='mt-5'>
                {
                    filterProduct.slice(0, 6).map((item, index) =>
                        <Col style={{ cursor: 'pointer', boxShadow: isHover === index ? '0 5px 13px 0px rgb(210, 210, 210)' : '' }}
                            lg={4} md={6} className='p-5'
                            key={item.id}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            
                            <SingleProduct product={item}></SingleProduct>
                            

                        </Col>)
                }
            </Row>

            <Button className='mt-3'>Checkout Your Food</Button>

        </Container>
    );
};

export default Product;