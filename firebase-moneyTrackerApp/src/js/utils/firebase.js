// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA4c6DLnxiR-KoIffUf1KDO2AV3FWgqPew',
  authDomain: 'money-tracker-app-19072024.firebaseapp.com',
  projectId: 'money-tracker-app-19072024',
  storageBucket: 'money-tracker-app-19072024.appspot.com',
  messagingSenderId: '780708719523',
  appId: '1:780708719523:web:8d6b39711b50bf5b0fc816',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export { app, auth, db, storage };
