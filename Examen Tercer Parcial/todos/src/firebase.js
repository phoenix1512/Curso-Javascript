import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBEJ_KrRmNT-hCpJXd6iui1QLNHLnuXfHw",
    authDomain: "todos-7f286.firebaseapp.com",
    databaseURL: "https://todos-7f286.firebaseio.com",
    projectId: "todos-7f286",
    storageBucket: "todos-7f286.appspot.com",
    messagingSenderId: "358642450370",
    appId: "1:358642450370:web:c6254fdd458b84599b605b",
    measurementId: "G-VF3HQ4V29C"
};

firebase.initializeApp(firebaseConfig);

export {firebase};