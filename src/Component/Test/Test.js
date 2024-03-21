// import React, { useState } from 'react';
// import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     // Your Firebase configuration
// };

// const app = initializeApp(firebaseConfig);

// const Test = () => {
//     const auth = getAuth();
//     const provider = new GoogleAuthProvider();
//     const [user, setUser] = useState(null);
//     const [formData, setFormData] = useState({ email: '', password: '' });

//     const handleOnChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({ ...prevState, [name]: value }));
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(formData);
//     }

//     const googleSignIn = () => {
//         signInWithPopup(auth, provider)
//             .then((result) => {
//                 const user = result.user;
//                 setUser(user);
//             }).catch((error) => {
//                 console.error(error);
//             });
//     }

//     const handleSignOut = () => {
//         signOut(auth).then(() => {
//             setUser(null);
//         }).catch((error) => {
//             console.error(error);
//         });
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}> 
//                 <input placeholder='email' name='email' type='email' onChange={handleOnChange} value={formData.email}></input>
//                 <input placeholder='password' name='password' type='password' onChange={handleOnChange} value={formData.password}></input>
//                 <button type='submit'>Login</button>
//             </form>

//             {user && <p>{user.displayName}</p>}

//             <button onClick={googleSignIn}>Sign In with Google</button>
//             <button onClick={handleSignOut}>Sign Out</button>
//         </div>
//     );
// };

// export default Test;
