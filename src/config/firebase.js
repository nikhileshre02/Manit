// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGD8JURbena-c5dtS2zFy538kOHUvLP8Q",
  authDomain: "manit-5443e.firebaseapp.com",
  projectId: "manit-5443e",
  storageBucket: "manit-5443e.appspot.com",
  messagingSenderId: "849802396403",
  appId: "1:849802396403:web:75b0ad0a8297e237faad86",
  measurementId: "G-N0B12PL19X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
// const analytics = getAnalytics(app);