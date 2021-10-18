import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDPBtUIDshzxQ9CGqqn0VF7B52AzFPU4iE",
    authDomain: "disney-fake-kvn-73b51.firebaseapp.com",
    projectId: "disney-fake-kvn-73b51",
    storageBucket: "disney-fake-kvn-73b51.appspot.com",
    messagingSenderId: "200951109821",
    appId: "1:200951109821:web:e66d78bbf56794f56cbfd4"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}