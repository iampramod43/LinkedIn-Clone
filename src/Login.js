import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectCountry, update } from './features/countrySlice';
import { login } from './features/userSlice';
import { auth } from './Firebase'
import './Login.css'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
      fetch('https://ipapi.co/json/').then(res => res.json()).then(
              (result) => {
                  dispatch(update({
                    country: result.country_code,
                    countryNews: "https://saurav.tech/NewsAPI/top-headlines/category/technology/" + result.country_code.toLowerCase() + ".json",
                  }));
              },
              (error) => {
                  return alert(error);
              }
              );
    }, []);
    const register = (e) => {
        if (!name) {
            return alert("Please enter your full name");
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: photoUrl,

            }).then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL,
                }));
            })
        }).catch((error) => alert(error));
    };
    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL,
            }));
        }).catch(error => alert(error));
    }
    return (
        <div className="login">
            <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" alt=""/>
            <form >
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full Name (Required if regestring)"/>
                <input value={photoUrl} onChange={e => setPhotoUrl(e.target.value)} type="text" placeholder="Profile Picture URL"/>
                <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email"/>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"/>
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not A Member?{" "}
                <span onClick={register} className="login__register" >Register Now</span>    
            </p>
        </div>
    )
}

export default Login
