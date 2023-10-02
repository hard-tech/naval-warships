// Import the functions you need from the SDKs you need
import { initializeApp, getAnalytics, getDatabase } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhSLy37UhpShiVkKV2tdefUM2QRKVoVf0",
  authDomain: "naval-warships.firebaseapp.com",
  databaseURL: "https://naval-warships-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "naval-warships",
  storageBucket: "naval-warships.appspot.com",
  messagingSenderId: "189767529611",
  appId: "1:189767529611:web:c1d9448942e0e6a413108e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);