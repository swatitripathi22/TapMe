
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCQsQKp_emoO6-u28hjuQE20wClFqpQ6BQ",
  authDomain: "chat-in-de4d4.firebaseapp.com",
  projectId: "chat-in-de4d4",
  storageBucket: "chat-in-de4d4.appspot.com",
  messagingSenderId: "383769457997",
  appId: "1:383769457997:web:b441802efb74f35f053304",
  measurementId: "G-C313R5XKGR"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth=getAuth()
 export const storage = getStorage();
 export const db =getFirestore()

// const analytics = getAnalytics(app);