import React, { useContext, useState } from 'react';
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
    const [successMessage, setSuccessMessage] = useState('');
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
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user);
                const { displayName, photoURL, email } = user;
                const isSingedIn = {
                    isSingedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(isSingedIn)
                setLogedInUser(isSingedIn)
                navigate('/');
                setSuccessMessage(`Sing in succesful`)

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);

            });
    }

    const handleOnSubmit = (e) => {
        const formData = new FormData(e.target); // Get form data
        const email = formData.get('email'); // Get email value
        const password = formData.get('password');

        if (newUser) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    const isSingedIn = {
                        isSingedIn: true,
                        name: email,
                        password: password
                    }
                    setLogedInUser({ ...user, isSingedIn: true })
                    setSuccessMessage(`Account Created succesfully`)
                    navigate('/');
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    const isSingedIn = {
                        isSingedIn: true,
                        name: email,
                        password: password
                    }
                    setLogedInUser({ ...user, isSingedIn: true })
                    navigate('/');
                    setSuccessMessage(`Login succesfully`)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }

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
                                {
                                    successMessage
                                }
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

            </Container>
        </Container>
    );
};

export default Login;