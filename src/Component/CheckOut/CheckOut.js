import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { Link, json} from 'react-router-dom';

const CheckOut = () => {
    const itemFromCart = JSON.parse(localStorage.getItem('cart')) || [];
    const [cart, setCart] = useState(itemFromCart);

    // Cart Section 
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const handleCountChange = (itemId, changeType) => {
        const updatedCart = cart.map(item => {
            if (item.product.id === itemId) {
                if (changeType === 'increase') {
                    return { ...item, quantity: item.quantity + 1 };
                } else if (changeType === 'decrease' && item.quantity > 0) {
                    return { ...item, quantity: item.quantity - 1 };
                }
            }
            return item;
        });
        setCart(updatedCart);
    };

    // CART CALCULATION 
    const DELIVERY_FEE_LOW = 0;
    const DELIVERY_THRESHOLD = 5.99;
    const subTotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    const tax = subTotal * 0.1;
    const totalbefore = subTotal + tax;
    const deliveryFee = totalbefore < DELIVERY_THRESHOLD ? DELIVERY_FEE_LOW : DELIVERY_THRESHOLD;
    const total = totalbefore + deliveryFee;


    // FROM HANDLE 
    const [formData, setFromData] = useState(()=>{
        const userInfoFromLocal = JSON.parse(localStorage.getItem('userInfo'))
        return userInfoFromLocal || {
            fullName: '',
            road: '',
            postCode: '',
            town: '',
            country: '', 
            mobile: ''
        }
    });

    const handleOnChange = e => {
        const { name, value } = e.target;
        setFromData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const [delivaryDetailsAdded, setDetailAdded] = useState(false)


    const handleSubmit = e => {
        localStorage.setItem('userInfo', JSON.stringify(formData))
        setDetailAdded(true)
        e.preventDefault(); 
    };


    // MODAL SECTION 
    const [showModal, setShowModal] = useState(false);
    const handleCheckout = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Container className='my-5'>
            <Row>
                <Col>
                    <p>Edit Delivery Details</p>
                    <hr />

                    <form className='form-group' onSubmit={handleSubmit}>
                        <input className='form-control mb-2' name='fullName' value={formData.fullName} placeholder='Full Name' onChange={handleOnChange}></input>
                        <input className='form-control mb-2' name='road' value={formData.road} placeholder='Road' onChange={handleOnChange}></input>
                        <input className='form-control mb-2' name='postCode' value={formData.postCode} placeholder='Post Code' onChange={handleOnChange}></input>
                        <input className='form-control mb-2' name='town' value={formData.town} placeholder='Town' onChange={handleOnChange}></input>
                        <input className='form-control mb-2' name='country' value={formData.country} placeholder='Country' onChange={handleOnChange}></input>
                        <input className='form-control mb-2' name='mobile' value={formData.mobile} placeholder='Mobile' onChange={handleOnChange}></input> {/* removed the extra space from the field name */}
                        <Button type='submit'>Add Delivery Details</Button>
                    </form>
                </Col>

                <Col>
                    {cart.map(item => (
                        <div style={{ boxShadow: '0 5px 13px 0px rgb(210, 210, 210)', padding: '20px', marginBottom:'20px'  }}>
                            <div className='d-flex align-items-center justify-content-evenly'>
                                <img src={item.product.img} width='150px' alt='' />
                                <div>
                                    <h4>{item.product.name}</h4>
                                    <h4>{item.product.price}</h4>
                                </div>
                                <div>
                                    <button onClick={() => handleCountChange(item.product.id, 'increase')}>+</button>
                                    {item.quantity}
                                    <button onClick={() => handleCountChange(item.product.id, 'decrease')}>-</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <Col className='mt-5' style={{ boxShadow: '0 5px 13px 0px rgb(210, 210, 210)', padding: '20px',}}>
                        <h2>Price: {subTotal.toFixed(2)}</h2>
                        <h2>Tax: {tax.toFixed(2)}</h2>
                        <p>Delivery Fee: {deliveryFee}</p>
                        <p>Total: {total.toFixed(2)}</p>
                        <Button disabled={!delivaryDetailsAdded} onClick={handleCheckout}>Checkout</Button>
                    </Col>
                </Col>
            </Row>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Checkout</Modal.Title>
                </Modal.Header>
                <Modal.Body className='d-flex justify-content-evenly'>
                        <div className='list'>
                        <li class="list-group-item">Name: {formData.fullName}</li>
                        <li class="list-group-item">Mobile: {formData.mobile}</li>
                        <li class="list-group-item">postCode: {formData.postCode}</li>
                        </div>
                        
                        <div>
                        <h>Total Bill {total.toFixed(2)}</h>
                        </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Edit
                    </Button>

                    <Link to='/OrderComplete'><Button>Confrim</Button></Link>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default CheckOut;
