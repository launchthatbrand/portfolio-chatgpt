// Import the functions you need from the SDKs you need

import { getApp, getApps, initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCldbzt3Lnc1pWMGwBljxqgMqP1c2bWICY",
  authDomain: "portfolio-chatgpt.firebaseapp.com",
  projectId: "portfolio-chatgpt",
  storageBucket: "portfolio-chatgpt.appspot.com",
  messagingSenderId: "654279250848",
  appId: "1:654279250848:web:2102d964c67e659729cac5",
  measurementId: "G-F22XNS7HM5",
};

// Initialize Firebase

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
