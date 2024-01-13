import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import App from "../App";



const firebaseConfig = {
  apiKey: "AIzaSyD3TucWu2oGpxNQT2wFoVeEke7-cRUqWCU",
  authDomain: "maxikioscolabarra.firebaseapp.com",
  projectId: "maxikioscolabarra",
  storageBucket: "maxikioscolabarra.appspot.com",
  messagingSenderId: "297813181320",
  appId: "1:297813181320:web:8886dc06ff91a957a2f03d"
};


initializeApp(firebaseConfig);

export const db = getFirestore(App);