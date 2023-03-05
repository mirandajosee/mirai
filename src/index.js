import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//Configuracion en caso de error de mantenimiento
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Your web app's Firebase configuration

/* const firebaseConfig = {
  apiKey: "AIzaSyByMRk9qwkdfkV16C2eR2-9U_7J1RH4_FY",
  authDomain: "mirai-b7fab.firebaseapp.com",
  projectId: "mirai-b7fab",
  storageBucket: "mirai-b7fab.appspot.com",
  messagingSenderId: "390009761928",
  appId: "1:390009761928:web:c947d9a75102971b4aaf3d"
}; */

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

