import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../Utility/configaration';


export const initializeAppWork =()=>{
    initializeApp(firebaseConfig);
}


export const googleSignIn = async() => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    return await signInWithPopup(auth, provider)
       .then((result) => {
            const { displayName, email } = result.user;
            const isSignedIn = {
                isSigned: true,
                name: displayName,
                email: email,
                success: true
            };
            return isSignedIn;
        }).catch((error) => {
            // Handle sign-in error
        });
}

export const signOutUser = async() => {
    const auth = getAuth();
    return await signOut(auth).then(() => {
        const users = {
            isSigned: false,
            name: ``,
            email: ``,
            password: ''
        };
        return users;
    }).catch((error) => {
        // Handle sign-out error
    });
}

export const createUser =async(email,password)=>{
    const auth = getAuth();
           return await createUserWithEmailAndPassword(auth,email, password)
                .then(res => {
                    const newUser = res.user;
                    newUser.error = ''
                    newUser.success = true
                    return newUser
                })
                .catch((error) => {
                    const userInfo = {}
                    userInfo.error = error.message
                    userInfo.success = false
                    return userInfo;
                });
}

export const signInUser=async(email,password)=>{
    const auth = getAuth();
          return await signInWithEmailAndPassword(auth, email,password)
                .then((userCredential) => {
                    const newUser = userCredential.user;
                    newUser.error = ''
                    newUser.success = true
                    return newUser;
                })
                .catch((error) => {
                    const userInfo = {}
                    userInfo.error = error.message
                    userInfo.success = false
                    return userInfo;
                });
}