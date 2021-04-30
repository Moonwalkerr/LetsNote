import  firebase from 'firebase/app';  
import 'firebase/auth'
import 'firebase/firestore'; // importing firestore to manage real time db stuffs    

const firebaseConfig = {
   apiKey: "AIzaSyBlRmZYcwZQPqJelKIFJG0xOPameLNv5So",
    authDomain: "evernoteclone-88617.firebaseapp.com",
    projectId: "evernoteclone-88617",
    storageBucket: "evernoteclone-88617.appspot.com",
    messagingSenderId: "795714751059",
    appId: "1:795714751059:web:93cb11d9b1ba18d4ab14a6"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// initializing the firestore
const fireStore = firebase.firestore();

// firebase server timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


// firebase auth init
const auth = firebase.auth();

// exporting the above to use in diff react components
export {fireStore, timestamp, auth}
