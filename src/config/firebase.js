import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD5sU8BK8IZAdxltCpXO_xpt04CAa0nj_I",
    authDomain: "proyectofinal-reactjs-e98a9.firebaseapp.com",
    projectId: "proyectofinal-reactjs-e98a9",
    storageBucket: "proyectofinal-reactjs-e98a9.appspot.com",
    messagingSenderId: "783113683812",
    appId: "1:783113683812:web:a23acbed95c170e1097071",
    measurementId: "G-TLBSBHCJF9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 
