import {getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBZ6Qv1q5smAXgK7PL8J36VbefOyWslPlQ",
  authDomain: "coderreact-c3358.firebaseapp.com",
  projectId: "coderreact-c3358",
  storageBucket: "coderreact-c3358.appspot.com",
  messagingSenderId: "825403150580",
  appId: "1:825403150580:web:04e8af85483ecaf9a5cea1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Seleccionar la base de datos de Firestore
export const DB = getFirestore(app);