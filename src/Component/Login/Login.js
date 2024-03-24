import React, { useContext, useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { cartContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo2.png'
import './Login.css'


const firebaseConfig = {
    apiKey: "AIzaSyBrJnSiPskqUbghw4Ch_RJJGmlcUMZP0TQ",
    authDomain: "online-shop-48542.firebaseapp.com",
    projectId: "online-shop-48542",
    storageBucket: "online-shop-48542.appspot.com",
    messagingSenderId: "545529172917",
    appId: "1:545529172917:web:33c379fb237f17b4fffffc"
};

const app = initializeApp(firebaseConfig);

const Login = () => {
    const auth = getAuth(app);
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const [logedIn, setLogedInUser] = useContext(cartContext)
    const [newUser, setNewuser] = useState(false)
    const [user, setUser] = useState({
        isSingedIn: false,
        name: '',
        email: '',
        photo: ''
    })


    
    const googleSingIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const {displayName,photoURL, email}= result.user
                const SingedInUser= {
                    isSingedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                // navigate('/');
                setUser(SingedInUser)
                setLogedInUser(SingedInUser)
                navigate('/')
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);

            });
    }

    const handleOnSubmit = (e) => {
    }

    return (
        <Container fluid className='login'>
            <Container>
                {
                    newUser ? (<Row>
                        <Col lg='12' className='text-center'>
                            <Image src={logo} width='400px' />
                        </Col>

                        <Col lg='12' className='mt-5 d-flex align-items-center justify-content-center'>
                            <Form onSubmit={handleOnSubmit}>
                                <Form.Group>
                                    <Form.Control
                                        name='email' type='email' placeholder='Email' className='mb-2'
                                    />
                                    <Form.Control
                                        name='password' type='password' placeholder='Password'
                                    />
                                    <div className="d-grid gap-2 mt-2 btnss">
                                        <Button variant="primary" type='submit'>
                                            SingUp
                                        </Button>
                                    </div>
                                </Form.Group>
                                
                            </Form>
                        </Col>

                        <Col lg='12' className='d-flex align-items-center justify-content-center'>
                            <div className="d-grid gap-2 mt-2 btnss">
                                <h2 className='text-center'>OR</h2>
                                <Button onClick={googleSingIn}>Sing with Google</Button>
                                <Button onClick={() => setNewuser(false)}>Already Have Account</Button>
                            </div>
                        </Col>

                    </Row>)

                        :

                        (<Row>
                            <Col lg='12' className='text-center'>
                                <Image src={logo} width='400px' />
                            </Col>

                            <Col lg='12' className='mt-5 d-flex align-items-center justify-content-center'>
                                <Form onSubmit={handleOnSubmit}>
                                    <Form.Group>
                                        <Form.Control
                                            name='email' type='email' placeholder='Email' className='mb-2'
                                        />
                                        <Form.Control
                                            name='password' type='password' placeholder='Password'
                                        />
                                        <div className="d-grid gap-2 mt-2 btnss">
                                            <Button variant="primary" type='submit'>
                                                Login
                                            </Button>
                                        </div>
                                    </Form.Group>
                                </Form>
                            </Col>

                            <Col lg='12' className='d-flex align-items-center justify-content-center'>
                                <div className="d-grid gap-2 mt-2 btnss">
                                    <h2 className='text-center'>OR</h2>
                                    <Button onClick={googleSingIn}>Sing with Google</Button>
                                    <Button onClick={() => setNewuser(true)}>Create New Account</Button>
                                </div>
                            </Col>
                        </Row>)
                }

                {
                    user.isSingedIn && <p>welcome {user.name}</p>
                }
            </Container>
        </Container>
    );
};

export default Login;