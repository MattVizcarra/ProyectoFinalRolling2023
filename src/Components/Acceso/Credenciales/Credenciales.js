// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr_MszyiWKZjVWZ5m92ys4p_TGPr0DgQg",
  authDomain: "login-react2.firebaseapp.com",
  projectId: "login-react2",
  storageBucket: "login-react2.appspot.com",
  messagingSenderId: "786920398646",
  appId: "1:786920398646:web:2acbfb5d95197e81259d97"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;