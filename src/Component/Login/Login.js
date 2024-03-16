import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import logo from '../../images/logo2.png'
import backGroundImage from '../../images/bannerbackground.png';
import './Login.css'
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../Utility/configaration';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { cartContext } from '../../App';
initializeApp(firebaseConfig);

const containStyle = {
    backgroundImage: `url(${backGroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no=repeat',
    width: 'auto',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    postion: 'relative',
    objectFit: 'contain'
};

const provider = new GoogleAuthProvider();

const Login = () => {
    const [logedIn, setLogedInUser] = useContext(cartContext)
    const [newUser, setNewUser] = useState(true)
    const [user, setUser] = useState({
        isSingedIn: false,
        name: '',
        email: '',
        photo: ''
    })


    const LoginWithGoogle = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const { displayName, photoURL, email } = result.user;
                const sinedInUser = {
                    isSingedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(sinedInUser)
                setLogedInUser(sinedInUser)
            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }



    const handeBlur = (e) => {
        let formValid = true;
        if (e.target.name === 'email') {
            formValid = /^\S+@\S+\.\S+$/.test(e.target.value);
        }
        if (formValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const auth = getAuth();

        if (newUser && user.name && user.email && user.password) {
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password, user.name)
              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
              });
        } else if (!newUser && user.email && user.password) {
            // Sign in existing user
            signInWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {
                    // Handle successful sign-in
                    const signedInUser = userCredential.user;
                    console.log("User signed in:", signedInUser);
                    // Update state or perform any necessary actions
                })
                .catch((error) => {
                    // Handle sign-in errors
                    console.error("Error signing in:", error);
                });
        } else {
            // Handle case where required fields are missing
            console.error("Missing required fields for authentication");
        }
    };



    const singOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            const isSingOut = {
                isSingedIn: false,
                name: '',
                email: '',
                photo: ''
            }
            setUser(isSingOut)
            setLogedInUser(isSingOut)
        }).catch((error) => {

        });
    }

    return (
        <Container fluid style={containStyle}>
            <Container>
                {
                    newUser ? (<Row>
                        <Col lg='12' className='text-center'>
                            <Image src={logo} width='400px' />
                        </Col>

                        <Col lg='12' className='mt-5 d-flex align-items-center justify-content-center'>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Control
                                        required
                                        type="text"
                                        name='email'
                                        placeholder="Email"
                                        className='mb-2'
                                        onBlur={handeBlur}
                                    />

                                    <Form.Control
                                        required
                                        name='password'
                                        type="password"
                                        placeholder="Password"
                                        onBlur={handeBlur}

                                    />

                                    <div className="d-grid gap-2 mt-2 btnss">
                                        <Button variant="primary" type='submit'>
                                            Sing In
                                        </Button>
                                        <p className='text-center'>OR</p>

                                        <Button onClick={LoginWithGoogle}>Sing with Google</Button>
                                        <Button onClick={() => setNewUser(false)}>Create New User</Button>
                                    </div>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>)
                        :
                        (<Row>
                            <Col lg='12' className='text-center'>
                                <Image src={logo} width='400px' />
                            </Col>

                            <Col lg='12' className='mt-5 d-flex align-items-center justify-content-center'>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group>

                                        <Form.Control
                                            required
                                            name='name'
                                            type="text"
                                            placeholder="Name"
                                            onBlur={handeBlur}
                                            className='mb-2'

                                        />

                                        <Form.Control
                                            required
                                            type="text"
                                            name='email'
                                            placeholder="Email"
                                            className='mb-2'
                                            onBlur={handeBlur}
                                        />

                                        <Form.Control
                                            required
                                            name='password'
                                            type="password"
                                            placeholder="Password"
                                            onBlur={handeBlur}

                                        />

                                        <div className="d-grid gap-2 mt-2 btnss">
                                            <Button variant="primary" type='submit'>
                                                Sing Up
                                            </Button>
                                            <Button onClick={() => setNewUser(true)}>Already Have Account</Button>
                                        </div>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>)
                }
            </Container>
        </Container>


    );
};

export default Login;