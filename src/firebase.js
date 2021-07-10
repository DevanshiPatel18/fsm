import firebase from "firebase/app";
require('firebase/firestore')
require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyAuUHIhpFNEzqp-e3pOPq901ImasERTNdw",
    authDomain: "fsmdashboardtest.firebaseapp.com",
    databaseURL: "https://fsmdashboardtest.firebaseio.com",
    projectId: "fsmdashboardtest",
    storageBucket: "fsmdashboardtest.appspot.com",
    messagingSenderId: "686384032480",
    appId: "1:686384032480:web:ee283b18254f5cc5defe85",
    measurementId: "G-M5ML7BED0Q" 
    
  };
  
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore(); 
export default db;