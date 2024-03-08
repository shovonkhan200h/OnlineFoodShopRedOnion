import { initializeApp } from 'firebase/app';
import firebaseConfig from './configaration';
import firebase from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from 'react';




const provider = new GoogleAuthProvider();
initializeApp(firebaseConfig);


const LoginWithGoogle =()=>{ 
    const [demo,setDemo]= useState({
      isSingedIn:false,
      name:'',
      email:'',
      photo:''
    })
    
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const {displayName, photoURL, email} = result.user;
        const sinedInUser ={
            isSingedIn:true,
            name:displayName,
            email:email,
            photo:photoURL
        }
      }).catch((error) => {
       
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
}

export default LoginWithGoogle;