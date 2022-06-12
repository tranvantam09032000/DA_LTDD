import * as firebase from "firebase";
import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBvWBYAVBZiOitTA4p9QGNQ8atF1JW05ak",
  authDomain: "fir-news-410f3.firebaseapp.com",
  projectId: "fir-news-410f3",
  storageBucket: "fir-news-410f3.appspot.com",
  messagingSenderId: "1088824268980",
  appId: "1:1088824268980:web:449cfa13095d850cc09fe1"
};

let app;
let database;
//auth login+register
if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
  database = firebase.firestore();
}else{
  app = firebase.app();
}

const auth = firebase.auth();
// var database = firebase.database();


export {auth, database}