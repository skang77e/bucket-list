import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBNft_9wJJ2k_wvJr8OdltKBgM0J_bGiqI",
    authDomain: "sparta-react-b7a6d.firebaseapp.com",
    projectId: "sparta-react-b7a6d",
    storageBucket: "sparta-react-b7a6d.appspot.com",
    messagingSenderId: "578102569550",
    appId: "1:578102569550:web:5142cf1eb108fabfebb11f",
    measurementId: "G-ZQB1QPHS57"
}

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
