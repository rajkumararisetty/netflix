import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyB4HlFRgeew3PDp7u8akcYV279jBTDdPGQ",
  authDomain: "netflix-cca16.firebaseapp.com",
  projectId: "netflix-cca16",
  storageBucket: "netflix-cca16.appspot.com",
  messagingSenderId: "684838628994",
  appId: "1:684838628994:web:6da19831c4c1637f670e9b",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
