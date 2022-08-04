import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcQgtcBTivuNIQX23xzz1WYzsokVGh0ZQ",
  authDomain: "proyecto-ecommerce-1c48d.firebaseapp.com",
  projectId: "proyecto-ecommerce-1c48d",
  storageBucket: "proyecto-ecommerce-1c48d.appspot.com",
  messagingSenderId: "269959679491",
  appId: "1:269959679491:web:63ae102847491676940836",
  measurementId: "G-92X48T0P7W"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
