import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import logo from '../../images/logo2.png'
import backGroundImage from '../../images/bannerbackground.png';
import './Login.css'
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../Utility/configaration';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { cartContext } from '../../App';
const provider = new GoogleAuthProvider();
initializeApp(firebaseConfig);




const Login = () => {
    const [logedIn, setLogedInUser] = useContext(cartContext)
    const [demo, setDemo] = useState({
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
                setDemo(sinedInUser)
                setLogedInUser(sinedInUser,true)
            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

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

    // const userSingIn = () => {
    //     const auth = getAuth();
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             // Signed in 
    //             const user = userCredential.user;
    //             // ...
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //         });
    // }



    return (
        <Container fluid style={containStyle}>
            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                        <Image src={logo} width='400px' />
                    </Col>

                    <Col lg='12' className='mt-5 d-flex align-items-center justify-content-center'>
                        <Form.Group>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Email"
                                className='mb-2'
                            />

                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"

                            />

                            <div className="d-grid gap-2 mt-2 btnss">
                                <Button variant="primary" >
                                    Sing In
                                </Button>
                                <p className='text-center'>OR</p>
                                <Button variant="secondary" onClick={LoginWithGoogle}>
                                    Sing In with Google
                                </Button>
                                <Button variant="secondary">
                                    Create a New Account
                                </Button>
                            </div>

                        </Form.Group>
                    </Col>
                </Row>
            </Container>
        </Container>


    );
};

export default Login;