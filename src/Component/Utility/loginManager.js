import { initializeApp } from 'firebase/app';
import firebaseConfig from './configaration';
import firebase from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
initializeApp(firebaseConfig);


const loginWithGoogle =()=>{
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      }).catch((error) => {
       
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
}

export default loginWithGoogle;