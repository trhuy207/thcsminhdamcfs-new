import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAUe7RHHoGIh8CTHr5eGk1lr9krvbr0-4I",
    authDomain: "thcs-minhdam-cfs.firebaseapp.com",
    projectId: "thcs-minhdam-cfs",
    storageBucket: "thcs-minhdam-cfs.appspot.com",
    messagingSenderId: "862984031574",
    appId: "1:862984031574:web:debb929d52a5bbff9f9af7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore()