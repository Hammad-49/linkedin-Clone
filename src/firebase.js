//import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDb5oOiLn4qTXvrZ2lROmBkYwB3iK9dhy0",
    authDomain: "linkedin-clone-b3cbf.firebaseapp.com",
    projectId: "linkedin-clone-b3cbf",
    storageBucket: "linkedin-clone-b3cbf.appspot.com",
    messagingSenderId: "1015764615710",
    appId: "1:1015764615710:web:d7a090d95402aab69b240f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth =firebase.auth();

  export {db, auth};