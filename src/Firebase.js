import { initializeApp } from "firebase/app";
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import  "firebase/compat/database"
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBI_69T1idL_h50Vp2TADwad5NSfwqa2BY",
  authDomain: "hubble-e45cf.firebaseapp.com",
  databaseURL: "https://hubble-e45cf-default-rtdb.firebaseio.com",
  projectId: "hubble-e45cf",
  storageBucket: "hubble-e45cf.appspot.com",
  messagingSenderId: "604485769072",
  appId: "1:604485769072:web:14f48127dbeb81bfbc21b5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const auth=firebase.auth()

export {auth};
export  {firebase};

