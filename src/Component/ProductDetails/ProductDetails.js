
import { useParams } from 'react-router-dom';
import { products } from '../Data/Data';
import { Container, Col, Row, Button } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import { cartContext } from '../../App';
import './productdetails.css'




const ProductDetails = () => {
    const { id } = useParams()
    const pd = products.find(pd => pd.id == id)
    console.log(pd);
    const [count, setCount] = useState(1)
    const [cart, setCart] = useContext(cartContext)

    const handleCountChange = (changeType) => {
        if (changeType === 'increase') {
            setCount(count + 1);
        } else if (changeType === 'decrease' && count > 1) {
            setCount(count - 1);
        }
    }

    const addToCart = (product) => {
        const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
        const productInCart = cart.find((item) => item.product && item.product.id === product.id);

        if (productInCart) {
            const updateCart = cartFromLocalStorage.map((item) =>
                item.product.id === product.id ? { ...item, quantity: item.quantity + count } : item
            );
            const others = cart.filter(item => item.product.id !== product.id);
            const newCart = [...others, ...updateCart];
            setCart(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart));
        } else {
            const newCart = [...cart, { product: product, quantity: count }];
            setCart(newCart);
            localStorage.setItem('cart', JSON.stringify(newCart));
        }
    };


    return (
        <Container className='my-5'>
            <Row>

                <Col className='d-flex flex-column align-items-center'>
                    <div>
                    <h2 className='fs-1'>{pd.name}</h2>
                        <p className='mt-5'>{pd.title}</p>
                        <p>{pd.desc}</p>
                   
                    </div>
                        



                    <div className='d-flex mt-5'>
                        <h1 style={{fontSize:'2rem'}}>${pd.price}</h1>
                        <div className='d-flex align-items-center ms-5 buttonGroup'  style={{fontSize:'1rem'}}>
                            <button onClick={() => handleCountChange('increase')}>+</button>
                            <h5>{count}</h5>
                            <button onClick={() => handleCountChange('decrease')}>-</button>
                        </div>

                    </div>


                    <Button style={{width:'400px'}} className='mt-5' onClick={() => addToCart(pd)}>Add to Cart</Button>


                </Col>

                <Col>
                    <img src={pd.img} alt='' width='500px' />
                </Col>
            </Row>


        </Container>
    );
};

export default ProductDetails;