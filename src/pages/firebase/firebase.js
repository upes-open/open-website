import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyCBRP_et_Sg44bXes0snM6O_S1AV2-uUsA",
    authDomain: "upes-open.firebaseapp.com",
    databaseURL: "https://upes-open-default-rtdb.firebaseio.com",
    projectId: "upes-open",
    storageBucket: "upes-open.appspot.com",
    messagingSenderId: "924316504730",
    appId: "1:924316504730:web:bbec97b57330b02c274523",
    measurementId: "G-VHDNH0E7T8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app); 

export {database};
