import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBT7lwUQfzBMxAnV5LPOU2ue8khaylA5SM",
  authDomain: "fullertube-f1a8f.firebaseapp.com",
  projectId: "fullertube-f1a8f",
  storageBucket: "fullertube-f1a8f.appspot.com",
  messagingSenderId: "326229462788",
  appId: "1:326229462788:web:1b5387857c2e62333c0a51",
  measurementId: "G-111ERYWK6S"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);