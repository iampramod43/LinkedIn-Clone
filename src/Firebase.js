// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCNEhKxYgaCi0fDzh0YaY9i6cywPgtc5Tw",
    authDomain: "linkedin-clone-546b0.firebaseapp.com",
    projectId: "linkedin-clone-546b0",
    storageBucket: "linkedin-clone-546b0.appspot.com",
    messagingSenderId: "986702421834",
    appId: "1:986702421834:web:1000e920402418c9ebebb3",
    measurementId: "G-M80W6LMCNB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };