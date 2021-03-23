import * as firebase from 'firebase';
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyD30w7D0ClQBuWkWpDIGLHTpDQlcCtUszg",
    authDomain: "wireleibrary-ec1d3.firebaseapp.com",
    projectId: "wireleibrary-ec1d3",
    storageBucket: "wireleibrary-ec1d3.appspot.com",
    messagingSenderId: "155909613389",
    appId: "1:155909613389:web:0c966d21871e6530fff904"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();