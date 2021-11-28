import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAIKZb0PY64nBnxsJuYw_duDCQKhv_HAUA",
    authDomain: "portfolio-7cf3a.firebaseapp.com",
    projectId: "portfolio-7cf3a",
    storageBucket: "portfolio-7cf3a.appspot.com",
    messagingSenderId: "593518758179",
    appId: "1:593518758179:web:d8686d5e1cec04297ea496",
    measurementId: "G-DERTS47LYQ"
  };

  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { projectStorage, projectFirestore, timestamp };