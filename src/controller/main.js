import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAnJZqnL-c13J6UG8VhIcRREikTgfo3r2c",
    authDomain: "nexa-lh.firebaseapp.com",
    databaseURL: "https://nexa-lh.firebaseio.com",
    projectId: "nexa-lh",
    storageBucket: "nexa-lh.appspot.com",
    messagingSenderId: "492935503772",
    appId: "1:492935503772:web:62df276f3bc2fc3833b259"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

export {
    firebase,
    db,
    storage
}