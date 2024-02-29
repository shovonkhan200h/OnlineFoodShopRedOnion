import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SingleProduct = ({ product }) => {
    const { name, title, price, img, id } = product;
    return (
        <Container className=' d-flex flex-column align-items-center justify-content-center text-center'>
            <Link to={'/food/' + id} style={{ textDecoration: 'none', color: 'black' }}>

                
                <img src={img} alt={name} width='250px' className='image-fluid' />
                <h2>{name}</h2>
                <p>{title}</p>
                <p>$ {price}</p>



            </Link>
        </Container>
    );
};

export default SingleProduct;
